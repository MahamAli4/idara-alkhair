const fs = require('fs');
fs.cpSync('C:/Users/emp6/Desktop/IAK-NGO/prisma', 'prisma', { recursive: true });
fs.cpSync('C:/Users/emp6/Desktop/IAK-NGO/lib', 'lib', { recursive: true });
fs.cpSync('C:/Users/emp6/Desktop/IAK-NGO/app/api', 'app/api', { recursive: true });
console.log('Copy successful');
