// app/api/admin/hired-candidates/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const candidates = await prisma.hiredCandidate.findMany({
      orderBy: { hiredAt: 'desc' }
    });

    return NextResponse.json({ 
      success: true, 
      candidates 
    });
  } catch (error) {
    console.error('Get hired candidates error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
