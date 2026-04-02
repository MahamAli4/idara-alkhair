const http = require('http');

const testData = JSON.stringify({
  name: 'Verification Bot',
  email: 'bot@verification.com',
  message: 'Testing the newly connected contact form!'
});

const options = {
  hostname: 'localhost',
  port: 3002,
  path: '/api/contact',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': testData.length
  }
};

const req = http.request(options, (res) => {
  console.log('Status Code:', res.statusCode);
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log('Response:', data);
    if (res.statusCode === 200) {
      console.log('CONTACT API VERIFIED: Connection successful!');
    } else {
      console.log('CONTACT API FAILED on port 3002.');
    }
  });
});

req.on('error', (e) => {
  console.error('Problem with request:', e.message);
});

req.write(testData);
req.end();
