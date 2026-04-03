const fs = require('fs');
let C = fs.readFileSync('app/admin/page.tsx', 'utf8');

C = C.replace(/console\.log\('Loading messages from API\.\.\.'\);\r?\n/g, '');
C = C.replace(/console\.log\('API Response:', res\.status, data\);\r?\n/g, '');
C = C.replace(/console\.log\('Setting messages:', messagesArray\.length, 'messages'\);\r?\n/g, '');

C = C.replace(/console\.log\('Loading job responses\.\.\.'\);\r?\n/g, '');
C = C.replace(/console\.log\('Job responses API response:', data\);\r?\n/g, '');
C = C.replace(/if \(data\.applications && data\.applications\.length === 0\) \{\r?\n\s+console\.log\('No applications found in response'\);\r?\n\s+\}\r?\n/g, '');

fs.writeFileSync('app/admin/page.tsx', C);
console.log("Done removing logs");
