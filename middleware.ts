import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifySessionToken, getSessionCookieName } from './lib/auth';

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const path = url.pathname;

  // Protect /admin and /api/admin/* paths
  if (path.startsWith('/admin') || path.startsWith('/api/admin')) {
    // Exclude /admin/login from the protection
    if (path === '/admin/login') {
      return NextResponse.next();
    }

    const cookieName = getSessionCookieName();
    const token = req.cookies.get(cookieName)?.value;

    if (!token) {
      if (path.startsWith('/api/')) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
      url.pathname = '/admin/login';
      return NextResponse.redirect(url);
    }

    try {
      const session = await verifySessionToken(token);
      if (!session || session.role !== 'ADMIN') {
        if (path.startsWith('/api/')) {
          return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        url.pathname = '/admin/login';
        return NextResponse.redirect(url);
      }
    } catch (e) {
      if (path.startsWith('/api/')) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
      url.pathname = '/admin/login';
      return NextResponse.redirect(url);
    }
  }

  // Same protection for /api/jobs POST/DELETE etc?
  // Let the API route handle its own session checks, as /api/jobs is public for GET.

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
