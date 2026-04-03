import nodemailer from 'nodemailer';
import type { NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Interview confirmation email template
async function sendInterviewEmail(candidateName: string, candidateEmail: string, interviewDate: string, interviewTime: string, position: string) {
  // ✅ Check for missing or placeholder credentials
  if (!process.env.EMAIL_USER || process.env.EMAIL_USER === 'your-email@gmail.com') {
    throw new Error('SMTP Email not configured. Please update EMAIL_USER in .env');
  }
  if (!process.env.EMAIL_PASS || process.env.EMAIL_PASS === 'your-gmail-app-password') {
    throw new Error('SMTP Password not configured. Please update EMAIL_PASS in .env');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"${process.env.COMPANY_NAME} HR" <${process.env.EMAIL_USER}>`,
    to: candidateEmail,
    subject: `Interview Invitation - ${process.env.COMPANY_NAME}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #059669; color: white; padding: 20px; text-align: center;">
          <h1>Interview Invitation</h1>
        </div>
        <div style="padding: 20px; background: #f9fafb;">
          <p>Dear <strong>${candidateName}</strong>,</p>
          
          <p>Thank you for your interest in joining our team at <strong>${process.env.COMPANY_NAME}</strong>.</p>
          
          <p>We are pleased to invite you for an interview for the position of <strong>${position}</strong>.</p>
          
          <div style="background: white; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h3 style="color: #059669; margin-top: 0;">Interview Details:</h3>
            <p><strong>📅 Date:</strong> ${interviewDate}</p>
            <p><strong>⏰ Time:</strong> ${interviewTime}</p>
            <p><strong>💼 Position:</strong> ${position}</p>
          </div>
          
          <p><strong>Please bring the following documents:</strong></p>
          <ul>
            <li>Updated Resume/CV</li>
            <li>Educational Certificates</li>
            <li>CNIC Copy</li>
            <li>Experience Letters (if any)</li>
          </ul>
          
          <p>If you have any questions or need to reschedule, please contact us at <strong>${process.env.EMAIL_USER}</strong>.</p>
          
          <p>We look forward to meeting you!</p>
          
          <p>Best regards,<br>
          <strong>HR Department</strong><br>
          <strong>${process.env.COMPANY_NAME}</strong></p>
        </div>
      </div>
    `
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { 
      candidateId, 
      applicationId, 
      candidateName, 
      candidateEmail, 
      interviewDate, 
      interviewTime, 
      position 
    } = body;

    if ((!candidateId && !applicationId) || !candidateEmail || !interviewDate || !interviewTime) {
      return new Response(JSON.stringify({ 
        error: 'Missing required parameters. Need ID, email, date, and time.' 
      }), { status: 400 });
    }

    // ✅ Send interview email to candidate
    try {
      await sendInterviewEmail(candidateName, candidateEmail, interviewDate, interviewTime, position);
      console.log(`Interview email sent to ${candidateEmail}`);
      
      // ✅ Handle Candidate Table update (Manual Candidates)
      if (candidateId && !applicationId) {
        try {
          await prisma.candidate.update({
            where: { id: candidateId },
            data: { 
              status: 'INTERVIEW_SCHEDULED'
            }
          });
        } catch (dbError) {
          console.error('Candidate DB update failed:', dbError);
        }
      }

      // ✅ Handle JobApplication & InterviewCandidate update (Career Portal Applications)
      if (applicationId) {
        try {
          // Update Application status
          await prisma.jobApplication.update({
            where: { id: applicationId },
            data: { status: 'INTERVIEW' }
          });

          // Update or Create InterviewCandidate record
          await prisma.interviewCandidate.upsert({
            where: { applicationId },
            update: {
              interviewDate,
              interviewTime,
              status: 'SCHEDULED'
            },
            create: {
              applicationId,
              candidateName,
              candidateEmail,
              jobTitle: position || 'N/A',
              jobId: body.jobId || 0,
              interviewDate,
              interviewTime,
              status: 'SCHEDULED'
            }
          });
        } catch (dbError) {
          console.error('JobApplication/Interview DB update failed:', dbError);
        }
      }
      
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'Interview email sent successfully!' 
      }), { status: 200 });
      
    } catch (emailError: any) {
      const errorMessage = emailError?.message || 'Failed to send interview email';
      console.error('Interview email failed:', errorMessage);
      return new Response(JSON.stringify({ 
        error: errorMessage 
      }), { status: 500 });
    }

  } catch (err: any) {
    console.error('Unexpected error:', err);
    return new Response(JSON.stringify({ 
      error: 'Failed to process interview request' 
    }), { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export const runtime = 'nodejs';
