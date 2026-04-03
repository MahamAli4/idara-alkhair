import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// POST: Public submission of volunteer form
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      applicantName, 
      applicantEmail, 
      volunteerName, 
      volunteerEmail, 
      volunteerAge, 
      availability 
    } = body;

    if (!applicantName || !applicantEmail || !volunteerName || !volunteerEmail) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const application = await prisma.volunteerApplication.create({
      data: {
        applicantName,
        applicantEmail,
        volunteerName,
        volunteerEmail,
        volunteerAge: String(volunteerAge),
        availability: Array.isArray(availability) ? availability.join(', ') : availability,
      },
    });

    return NextResponse.json({ success: true, application }, { status: 201 });
  } catch (error: any) {
    console.error('Volunteer submission error:', error);
    return NextResponse.json({ error: error.message || 'Failed to submit application' }, { status: 500 });
  }
}

// GET: Admin fetch of all volunteer applications
export async function GET() {
  try {
    const volunteers = await prisma.volunteerApplication.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json({ volunteers });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to fetch volunteers' }, { status: 500 });
  }
}

// DELETE: Admin delete of a volunteer application
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing ID' }, { status: 400 });
    }

    await prisma.volunteerApplication.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ success: true, message: 'Application deleted' });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to delete application' }, { status: 500 });
  }
}
