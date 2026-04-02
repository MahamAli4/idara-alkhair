import nodemailer from 'nodemailer';
import type { NextRequest } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function saveFallback(payload: Record<string, any>) {
  const dir = path.join(process.cwd(), '.debug-mails');
  await fs.mkdir(dir, { recursive: true });
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filename = `contact-${timestamp}.json`;
  const full = path.join(dir, filename);
  await fs.writeFile(full, JSON.stringify({ ...payload, savedAt: new Date().toISOString() }, null, 2), 'utf8');
  return full;
}

// ✅ 1. Thank you email user ko bhejne ke liye
async function sendThankYouEmail(userName: string, userEmail: string, userPhone: string | null, userMessage: string) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"${process.env.COMPANY_NAME}" <${process.env.EMAIL_USER}>`,
    to: userEmail,
    subject: `Thank You for Contacting ${process.env.COMPANY_NAME}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #2563eb; color: white; padding: 20px; text-align: center;">
          <h1>Thank You for Contacting ${process.env.COMPANY_NAME}</h1>
        </div>
        <div style="padding: 20px; background: #f9fafb;">
          <p>Dear <strong>${userName}</strong>,</p>
          <p>Thank you for reaching out to us. We have received your message and will respond within 24-48 hours.</p>
          ${userMessage ? `<p><strong>Your Message:</strong></p>
          <p style="background: white; padding: 15px; border-left: 4px solid #2563eb; border-radius: 4px;">${userMessage}</p>` : ''}
          ${userPhone ? `<p><strong>Phone:</strong> ${userPhone}</p>` : ''}
          <p>Best regards,<br><strong>${process.env.COMPANY_NAME} Team</strong></p>
        </div>
      </div>
    `
  });
}

// ✅ 2. Admin ko user ka complete data bhejne ke liye
async function sendAdminNotification(name: string, email: string, phone: string | null, date: string | null, message: string) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_USER;

  await transporter.sendMail({
    from: `"Contact Form" <${process.env.EMAIL_USER}>`,
    to: adminEmail,
    subject: `📧 New Contact Message from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #dc2626; color: white; padding: 20px; text-align: center;">
          <h1>🚨 New Contact Form Submission</h1>
        </div>
        <div style="padding: 20px; background: #f9fafb;">
          <h3>Contact Details:</h3>
          <p><strong>👤 Name:</strong> ${name}</p>
          <p><strong>📧 Email:</strong> ${email}</p>
          <p><strong>📞 Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>📅 Preferred Date:</strong> ${date || 'Not specified'}</p>
          <p><strong>💬 Message:</strong></p>
          <div style="background: white; padding: 15px; border-left: 4px solid #dc2626; border-radius: 4px; margin: 10px 0;">
            ${message.replace(/\n/g, '<br/>')}
          </div>
          <p><strong>⏰ Received:</strong> ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `
  });
}

export async function POST(req: NextRequest) {
  try {
    console.log('[api/contact] POST received');
    const body = await req.json();
    console.log('[api/contact] body:', JSON.stringify(body));
    const { name, email, phone, date, message } = body || {};

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Name, email and message are required.' }), { status: 400 });
    }

    // ✅ STEP 1: PEHLE DATABASE MEIN SAVE KARO (FIXED)
    let dbSaved = false;
    let savedMessageId = null;
    
    try {
      // Database schema ke according data save karo
      const savedMessage = await prisma.contactMessage.create({
        data: { 
          name, 
          email, 
          phone: phone || null, 
          message
          // preferredDate field hata diya kyunke schema mein nahi hai
        }
      });
      
      console.log('[api/contact] Message saved to database ID:', savedMessage.id);
      dbSaved = true;
      savedMessageId = savedMessage.id;
      
    } catch (dbError: any) {
      console.error('[api/contact] Database save failed:', dbError);
      
      // Specific error log karo
      if (dbError.message.includes('preferredDate')) {
        console.error('[api/contact] ERROR: preferredDate field does not exist in database schema');
      }
      
      // Continue even if database fails
    }

    // ✅ STEP 2: User ko thank you email bhejo
    let thankYouSent = false;
    try {
      await sendThankYouEmail(name, email, phone, message);
      console.log('[api/contact] Thank you email sent to user');
      thankYouSent = true;
    } catch (thankYouError) {
      console.error('[api/contact] Thank you email failed:', thankYouError);
    }

    // ✅ STEP 3: Admin ko complete data bhejo
    let adminNotificationSent = false;
    try {
      await sendAdminNotification(name, email, phone, date, message);
      console.log('[api/contact] Admin notification sent with complete data');
      adminNotificationSent = true;
    } catch (adminEmailError) {
      console.error('[api/contact] Admin email failed:', adminEmailError);
    }

    // ✅ STEP 4: Success response with status
    return new Response(JSON.stringify({ 
      ok: true, 
      message: 'Contact form submitted successfully!',
      databaseSaved: dbSaved,
      messageId: savedMessageId,
      userThankYouSent: thankYouSent,
      adminNotificationSent: adminNotificationSent
    }), { status: 200 });

  } catch (err: any) {
    console.error('[api/contact] unexpected error', err);
    
    // Final fallback - local save
    try {
      const saved = await saveFallback({ 
        error: err.message,
        body: await req.json().catch(() => ({}))
      });
      
      return new Response(JSON.stringify({ 
        ok: true, 
        savedTo: saved, 
        warning: 'Server error but message saved locally.' 
      }), { status: 200 });
    } catch (saveErr) {
      return new Response(JSON.stringify({ 
        error: 'Failed to process contact form' 
      }), { status: 500 });
    }
  } finally {
    // ✅ Prisma connection close karo
    await prisma.$disconnect();
  }
}

export const runtime = 'nodejs';
