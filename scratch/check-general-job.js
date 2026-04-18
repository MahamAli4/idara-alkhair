const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const generalJob = await prisma.jobPost.findFirst({
    where: { title: { contains: 'General Application', mode: 'insensitive' } }
  });
  console.log('General Job:', generalJob);
  
  if (!generalJob) {
    const admin = await prisma.user.findFirst({ where: { role: 'ADMIN' } });
    if (admin) {
        console.log('Creating General Job...');
        const newJob = await prisma.jobPost.create({
          data: {
            title: 'General Application',
            description: 'Apply here if you don\'t see a specific role that fits your profile.',
            location: 'Karachi, Pakistan',
            jobType: 'FULL_TIME',
            createdById: admin.id,
            status: 'OPEN'
          }
        });
        console.log('Created General Job:', newJob);
    } else {
        console.log('No admin found to create General Job.');
    }
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
