import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const pageName = searchParams.get('pageName');
    if (!pageName) return NextResponse.json({ error: 'Page name required' }, { status: 400 });

    // Try multiple possible model names to be safe
    const model = (prisma as any).websiteContent || (prisma as any).pageContent;
    if (!model) throw new Error('Prisma Model not found. Please run npx prisma generate');

    const content = await model.findMany({ where: { pageName } });
    return NextResponse.json(content || []);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { pageName, key, value, type } = body;

    const model = (prisma as any).websiteContent || (prisma as any).pageContent;
    if (!model) throw new Error('Prisma Model not found. Run npx prisma generate inside docker.');

    const existing = await model.findFirst({ where: { pageName, key } });

    let result;
    if (existing) {
      result = await model.update({
        where: { id: existing.id },
        data: { value, type, updatedAt: new Date() }
      });
    } else {
      result = await model.create({
        data: { pageName, key, value, type }
      });
    }

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('CMS API ERROR:', error);
    return NextResponse.json({ 
      error: 'API CRASHED', 
      message: error.message,
      stack: error.stack?.split('\n')[0] // Only first line for safety
    }, { status: 500 });
  }
}
