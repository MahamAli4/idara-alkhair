const fs = require('fs');
const file = 'c:/Users/emp6/Desktop/idara-Alkhair/app/admin/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Remove state declarations
content = content.replace(/  const \[email, setEmail\] = useState\(""\);\n/g, '');
content = content.replace(/  const \[password, setPassword\] = useState\(""\);\n/g, '');
content = content.replace(/  const \[loggedIn, setLoggedIn\] = useState\(false\);\n/g, '');
content = content.replace(/  const \[loading, setLoading\] = useState\(false\);\n/g, '');
content = content.replace(/  const \[authChecking, setAuthChecking\] = useState\(true\);\n/g, '');

// 2. Fix useEffect [loggedIn] for header/footer
content = content.replace(
  /  \/\/ ✅ HEADER\/FOOTER HIDE KARNE WALA USEEFFECT - YEH IMPORTANT HAI[\s\S]*?\}, \[loggedIn\]\);/m,
  `  // ✅ HEADER/FOOTER HIDE KARNE WALA USEEFFECT
  useEffect(() => {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';
    return () => {
      if (header) header.style.display = '';
      if (footer) footer.style.display = '';
    };
  }, []);`
);

// 3. Remove checkAuth
content = content.replace(
  /  \/\/ ✅ AUTHENTICATION CHECK ON COMPONENT MOUNT[\s\S]*?checkAuth\(\);\n  \}, \[\]\);/m,
  ''
);

// 4. Update handleLogout
content = content.replace(
  /  const handleLogout = async \(\) => \{[\s\S]*?setSidebarOpen\(false\);\n    \}\n  \};/m,
  `  const handleLogout = async () => {
    if (!confirm("Are you sure you want to logout?")) return;
    try {
      showToast("Logging out...", "info");
      const res = await fetch("/api/auth/logout", { method: "POST" });
      if (res.ok) {
        window.location.href = '/admin/login';
      }
    } catch (err) {
      console.error("Logout error:", err);
    }
  };`
);

// 5. Update idle timer
content = content.replace(
  /  \/\/ ✅ IDLE TIMER & VISIBILITY CHECK \(5 Minutes Logout\)[\s\S]*?\}, \[loggedIn\]\);/m,
`  // ✅ IDLE TIMER & VISIBILITY CHECK (5 Minutes Logout)
  useEffect(() => {
    let timeoutId;
    const TIMEOUT_DURATION = 5 * 60 * 1000;
    const resetTimer = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        handleLogout();
      }, TIMEOUT_DURATION);
    };
    const events = ['mousedown', 'mousemove', 'keydown', 'scroll', 'touchstart'];
    const handleActivity = () => { resetTimer(); };
    events.forEach(event => { document.addEventListener(event, handleActivity); });
    resetTimer();
    return () => {
      clearTimeout(timeoutId);
      events.forEach(event => { document.removeEventListener(event, handleActivity); });
    };
  }, []);`
);

// 6. Update loadJobs effect
content = content.replace(
  /  \/\/ ✅ Use effect to load jobs on component mount[\s\S]*?\}, \[loggedIn\]\);/m,
`  // ✅ Use effect to load jobs on component mount
  useEffect(() => {
    loadMessages();
    loadJobs();
    loadJobResponses();
    loadInterviewCandidates();
    loadHiredCandidates();
    loadCandidates();
    loadVolunteers();
  }, []);`
);

// 7. Remove authChecking, handleLogin, reload
content = content.replace(
  /  \/\/ ✅ LOADING SCREEN WHILE CHECKING AUTH[\s\S]*?  const reload = async \(\) => \{[\s\S]*?  \};\n/m,
  ''
);

// 8. Remove `if (loggedIn) {` wrapper
content = content.replace(/  \/\/ --------- Sidebar Layout -----------\n  if \(loggedIn\) \{\n    return \(/, '  // --------- Sidebar Layout -----------\n  return (');

// 9. Remove end bracket and login form
content = content.replace(/    \);\n  \}\n\n  \/\/ --------- Login Page \(Default\) -----------[\s\S]*/m, '  );\n}');

// Tailwind replaces
content = content.replace(/bg-gradient-to-br/g, 'bg-linear-to-br');
content = content.replace(/bg-gradient-to-b/g, 'bg-linear-to-b');
content = content.replace(/rounded-\[2rem\]/g, 'rounded-4xl');
content = content.replace(/flex-\[2\]/g, 'flex-2');
content = content.replace(/to-\[#f37335\]/g, 'to-idara-orange');

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed page.tsx');
