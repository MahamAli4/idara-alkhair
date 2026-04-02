const fs = require('fs');
const filePath = 'app/donate/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Replace border-[t/r/b/l/x/y]-[XXpx] with border-[t/r/b/l/x/y]-XX
content = content.replace(/border-([trblxy])-\[(\d+)px\]/g, 'border-$1-$2');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed Tailwind arbitrary values in donate page.');
