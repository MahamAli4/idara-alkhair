import { NextRequest } from 'next/server';
import { getSessionCookieName, verifySessionToken } from '@/lib/auth';
import prisma  from '@/lib/prisma'; // ✅ Prisma import karo

// Updated admin messages endpoint using Prisma
export async function GET(req: NextRequest) {
  try {
    // ✅ Session check (same as before)
    const cookie = (req.headers.get('cookie') || '').split('; ').find((c) => c.startsWith(getSessionCookieName() + '='));
    const token = cookie ? decodeURIComponent(cookie.split('=')[1]) : '';
    const session = token ? await verifySessionToken(token) : null;
    if (!session || session.role !== 'ADMIN') {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    // ✅ Database se messages fetch karo using Prisma
    const messages = await prisma.contactMessage.findMany({
      orderBy: {
        createdAt: 'desc' // ✅ Newest first
      }
    });

    return new Response(JSON.stringify({ 
      ok: true, 
      messages: messages || [] 
    }), { 
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (err: any) {
    console.error('Error fetching messages:', err);
    return new Response(JSON.stringify({ 
      error: err?.message || String(err) 
    }), { 
      status: 500 
    });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    // ✅ Session check
    const cookie = (req.headers.get('cookie') || '').split('; ').find((c) => c.startsWith(getSessionCookieName() + '='));
    const token = cookie ? decodeURIComponent(cookie.split('=')[1]) : '';
    const session = token ? await verifySessionToken(token) : null;
    if (!session || session.role !== 'ADMIN') {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    // ✅ Get messageIds from request body
    const { messageIds } = await req.json();

    if (!messageIds || !Array.isArray(messageIds) || messageIds.length === 0) {
      return new Response(JSON.stringify({ error: 'messageIds array is required' }), { status: 400 });
    }

    // ✅ Delete messages from database
    const deleteResult = await prisma.contactMessage.deleteMany({
      where: {
        id: {
          in: messageIds
        }
      }
    });

    return new Response(JSON.stringify({
      ok: true,
      deletedCount: deleteResult.count,
      message: `Successfully deleted ${deleteResult.count} message(s)`
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (err: any) {
    console.error('Error deleting messages:', err);
    return new Response(JSON.stringify({
      error: err?.message || String(err)
    }), {
      status: 500
    });
  }
}

export const runtime = 'nodejs';
