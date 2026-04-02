import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { createSessionToken, getSessionCookieName, verifyPassword } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Use secure password comparison
    const ok = await verifyPassword(password, user.passwordHash);
    console.log('Password match:', ok);

    if (!ok) {
      console.log('PASSWORD MISMATCH');
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    console.log('LOGIN SUCCESS');

    const token = await createSessionToken({ userId: user.id, role: user.role, email: user.email });

    // ✅ ADDED DEBUG LINES:
    console.log('Token created, length:', token.length);
    console.log('Cookie name:', getSessionCookieName());

    const res = NextResponse.json({ ok: true, user: { id: user.id, email: user.email, role: user.role, name: user.name } });
    res.cookies.set({
      name: getSessionCookieName(),
      value: token,
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });

    // ✅ ADDED DEBUG LINE:
    console.log('Cookie set successfully');
    return res;
  } catch (err: any) {
    console.log('ERROR:', err);
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}

export const runtime = 'nodejs';
