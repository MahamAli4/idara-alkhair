import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

async function sendVolunteerEmail(to: string, subject: string, html: string) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error('Email credentials not configured');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"${process.env.COMPANY_NAME || 'Idara Al-Khair'} Admin" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, action, date, time } = body;

    if (!id || !action) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const application = await prisma.volunteerApplication.findUnique({
      where: { id: parseInt(id) },
    });

    if (!application) {
      return NextResponse.json({ error: 'Application not found' }, { status: 404 });
    }

    let status = 'PENDING';
    let emailSubject = '';
    let emailHtml = '';

    if (action === 'APPROVE') {
      status = 'APPROVED';
      emailSubject = 'Welcome to Team Idara Al-Khair!';
      emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <div style="background: #031249; padding: 30px; text-align: center; border-radius: 20px 20px 0 0;">
            <h1 style="color: white; margin: 0;">Welcome Aboard! 🎉</h1>
          </div>
          <div style="padding: 30px; background: #fff; border: 1px solid #eee; border-radius: 0 0 20px 20px;">
            <p>Dear <strong>${application.volunteerName}</strong>,</p>
            <p>We are absolutely thrilled to inform you that your volunteer application for <strong>Idara Al-Khair</strong> has been <strong>APPROVED</strong>!</p>
            <p>Thank you for choosing to dedicate your time and passion to our mission. Your contribution will make a real difference in the lives of those we serve.</p>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 15px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #031249;">Next Steps:</h3>
              <ul style="padding-left: 20px;">
                <li>Join our volunteer orientation scheduled for next week.</li>
                <li>You will be added to our official communication channels shortly.</li>
                <li>Wait for our coordinator to contact you with your first assignment.</li>
              </ul>
            </div>
            <p>If you have any immediate questions, feel free to reply to this email.</p>
            <p>Welcome to the family!</p>
            <p>Best regards,<br><strong>The Idara Al-Khair Team</strong></p>
          </div>
        </div>
      `;
    } else if (action === 'INTERVIEW') {
      status = 'INTERVIEW_SCHEDULED';
      emailSubject = 'Invitation for Volunteer Orientation/Meet - Idara Al-Khair';
      emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <div style="background: #f37335; padding: 30px; text-align: center; border-radius: 20px 20px 0 0;">
            <h1 style="color: white; margin: 0;">Let's Connect! 🤝</h1>
          </div>
          <div style="padding: 30px; background: #fff; border: 1px solid #eee; border-radius: 0 0 20px 20px;">
            <p>Dear <strong>${application.volunteerName}</strong>,</p>
            <p>Thank you for expressing your interest in volunteering with <strong>Idara Al-Khair</strong>.</p>
            <p>We've reviewed your application and would love to have a brief introductory meeting/orientation with you to discuss how you can contribute.</p>
            <div style="background: #fff8f5; padding: 20px; border-radius: 15px; margin: 20px 0; border: 1px solid #f37335;">
              <h3 style="margin-top: 0; color: #f37335;">Meeting Details:</h3>
              <p>📅 <strong>Date:</strong> ${date}</p>
              <p>⏰ <strong>Time:</strong> ${time}</p>
              <p>📍 <strong>Location:</strong> Online / Office (Details to follow)</p>
            </div>
            <p>Please confirm if this time works for you. We look forward to meeting you!</p>
            <p>Best regards,<br><strong>The Idara Al-Khair Team</strong></p>
          </div>
        </div>
      `;
    } else if (action === 'REJECT') {
      status = 'REJECTED';
      emailSubject = 'Regarding your Volunteer Application - Idara Al-Khair';
      emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <div style="padding: 30px; background: #fff; border: 1px solid #eee; border-radius: 20px;">
            <p>Dear <strong>${application.volunteerName}</strong>,</p>
            <p>Thank you for your interest in volunteering with <strong>Idara Al-Khair</strong>.</p>
            <p>We carefully reviewed your application, and while we appreciate your willingness to help, we are unable to move forward with your application at this time.</p>
            <p>We receive many applications and unfortunately cannot accommodate everyone. However, we will keep your details on file for future opportunities that may be a better match.</p>
            <p>We wish you the very best in your future endeavors and thank you again for your kindness.</p>
            <p>Best regards,<br><strong>The Idara Al-Khair Team</strong></p>
          </div>
        </div>
      `;
    }

    const updated = await prisma.volunteerApplication.update({
      where: { id: parseInt(id) },
      data: { 
        status,
        interviewDate: date || null,
        interviewTime: time || null,
      },
    });

    if (emailSubject && emailHtml) {
      await sendVolunteerEmail(application.volunteerEmail, emailSubject, emailHtml);
    }

    return NextResponse.json({ success: true, application: updated });
  } catch (error: any) {
    console.error('Volunteer response error:', error);
    return NextResponse.json({ error: error.message || 'Failed to process response' }, { status: 500 });
  }
}
