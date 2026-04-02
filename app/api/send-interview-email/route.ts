import nodemailer from 'nodemailer';
import type { NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Interview confirmation email template
async function sendInterviewEmail(candidateName: string, candidateEmail: string, interviewDate: string, interviewTime: string, position: string) {
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
    const { candidateId, candidateName, candidateEmail, interviewDate, interviewTime, position } = body;

    if (!candidateId || !candidateEmail || !interviewDate || !interviewTime) {
      return new Response(JSON.stringify({ 
        error: 'Candidate ID, email, interview date and time are required.' 
      }), { status: 400 });
    }

    // ✅ Send interview email to candidate
    try {
      await sendInterviewEmail(candidateName, candidateEmail, interviewDate, interviewTime, position);
      console.log(`Interview email sent to ${candidateEmail}`);
      
      // ✅ Update candidate status in database - CAPITAL 'C' use karein
      try {
        await prisma.candidate.update({  // ✅ Capital 'C'
          where: { id: candidateId },
          data: { 
            status: 'INTERVIEW_SCHEDULED',
            interviewDate: interviewDate,
            interviewTime: interviewTime
          }
        });
      } catch (dbError) {
        console.error('Database update failed:', dbError);
        // Continue even if DB update fails
      }
      
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'Interview email sent successfully!' 
      }), { status: 200 });
      
    } catch (emailError) {
      console.error('Interview email failed:', emailError);
      return new Response(JSON.stringify({ 
        error: 'Failed to send interview email' 
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
