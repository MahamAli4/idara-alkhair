import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSessionCookieName, verifySessionToken } from '@/lib/auth';

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        // Await params in Next.js 15
        const { id } = await params;

        // Auth check
        const cookie = (req.headers.get('cookie') || '').split('; ').find((c) => c.startsWith(getSessionCookieName() + '='));
        const token = cookie ? decodeURIComponent(cookie.split('=')[1]) : '';
        const session = token ? await verifySessionToken(token) : null;

        if (!session || session.role !== 'ADMIN') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        if (!id) {
            return NextResponse.json({ error: 'Invalid Job ID' }, { status: 400 });
        }

        const jobId = parseInt(id);
        if (isNaN(jobId)) {
            return NextResponse.json({ error: 'Invalid Job ID format' }, { status: 400 });
        }

        await prisma.jobPost.delete({
            where: { id: jobId },
        });

        return NextResponse.json({ ok: true, message: 'Job deleted successfully' });
    } catch (err: any) {
        console.error('Error deleting job:', err);
        return NextResponse.json({ error: err?.message || 'Failed to delete job' }, { status: 500 });
    }
}

export const runtime = 'nodejs';
