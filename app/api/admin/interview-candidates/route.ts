// app/api/admin/interview-candidates/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const candidates = await prisma.interviewCandidate.findMany({
      include: {
        application: {
          include: {
            job: {
              select: {
                title: true
              }
            }
          }
        }
      },
      orderBy: { markedAt: 'desc' }
    });

    
    return NextResponse.json({ 
      success: true, 
      candidates 
    });
  } catch (error) {
    console.error('Get interview candidates error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
