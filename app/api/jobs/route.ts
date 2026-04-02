import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSessionCookieName, verifySessionToken } from '@/lib/auth';

export async function GET() {       
  const jobs = await prisma.jobPost.findMany({
    where: { status: 'OPEN' },
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json({ ok: true, jobs });
}

export async function POST(req: Request) {
  try {
    const cookie = (req.headers.get('cookie') || '').split('; ').find((c) => c.startsWith(getSessionCookieName() + '='));
    const token = cookie ? decodeURIComponent(cookie.split('=')[1]) : '';
    const session = token ? await verifySessionToken(token) : null;
    if (!session || session.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const {
      title,
      description,
      location,
      jobType,
      category,
      department,
      employmentLevel,
      deadlineAt,
      requirements,
      responsibilities,
      qualifications,
    } = body || {};

    if (!title || !description || !location || !jobType) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const created = await prisma.jobPost.create({
      data: {
        title,
        description,
        location,
        jobType,
        createdById: session.userId,
        category: category || null,
        department: department || null,
        employmentLevel: employmentLevel || null,
        deadlineAt: deadlineAt ? new Date(deadlineAt) : null,
        requirements: requirements || null,
        responsibilities: responsibilities || null,
        qualifications: qualifications || null,
      },
    });

    return NextResponse.json({ ok: true, job: created }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}

export const runtime = 'nodejs';


