import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { verifySessionToken, getSessionCookieName } from '@/lib/auth';

export async function GET(req: Request) {
  try {
    const cookieHeader = req.headers.get('cookie');
    const cookieName = getSessionCookieName(); 
    // Token extract karein
    const token = cookieHeader?.match(new RegExp(`${cookieName}=([^;]+)`))?.[1];
    console.log('Token found:', token ? 'Yes' : 'No');

    if (!token) {
      console.log('No token found');
      return NextResponse.json({ user: null }, { status: 200 });
    }

    // Token verify karein
    console.log('Verifying token...');
    const session = await verifySessionToken(token);
    console.log('Session result:', session);

    if (!session) {
      console.log('Invalid token');
      return NextResponse.json({ user: null }, { status: 200 });
    }

    // User fetch karein database se
    console.log('Fetching user from DB with ID:', session.userId);
    const user = await prisma.user.findUnique({
      where: { id: Number(session.userId) }, // ✅ userId number hai
      select: { id: true, email: true, role: true, name: true }
    });

    console.log('User found:', user);

    if (!user) {
      return NextResponse.json({ user: null }, { status: 200 });
    }

    return NextResponse.json({ user });
  } catch (err) {
    console.log('Session API error:', err);
    return NextResponse.json({ user: null }, { status: 200 });
  }
}

export const runtime = 'nodejs';
