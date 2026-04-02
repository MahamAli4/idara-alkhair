// // /pages/api/jobs/[id]/apply.ts
// import type { NextApiRequest, NextApiResponse } from "next";
// import prisma from "@/lib/prisma";

// type Data =
//   | { success: true; application: any }
//   | { success?: false; error: string };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   try {
//     // 👇 Captcha token extract karo
//     const { captchaToken, ...app } = req.body;

//     if (!captchaToken) {
//       return res.status(400).json({ error: "Captcha token missing" });
//     }

//     // 👇 Google reCAPTCHA verify
//     const secret = process.env.RECAPTCHA_SECRET_KEY;
//     if (!secret) {
//       return res
//         .status(500)
//         .json({ error: "Server misconfiguration: reCAPTCHA key missing" });
//     }

//     const verifyRes = await fetch(
//       `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${captchaToken}`,
//       { method: "POST" }
//     );

//     const verifyData = await verifyRes.json();

//     if (!verifyData.success) {
//       return res.status(400).json({ error: "Captcha verification failed ❌" });
//     }

//     // 👇 Job ID route se nikalo
//     const { id } = req.query;
//     const jobId = Array.isArray(id) ? id[0] : id;

//     if (!jobId) {
//       return res.status(400).json({ error: "Job ID is missing in URL" });
//     }

//     // 👇 Prisma se new application save
//     const newApplication = await prisma.jobApplication.create({
//       data: {
//         applicantName: app.applicantName,
//         applicantEmail: app.applicantEmail,
//         applicantPhone: app.applicantPhone || null,
//         coverLetter: app.coverLetter || null,
//         resumeUrl: app.resumeUrl || null,
//         yearsOfExperience: app.yearsOfExperience ?? null,
//         highestEducation: app.highestEducation || null,
//         city: app.city || null,
//         jobId: Number(jobId),
//       },
//     });

//     return res.status(200).json({ success: true, application: newApplication });
//   } catch (err: any) {
//     console.error("Apply API error:", err);
//     return res
//       .status(500)
//       .json({ error: err?.message || "Internal Server Error" });
//   }
// }

// incorrect route file 
