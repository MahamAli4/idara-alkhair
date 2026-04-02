const http = require('http');

const loginData = JSON.stringify({
  email: 'mateen@gmail.com',
  password: 'password123'
});

const options = {
  hostname: 'localhost',
  port: 3002,
  path: '/api/auth/login',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': loginData.length
  }
};

const req = http.request(options, (res) => {
  console.log('Login Status Code:', res.statusCode);
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log('Login Response:', data);
    if (res.statusCode === 200) {
      console.log('API CONNECTION VERIFIED: Login successful with dummy data!');
    } else {
      console.log('API CONNECTION FAILED: Check logs.');
    }
  });
});

req.on('error', (error) => {
  console.error('Request Error:', error);
});

req.write(loginData);
req.end();
