// app/api/admin/mark-interview/route.ts
import { NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { 
      applicationId, 
      candidateName, 
      candidateEmail, 
      jobTitle, 
      jobId,
      interviewDate,
      interviewTime
    } = body;

    if (!applicationId || !candidateName || !candidateEmail) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    // Check if already exists
    const existing = await prisma.interviewCandidate.findUnique({
      where: { applicationId }
    });

    if (existing) {
      // Update existing
      await prisma.interviewCandidate.update({
        where: { applicationId },
        data: {
          candidateName,
          candidateEmail,
          jobTitle,
          jobId,
          interviewDate: interviewDate || null,
          interviewTime: interviewTime || null,
          status: 'SCHEDULED'
        }
      });
    } else {
      // Create new
      await prisma.interviewCandidate.create({
        data: {
          applicationId,
          candidateName,
          candidateEmail,
          jobTitle,
          jobId,
          interviewDate: interviewDate || null,
          interviewTime: interviewTime || null,
          status: 'SCHEDULED'
        }
      });
    }

    // Update application status
    await prisma.jobApplication.update({
      where: { id: applicationId },
      data: { status: 'INTERVIEW' }
    });

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Candidate marked for interview' 
    }), { status: 200 });

  } catch (error: any) {
    console.error('Mark interview error:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to mark for interview: ' + error.message 
    }), { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
