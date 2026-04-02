import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { 
      donorName, 
      donorEmail, 
      donorPhone, 
      amount, 
      donorBank, 
      targetNgoBank, 
      reference 
    } = body;

    if (!donorName || !donorEmail || !amount || !targetNgoBank) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Save to Database
    const donation = await prisma.donationNotification.create({
      data: {
        donorName,
        donorEmail,
        donorPhone,
        amount: parseFloat(amount),
        donorBank,
        targetNgoBank,
        reference,
        status: 'PENDING'
      }
    });

    // 2. Send Email Notification to Admin
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_USER;

    await transporter.sendMail({
      from: `"${process.env.COMPANY_NAME} Donation" <${process.env.EMAIL_USER}>`,
      to: adminEmail,
      subject: `💰 New Donation Notification: ${donorName} - PK-Rs. ${amount}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
          <div style="background: #012060; color: white; padding: 24px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Donation Notification</h1>
          </div>
          <div style="padding: 24px; background: #ffffff;">
            <p style="color: #4b5563; font-size: 16px;">A donor has notified you of a bank transfer.</p>
            
            <div style="background: #f9fafb; border-radius: 8px; padding: 16px; margin: 20px 0;">
              <p style="margin: 8px 0;"><strong>👤 Donor Name:</strong> ${donorName}</p>
              <p style="margin: 8px 0;"><strong>📧 Email:</strong> ${donorEmail}</p>
              <p style="margin: 8px 0;"><strong>📞 Phone:</strong> ${donorPhone || 'N/A'}</p>
              <p style="margin: 8px 0; font-size: 18px; color: #012060;"><strong>💵 Amount:</strong> PK-Rs. ${amount}</p>
            </div>

            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px;">
              <p style="margin: 8px 0;"><strong>🏦 NGO Bank Received:</strong> ${targetNgoBank}</p>
              <p style="margin: 8px 0;"><strong>🏛️ Donor's Bank:</strong> ${donorBank || 'Not specified'}</p>
              <p style="margin: 8px 0;"><strong>🔢 Reference/ID:</strong> ${reference || 'No reference provided'}</p>
            </div>

            <div style="margin-top: 30px; text-align: center;">
              <p style="color: #9ca3af; font-size: 12px;">This is an automated notification from Idara Al-Khair Portal.</p>
            </div>
          </div>
        </div>
      `
    });

    return NextResponse.json({ ok: true, donationId: donation.id });

  } catch (error: any) {
    console.error('Donation API error:', error);
    return NextResponse.json({ error: 'Failed to process donation notification' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
