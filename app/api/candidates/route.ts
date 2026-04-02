import { NextResponse } from 'next/server';
import  prisma  from '@/lib/prisma';

export async function GET() {
  try {
    const candidates = await prisma.candidate.findMany({
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json({ 
      success: true,
      candidates 
    });
  } catch (error) {
    console.error('Error fetching candidates:', error);
    return NextResponse.json(
      { error: 'Failed to fetch candidates' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { name, email, position, phone, experience, education } = await request.json();
    
    if (!name || !email || !position) {
      return NextResponse.json(
        { error: 'Name, email and position are required' },
        { status: 400 }
      );
    }

    // Check if candidate already exists
    const existingCandidate = await prisma.candidate.findUnique({
      where: { email }
    });

    if (existingCandidate) {
      return NextResponse.json(
        { error: 'Candidate with this email already exists' },
        { status: 400 }
      );
    }

    // Create new candidate
    const candidate = await prisma.candidate.create({
      data: {
        name,
        email,
        position,
        phone: phone || null,
        experience: experience || null,
        education: education || null,
        status: 'PENDING'
      }
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Candidate added successfully',
      candidate
    }, { status: 201 });
    
  } catch (error) {
    console.error('Error adding candidate:', error);
    return NextResponse.json(
      { error: 'Failed to add candidate' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { error: 'Candidate ID is required' },
        { status: 400 }
      );
    }

    await prisma.candidate.delete({
      where: { id: parseInt(id) }
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Candidate deleted successfully' 
    });
    
  } catch (error) {
    console.error('Error deleting candidate:', error);
    return NextResponse.json(
      { error: 'Failed to delete candidate' },
      { status: 500 }
    );
  }
}
