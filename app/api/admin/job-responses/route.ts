// app/api/admin/job-responses/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const applications = await prisma.jobApplication.findMany({
      include: {
        job: {
          select: {
            title: true,
            location: true,
            jobType: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json({ 
      success: true, 
      applications 
    });
  } catch (error) {
    console.error('Get job responses error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
