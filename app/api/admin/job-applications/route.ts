// // import { NextResponse } from 'next/server';
// // import prisma from '@/lib/prisma';
// // import { getSessionCookieName, verifySessionToken } from '@/lib/auth';

// // export async function GET(req: Request) {
// //   const cookie = (req.headers.get('cookie') || '').split('; ').find((c) => c.startsWith(getSessionCookieName() + '='));
// //   const token = cookie ? decodeURIComponent(cookie.split('=')[1]) : '';
// //   const session = token ? await verifySessionToken(token) : null;
// //   if (!session || session.role !== 'ADMIN') {
// //     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
// //   }

// //   const apps = await prisma.jobApplication.findMany({
// //     orderBy: { createdAt: 'desc' },
// //     include: { job: { select: { title: true } } },
// //   });
// //   return NextResponse.json({ ok: true, applications: apps });
// // }

// // export const runtime = 'nodejs';

// import { NextResponse } from 'next/server';
// import prisma from '@/lib/prisma';

// export async function GET() {
//   try {
//     const jobs = await prisma.jobPost.findMany({
//       orderBy: { createdAt: 'desc' },
//       where: { status: 'OPEN' } // Only show open jobs
//     });
    
//     return NextResponse.json({ jobs });
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
    
//     const job = await prisma.jobPost.create({
//       data: {
//         title: body.title,
//         description: body.description,
//         location: body.location,
//         jobType: body.jobType,
//         category: body.category,
//         department: body.department,
//         employmentLevel: body.employmentLevel,
//         deadlineAt: body.deadlineAt ? new Date(body.deadlineAt) : null,
//         requirements: body.requirements,
//         responsibilities: body.responsibilities,
//         qualifications: body.qualifications,
//         createdById: 1 // Temporary - admin user ID
//       }
//     });
    
//     return NextResponse.json({ job });
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

// trash created files.
