
const prisma = require('../lib/prisma').default;
const { hashPassword } = require('../lib/auth');

// Simple script to insert a default admin user
async function main() {
  const adminEmail = 'hr@ait.iak.ngo';
  const adminPass = 'iak-admin-hr';

  const existing = await prisma.user.findUnique({ where: { email: adminEmail } });
  if (!existing) {
    await prisma.user.create({
      data: {
        email: adminEmail,
        name: 'Admin',
        role: 'ADMIN',
        passwordHash: await hashPassword(adminPass),
      },
    });
    console.log('Admin user created:', adminEmail);
  } else {
    console.log('Admin user already exists:', adminEmail);
  }
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
