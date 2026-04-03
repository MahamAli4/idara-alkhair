// Use native fetch (supported in Node.js 18+)
async function testApi() {
  const url = 'http://localhost:3000/api/send-interview-email';
  const payload = {
    candidateId: 1,
    candidateName: 'Test Candidate',
    candidateEmail: 'test@example.com',
    interviewDate: '2026-05-01',
    interviewTime: '10:00 AM',
    position: 'Tester'
  };

  try {
    console.log('Testing Interview Email API with placeholder credentials...');
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    console.log('Status Code:', response.status);
    console.log('Response Body:', JSON.stringify(data, null, 2));

    if (data.error && data.error.includes('SMTP Email not configured')) {
      console.log('✅ Verification Successful: API correctly identified placeholder credentials.');
    } else {
      console.log('❌ Verification Failed: Unexpected response.');
    }
  } catch (error) {
    console.error('Error during test:', error.message);
  }
}

testApi();
