import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// ✅ POST method - Job apply ke liye
export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { captchaToken, ...app } = body;

    console.log('Apply API called for job:', params.id);

    if (!captchaToken) {
      return NextResponse.json({ error: "Captcha token missing" }, { status: 400 });
    }

    // AutoCaptcha verification (Google reCAPTCHA ki jagah)
    if (!captchaToken.startsWith('auto-captcha-verified-token-')) {
      return NextResponse.json({ error: "Captcha verification failed" }, { status: 400 });
    }

    const jobId = params.id;
    if (!jobId) {
      return NextResponse.json({ error: "Job ID is missing" }, { status: 400 });
    }

    // Check if job exists
    const job = await prisma.jobPost.findUnique({
      where: { id: parseInt(jobId) }
    });

    if (!job) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    // Create application
    const newApplication = await prisma.jobApplication.create({
      data: {
        applicantName: app.applicantName,
        applicantEmail: app.applicantEmail,
        applicantPhone: app.applicantPhone || null,
        coverLetter: app.coverLetter || null,
        resumeUrl: app.resumeUrl || null,
        yearsOfExperience: app.yearsOfExperience ? parseInt(app.yearsOfExperience) : null,
        highestEducation: app.highestEducation || null,
        city: app.city || null,
        jobId: parseInt(jobId),
      },
    });

    console.log('Application created:', newApplication.id);

    return NextResponse.json({ 
      success: true, 
      application: newApplication 
    });

  } catch (err: any) {
    console.error("Apply API error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// ✅ DELETE method - Job delete ke liye (YEH ADD KAREIN)
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const jobId = parseInt(params.id);

    // Check if job exists
    const job = await prisma.jobPost.findUnique({
      where: { id: jobId }
    });

    if (!job) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    // Pehle related applications delete karein (optional)
    await prisma.jobApplication.deleteMany({
      where: { jobId: jobId }
    });

    // Phir job delete karein
    await prisma.jobPost.delete({
      where: { id: jobId }
    });

    console.log('Job deleted successfully:', jobId);

    return NextResponse.json({ 
      success: true, 
      message: "Job deleted successfully" 
    });

  } catch (error) {
    console.error("Delete job error:", error);
    return NextResponse.json({ error: "Failed to delete job" }, { status: 500 });
  }
}