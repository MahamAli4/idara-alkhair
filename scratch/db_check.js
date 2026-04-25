const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function check() {
  try {
    const contents = await prisma.websiteContent.findMany({
      where: { pageName: 'medical-center' }
    });
    console.log('--- DATABASE CHECK ---');
    console.log(`Found ${contents.length} items for medical-center`);
    contents.forEach(c => {
      console.log(`Key: ${c.key} | Value: ${c.value.substring(0, 50)}...`);
    });
    console.log('-----------------------');
  } catch (err) {
    console.error('Check failed:', err.message);
  } finally {
    await prisma.$disconnect();
  }
}

check();
