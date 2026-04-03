import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      jobId,
      applicantName,
      applicantEmail,
      applicantPhone,
      coverLetter,
      resumeUrl,
      yearsOfExperience,
      highestEducation,
      city
    } = body;

    if (!jobId || !applicantName || !applicantEmail) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Convert jobId to number
    const jId = parseInt(jobId);
    if (isNaN(jId)) {
      return NextResponse.json({ error: 'Invalid Job ID' }, { status: 400 });
    }

    const application = await prisma.jobApplication.create({
      data: {
        jobId: jId,
        applicantName,
        applicantEmail,
        applicantPhone: applicantPhone || null,
        coverLetter: coverLetter || null,
        resumeUrl: resumeUrl || null,
        yearsOfExperience: yearsOfExperience ? parseInt(yearsOfExperience) : null,
        highestEducation: highestEducation || null,
        city: city || null,
        status: 'PENDING'
      }
    });

    return NextResponse.json({ ok: true, application });

  } catch (error: any) {
    console.error('Job application API error:', error);
    return NextResponse.json({ error: 'Failed to submit application: ' + error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export const runtime = 'nodejs';
