"use client";

import { useState, useEffect, useMemo } from "react";
import {
  LogOut,
  RefreshCw,
  Mail,
  Briefcase,
  FileText,
  Archive,
  Clock,
  Calendar,
  CheckCircle,
  Users,
  Menu,
  X,
  Trash2,
  Heart,
  XCircle,
  LayoutDashboard,
  Smartphone,
  MapPin,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [authChecking, setAuthChecking] = useState(true);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const [selectedMessages, setSelectedMessages] = useState<Set<number>>(new Set());
  const [jobs, setJobs] = useState<any[]>([]);
  const [jobResponses, setJobResponses] = useState<any[]>([]);
  const [responsesLoading, setResponsesLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showAllMessages, setShowAllMessages] = useState(false);

  // ✅ TOAST SYSTEM STATES
  const [toasts, setToasts] = useState<{ id: number; message: string; type: 'success' | 'error' | 'info' }[]>([]);

  // Helper to show custom toasts
  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  // Naye states for interview and hired candidates
  const [interviewCandidates, setInterviewCandidates] = useState<any[]>([]);
  const [hiredCandidates, setHiredCandidates] = useState<any[]>([]);

  // ✅ Candidates ke liye
  const [candidates, setCandidates] = useState<any[]>([]);

  // ✅ Volunteers ke liye
  const [volunteers, setVolunteers] = useState<any[]>([]);
  const [volunteersLoading, setVolunteersLoading] = useState(false);

  // ✅ Volunteer Actions States
  const [isVolModalOpen, setIsVolModalOpen] = useState(false);
  const [selectedVolForAction, setSelectedVolForAction] = useState<any>(null);
  const [volActionDate, setVolActionDate] = useState("");
  const [volActionTime, setVolActionTime] = useState("");
  const [isProcessingVol, setIsProcessingVol] = useState(false);

  // ✅ Manual Add Candidate Form ke liye states
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCandidate, setNewCandidate] = useState({
    name: '',
    email: '',
    position: '',
    phone: '',
    experience: '',
    education: ''
  });

  // Job form state
  const [jobTitle, setJobTitle] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobType, setJobType] = useState("Full-Time");
  const [jobSubmitting, setJobSubmitting] = useState(false);

  // Flexible fields
  const [category, setCategory] = useState("");
  const [department, setDepartment] = useState("");
  const [employmentLevel, setEmploymentLevel] = useState("");
  const [deadlineAt, setDeadlineAt] = useState("");
  const [requirements, setRequirements] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [qualifications, setQualifications] = useState("");
  
  // ✅ INTERVIEW SCHEDULER STATES
  const [isInterviewModalOpen, setIsInterviewModalOpen] = useState(false);
  const [selectedAppForInterview, setSelectedAppForInterview] = useState<any>(null);
  const [interviewDateAdmin, setInterviewDateAdmin] = useState("");
  const [interviewTimeAdmin, setInterviewTimeAdmin] = useState("");
  const [isSchedulingInterview, setIsSchedulingInterview] = useState(false);

  // ✅ Application Segmentation Logic
  const specificJobApps = useMemo(() => {
    return jobResponses.filter(res => res.jobId !== 4);
  }, [jobResponses]);

  const generalInterestApps = useMemo(() => {
    return jobResponses.filter(res => res.jobId === 4);
  }, [jobResponses]);

  // ✅ HEADER/FOOTER HIDE KARNE WALA USEEFFECT
  useEffect(() => {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';

    const checkAuth = async () => {
      try {
        const res = await fetch("/api/auth/session");
        if (res.ok) {
          const data = await res.json();
          if (data.user) {
            setLoggedIn(true);
          }
        }
      } catch (err) {
        console.error("Auth check error:", err);
      } finally {
        setAuthChecking(false);
      }
    };

    checkAuth();

    return () => {
      if (header) header.style.display = '';
      if (footer) footer.style.display = '';
    };
  }, []);

  const handleLogout = async () => {
    if (!confirm("Are you sure you want to logout?")) return;

    try {
      showToast("Logging out...", "info");
      const res = await fetch("/api/auth/logout", { method: "POST" });
      if (res.ok) {
        showToast("Logged out successfully!", "success");
      }
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      setLoggedIn(false);
      setMessages([]);
      setPassword("");
      setEmail("");
      setSidebarOpen(false);
    }
  };

  // ✅ IDLE TIMER & VISIBILITY CHECK (5 Minutes Logout)
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
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
  }, []);

  const typeMap: Record<string, string> = {
    "Full-Time": "FULL_TIME",
    "Part-Time": "PART_TIME",
    "Internship": "INTERNSHIP",
    "Contract": "CONTRACT",
  };

  // ✅ EK HI loadJobs FUNCTION
  const loadJobs = async () => {
    try {
      const res = await fetch("/api/jobs");
      const data = await res.json();
      if (!res.ok) {
        setError(data?.error || "Failed to load jobs");
        return;
      }
      setJobs(data.jobs || []);
    } catch (err: any) {
      setError(String(err));
    }
  };

  // ✅ Use effect to load jobs on component mount
  useEffect(() => {
    loadMessages();
    loadJobs();
    loadJobResponses();
    loadInterviewCandidates();
    loadHiredCandidates();
    loadCandidates();
    loadVolunteers();
  }, []);

  // ✅ YEH UPDATED FUNCTION USE KARO
  const loadMessages = async () => {
    try {
            const res = await fetch("/api/admin/messages", {
        method: "GET",
        credentials: "include"
      });
      const data = await res.json();
      
      if (res.ok) {
        const messagesArray = data.messages || data || [];
                setMessages(messagesArray);
      } else {
        console.error('Failed to load messages:', data.error);
        setMessages([]);
      }
    } catch (err: any) {
      console.error('Error loading messages:', err);
      setMessages([]);
    }
  };

  const loadCandidates = async () => {
    try {
      const response = await fetch('/api/candidates');
      const data = await response.json();
      setCandidates(data.candidates || data || []);
    } catch (error) {
      console.error('Error loading candidates:', error);
      setCandidates([]);
    }
  };

  const loadVolunteers = async () => {
    setVolunteersLoading(true);
    try {
      const response = await fetch('/api/volunteers');
      const data = await response.json();
      setVolunteers(data.volunteers || []);
    } catch (error) {
      console.error('Error loading volunteers:', error);
      setVolunteers([]);
    } finally {
      setVolunteersLoading(false);
    }
  };

  const deleteVolunteer = async (id: number) => {
    if (!confirm('Are you sure you want to delete this volunteer application?')) return;
    try {
      const res = await fetch(`/api/volunteers?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        showToast('Volunteer deleted successfully', 'success');
        loadVolunteers();
      }
    } catch (err) {
      showToast('Error deleting volunteer', 'error');
    }
  };

  const handleVolunteerResponse = async (id: number, action: string, date?: string, time?: string) => {
    setIsProcessingVol(true);
    try {
      const response = await fetch('/api/admin/volunteers/respond', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, action, date, time }),
      });

      const data = await response.json();

      if (response.ok) {
        showToast(`Volunteer ${action.toLowerCase()}ed successfully!`, 'success');
        setIsVolModalOpen(false);
        setVolActionDate("");
        setVolActionTime("");
        loadVolunteers();
      } else {
        showToast(data.error || 'Failed to process volunteer action', 'error');
      }
    } catch (err) {
      showToast('Error processing response', 'error');
    } finally {
      setIsProcessingVol(false);
    }
  };

  const handleAddCandidate = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!newCandidate.name || !newCandidate.email || !newCandidate.position) {
      alert('❌ Please fill all required fields (Name, Email, Position)');
      return;
    }

    try {
      const response = await fetch('/api/candidates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCandidate),
      });

      const data = await response.json();

      if (response.ok) {
        alert('✅ Candidate added successfully!');
        // Reset form
        setNewCandidate({
          name: '',
          email: '',
          position: '',
          phone: '',
          experience: '',
          education: ''
        });
        setShowAddForm(false);
        loadCandidates(); // Refresh list
      } else {
        alert('❌ Failed to add candidate: ' + (data.error || 'Unknown error'));
      }
    } catch (error) {
      alert('❌ Error adding candidate');
      console.error('Error:', error);
    }
  };

  // ✅ YEH NAYA FUNCTION - Candidate delete karne ke liye
  // ✅ YEH NAYA FUNCTION - Candidate delete karne ke liye
  const deleteCandidate = async (candidateId: number) => {
    if (!confirm('Are you sure you want to delete this candidate?')) return;

    try {
      const response = await fetch(`/api/candidates?id=${candidateId}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (response.ok) {
        alert('✅ Candidate deleted successfully!');
        loadCandidates(); // Refresh list
      } else {
        alert('❌ Failed to delete candidate: ' + (data.error || 'Unknown error'));
      }
    } catch (error) {
      alert('❌ Error deleting candidate');
      console.error('Error:', error);
    }
  };

  // ✅ YEH NAYA FUNCTION - Job delete karne ke liye
  const handleDeleteJob = async (jobId: number) => {
    if (!confirm('Are you sure you want to delete this job? This action cannot be undone.')) return;

    try {
      const res = await fetch(`/api/jobs/${jobId}`, {
        method: 'DELETE',
        credentials: 'include'
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || 'Failed to delete job');
        return;
      }

      alert('✅ Job deleted successfully');
      loadJobs(); // Refresh the list
    } catch (err) {
      console.error('Error deleting job:', err);
      alert('Error deleting job');
    }
  };

  // ✅ YEH NAYA FUNCTION - Interview schedule karne ke liye
  const scheduleInterview = async (candidateId: number, candidateName: string, candidateEmail: string, position: string) => {
    const interviewDate = prompt('Enter interview date (YYYY-MM-DD):');
    if (!interviewDate) return;

    const interviewTime = prompt('Enter interview time (e.g., 02:30 PM):');
    if (!interviewTime) return;

    const confirmed = confirm(`Send interview email to ${candidateName}?\nDate: ${interviewDate}\nTime: ${interviewTime}`);
    if (!confirmed) return;

    try {
      const response = await fetch('/api/send-interview-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          candidateId,
          candidateName,
          candidateEmail,
          interviewDate,
          interviewTime,
          position
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert('✅ Interview email sent successfully!');
        loadCandidates(); // Refresh candidates list
      } else {
        alert('❌ Failed to send email: ' + (result.error || 'Unknown error'));
      }
    } catch (error) {
      alert('❌ Error sending interview email');
      console.error('Error:', error);
    }
  };

  // ✅ Filter jobs by age
  const getRecentJobs = () => {
    const twoDaysAgo = new Date();
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

    return jobs.filter(job => {
      const jobDate = new Date(job.createdAt);
      return jobDate >= twoDaysAgo;
    });
  };

  // ✅ Filter messages by age (for showing recent messages)
  const getRecentMessages = () => {
    const twoDaysAgo = new Date();
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

    return messages.filter(message => {
      const messageDate = new Date(message.createdAt);
      return messageDate >= twoDaysAgo;
    });
  };

  const getOldJobs = () => {
    const twoDaysAgo = new Date();
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

    return jobs.filter(job => {
      const jobDate = new Date(job.createdAt);
      return jobDate < twoDaysAgo;
    });
  };

  // ✅ Load job responses function
  const loadJobResponses = async () => {
    setResponsesLoading(true);
    setError(null);
    try {
      
      const res = await fetch("/api/admin/job-responses", {
        credentials: 'include'
      });

      const data = await res.json();
      
      if (!res.ok) {
        if (res.status === 401) {
          throw new Error('Please login as admin first');
        }
        throw new Error(data?.error || `HTTP error! status: ${res.status}`);
      }

      setJobResponses(data.applications || []);

      
    } catch (err: any) {
      console.error('Error loading job responses:', err);
      setError(`Failed to load job responses: ${err.message}`);
      setJobResponses([]);
    } finally {
      setResponsesLoading(false);
    }
  };

  // ✅ Load interview candidates
  const loadInterviewCandidates = async () => {
    try {
      const res = await fetch("/api/admin/interview-candidates");
      const data = await res.json();
      if (res.ok) {
        setInterviewCandidates(data.candidates || []);
      }
    } catch (err) {
      console.error('Error loading interview candidates:', err);
    }
  };

  // ✅ Load hired candidates
  const loadHiredCandidates = async () => {
    try {
      const res = await fetch("/api/admin/hired-candidates");
      const data = await res.json();
      if (res.ok) {
        setHiredCandidates(data.candidates || []);
      }
    } catch (err) {
      console.error('Error loading hired candidates:', err);
    }
  };

  // ✅ UPDATED - Mark for interview function with dynamic Modal
  const markForInterview = (application: any) => {
    setSelectedAppForInterview(application);
    setIsInterviewModalOpen(true);
    // Default values
    setInterviewDateAdmin("");
    setInterviewTimeAdmin("");
  };

  const confirmScheduleInterview = async () => {
    if (!selectedAppForInterview || !interviewDateAdmin || !interviewTimeAdmin) {
      alert("Please enter both Date and Time");
      return;
    }

    setIsSchedulingInterview(true);
    try {
      // 1. Mark in database
      const markRes = await fetch("/api/admin/mark-interview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          applicationId: selectedAppForInterview.id,
          candidateName: selectedAppForInterview.applicantName,
          candidateEmail: selectedAppForInterview.applicantEmail,
          jobTitle: selectedAppForInterview.job?.title || selectedAppForInterview.position,
          jobId: selectedAppForInterview.jobId || 0,
          interviewDate: interviewDateAdmin,
          interviewTime: interviewTimeAdmin
        })
      });

      // 2. Send email
      const emailRes = await fetch('/api/send-interview-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          applicationId: selectedAppForInterview.id,
          candidateId: selectedAppForInterview.id, // For manual candidates
          candidateName: selectedAppForInterview.applicantName || selectedAppForInterview.name,
          candidateEmail: selectedAppForInterview.applicantEmail || selectedAppForInterview.email,
          interviewDate: interviewDateAdmin,
          interviewTime: interviewTimeAdmin,
          position: selectedAppForInterview.job?.title || selectedAppForInterview.position
        }),
      });

      if (emailRes.ok) {
        showToast("Interview scheduled and email sent!", "success");
        setIsInterviewModalOpen(false);
        loadInterviewCandidates();
        loadJobResponses();
        loadCandidates();
      } else {
        const errorData = await emailRes.json();
        alert(`Success in DB but email failed: ${errorData.error || "Please check SMTP settings."}`);
      }
    } catch (err) {
      console.error('Interview error:', err);
      alert('❌ Failed to process interview request');
    } finally {
      setIsSchedulingInterview(false);
    }
  };

  const markAsHired = async (candidate: any) => {
    try {
      const res = await fetch("/api/admin/mark-hired", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          candidateId: candidate.id,
          candidateName: candidate.applicantName || candidate.candidateName,
          candidateEmail: candidate.applicantEmail || candidate.candidateEmail,
          jobTitle: candidate.job?.title || candidate.jobTitle,
          jobId: candidate.jobId,
          applicationId: candidate.applicationId || candidate.id
        })
      });

      const data = await res.json();

      if (res.ok) {
        alert('✅ Candidate marked as hired!');
        loadHiredCandidates();
        loadInterviewCandidates();
        loadJobResponses();
      } else {
        alert(`❌ ${data.error}`);
      }
    } catch (err) {
      console.error('Hired error:', err);
      alert('❌ Failed to mark as hired');
    }
  };

  // ✅ LOADING SCREEN WHILE CHECKING AUTH
  if (authChecking) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600 mb-4"></div>
          <p className="text-gray-600 font-medium">Verifying session...</p>
        </div>

        {/* --- CUSTOM TOAST CONTAINER --- */}
        <div className="fixed bottom-6 right-6 z-9999 flex flex-col gap-3 pointer-events-none">
          {toasts.map((toast) => (
            <div
              key={toast.id}
              className={`
                pointer-events-auto
                flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl
                animate-in slide-in-from-right fade-in duration-300
                backdrop-blur-md border
                ${toast.type === 'success' ? 'bg-white/90 border-emerald-100 text-emerald-800' : 
                  toast.type === 'error' ? 'bg-white/90 border-rose-100 text-rose-800' : 
                  'bg-white/90 border-blue-100 text-blue-800'}
              `}
              style={{ minWidth: '320px' }}
            >
              <div className={`p-2 rounded-xl ${
                toast.type === 'success' ? 'bg-emerald-50 text-emerald-600' : 
                toast.type === 'error' ? 'bg-rose-50 text-rose-600' : 
                'bg-blue-50 text-blue-600'
              }`}>
                {toast.type === 'success' && <CheckCircle className="w-5 h-5" />}
                {toast.type === 'error' && <RefreshCw className="w-5 h-5" />}
                {toast.type === 'info' && <RefreshCw className="w-5 h-5 animate-spin" />}
              </div>
              <div className="flex-1 text-sm font-semibold tracking-tight">
                {toast.message}
              </div>
              <button 
                onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-4 h-4 opacity-40 group-hover:opacity-100" />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // SINGLE handleLogin function
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const loginRes = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const loginData = await loginRes.json();
      if (!loginRes.ok) {
        setError(loginData?.error || "Unauthorized");
        setLoggedIn(false);
        return;
      }
      
      // Login successful
      setLoggedIn(true);

      // Messages load karein
      const messagesRes = await fetch("/api/admin/messages", {
        method: "GET",
        credentials: "include"
      });
      const messagesData = await messagesRes.json();
      if (messagesRes.ok) {
        setMessages(messagesData.messages || []);
      }

      // Job responses load karein
      await loadJobResponses();

      // Jobs load karein
      await loadJobs();

      // Interview & hired candidates load karein
      await loadInterviewCandidates();
      await loadHiredCandidates();

      // Candidates load karein
      await loadCandidates();

    } catch (err: any) {
      setError(String(err));
    } finally {
      setLoading(false);
    }
  };

  const reload = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/messages");
      const data = await res.json();

      if (!res.ok) setError(data?.error || "Failed to fetch");
      else setMessages(data.messages || []);
    } catch (err: any) {
      setError(String(err));
    } finally {
      setLoading(false);
    }
  };

  // Handle individual message selection
  const handleSelectMessage = (messageId: number) => {
    const newSelected = new Set(selectedMessages);
    if (newSelected.has(messageId)) {
      newSelected.delete(messageId);
    } else {
      newSelected.add(messageId);
    }
    setSelectedMessages(newSelected);
  };

  // Handle select all messages
  const handleSelectAll = () => {
    if (selectedMessages.size === messages.length) {
      setSelectedMessages(new Set());
    } else {
      setSelectedMessages(new Set(messages.map(m => m.id)));
    }
  };

  // Handle delete selected messages (from database)
  const handleDeleteSelected = async () => {
    if (selectedMessages.size === 0) {
      alert('Please select messages to delete');
      return;
    }

    const confirmed = confirm(`Are you sure you want to permanently delete ${selectedMessages.size} message(s)? This action cannot be undone.`);
    if (!confirmed) return;

    try {
      const messageIds = Array.from(selectedMessages);
      const res = await fetch("/api/admin/messages", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ messageIds })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(`❌ Failed to delete messages: ${data.error}`);
        return;
      }

      // Remove deleted messages from local state
      setMessages(prevMessages => prevMessages.filter(m => !selectedMessages.has(m.id)));
      setSelectedMessages(new Set());
      showToast(`Successfully deleted ${data.deletedCount} message(s)`, 'success');
    } catch (err: any) {
      console.error('Delete error:', err);
      showToast('Error deleting messages', 'error');
    }
  };

  // Calculate message age
  const getMessageAge = (createdAt: string) => {
    const now = new Date();
    const messageDate = new Date(createdAt);
    const diffTime = Math.abs(now.getTime() - messageDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;

    const diffWeeks = Math.floor(diffDays / 7);
    if (diffWeeks === 1) return '1 week ago';
    return `${diffWeeks} weeks ago`;
  };

  const handleAddJob = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setJobSubmitting(true);
    try {
      const typeMap: Record<string, string> = {
        "Full-Time": "FULL_TIME",
        "Part-Time": "PART_TIME",
        "Internship": "INTERNSHIP",
        "Contract": "CONTRACT",
      };

      const payload = {
        title: jobTitle,
        description: jobDesc,
        location: jobLocation,
        jobType: typeMap[jobType] || "FULL_TIME",
        category: category || undefined,
        department: department || undefined,
        employmentLevel: employmentLevel || undefined,
        deadlineAt: deadlineAt || undefined,
        requirements: requirements || undefined,
        responsibilities: responsibilities || undefined,
        qualifications: qualifications || undefined,
      };

      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data?.error || "Failed to create job");
        return;
      }
      // Reset form
      setJobTitle("");
      setJobDesc("");
      setJobLocation("");
      setJobType("Full-Time");
      setCategory("");
      setDepartment("");
      setEmploymentLevel("");
      setDeadlineAt("");
      setRequirements("");
      setResponsibilities("");
      setQualifications("");
      showToast("Job created successfully", "success");
      await loadJobs();
      setActiveTab("recentjobs");
    } catch (err: any) {
      setError(String(err));
    } finally {
      setJobSubmitting(false);
    }
  };

  // Mobile sidebar toggle
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // --------- Sidebar Layout -----------
  if (loggedIn) {
    return (
      <div className="flex h-screen bg-gray-100">
        {/* Mobile Header */}
        <div className="lg:hidden fixed top-0 left-0 right-0 bg-white shadow-md z-50 p-4">
          <div className="flex justify-between items-center">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <h1 className="text-xl font-bold">Admin Panel</h1>
            <div className="w-9"></div> {/* Spacer for balance */}
          </div>
        </div>

        {/* ✅ UNIFIED PREMIUM INTERVIEW MODAL */}
        {isInterviewModalOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-idara-navy/40 backdrop-blur-xl transition-all duration-500" onClick={() => !isSchedulingInterview && setIsInterviewModalOpen(false)}></div>
            <div className="bg-white w-full max-w-md rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] relative z-10 animate-in zoom-in-95 duration-500 border border-white/20">
              <div className="bg-linear-to-br from-idara-navy to-[#0a1a5a] p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-idara-orange/10 rounded-full -mr-16 -mt-16 blur-2xl animate-pulse"></div>
                <h3 className="text-3xl font-black tracking-tight mb-2 flex items-center gap-3">
                  <Calendar className="w-8 h-8 text-idara-orange" />
                  Schedule Meet
                </h3>
                <p className="text-sm md:text-base text-idara-orange font-black uppercase tracking-[0.2em] opacity-80">
                  Career Portal • {selectedAppForInterview?.job?.title || selectedAppForInterview?.position}
                </p>
              </div>
              
              <div className="p-10 space-y-8 bg-linear-to-b from-white to-gray-50/30">
                <div className="flex items-center gap-5 p-5 bg-gray-50/50 rounded-4xl border border-gray-100 shadow-inner">
                  <div className="w-14 h-14 bg-idara-navy text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-idara-navy/10">
                    {(selectedAppForInterview?.applicantName || selectedAppForInterview?.name || "?").charAt(0)}
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-lg font-black text-idara-navy leading-none">
                      {selectedAppForInterview?.applicantName || selectedAppForInterview?.name}
                    </p>
                    <p className="text-xs font-bold text-idara-orange/70 lowercase">{selectedAppForInterview?.applicantEmail || selectedAppForInterview?.email}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-6">
                  <div className="group">
                    <label className="block text-sm md:text-base font-black text-gray-400 uppercase tracking-widest mb-3 ml-2 group-focus-within:text-idara-orange transition-colors">Select Interview Date</label>
                    <div className="relative">
                      <input 
                        type="date" 
                        value={interviewDateAdmin}
                        onChange={(e) => setInterviewDateAdmin(e.target.value)}
                        className="w-full bg-white border-2 border-gray-100 rounded-2xl px-6 py-4 outline-none focus:border-idara-orange focus:ring-4 focus:ring-idara-orange/5 transition-all font-bold text-gray-700 shadow-sm"
                      />
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-sm md:text-base font-black text-gray-400 uppercase tracking-widest mb-3 ml-2 group-focus-within:text-idara-orange transition-colors">Select Preferred Time</label>
                    <div className="relative">
                      <input 
                        type="time" 
                        value={interviewTimeAdmin}
                        onChange={(e) => setInterviewTimeAdmin(e.target.value)}
                        className="w-full bg-white border-2 border-gray-100 rounded-2xl px-6 py-4 outline-none focus:border-idara-orange focus:ring-4 focus:ring-idara-orange/5 transition-all font-bold text-gray-700 shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-2">
                  <button 
                    onClick={() => setIsInterviewModalOpen(false)}
                    className="flex-1 py-4 font-black text-gray-400 hover:text-idara-navy rounded-2xl transition-all hover:bg-gray-100"
                  >
                    Dismiss
                  </button>
                  <button 
                    onClick={confirmScheduleInterview}
                    disabled={isSchedulingInterview || !interviewDateAdmin || !interviewTimeAdmin}
                    className="flex-2 bg-idara-navy text-white py-4 px-8 rounded-2xl font-black shadow-2xl shadow-idara-navy/20 hover:bg-idara-orange hover:shadow-idara-orange/30 active:scale-95 transition-all duration-300 disabled:opacity-40 flex items-center justify-center gap-3"
                  >
                    {isSchedulingInterview ? (
                      <RefreshCw className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <Calendar className="w-5 h-5" />
                        Send Invitation
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sidebar - Mobile aur Desktop dono ke liye */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-40
          w-80 xl:w-[350px] bg-white/80 backdrop-blur-2xl transform transition-all duration-500 ease-in-out border-r border-gray-100
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          lg:flex lg:flex-col
          mt-16 lg:mt-0 shadow-[20px_0_40px_-20px_rgba(0,0,0,0.03)]
        `}>
          <div className="hidden lg:block p-10">
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-black text-idara-navy tracking-tight">Admin</h1>
              <p className="text-sm md:text-base font-black text-idara-orange uppercase tracking-[.3em] opacity-80">Workspace v2.0</p>
            </div>
          </div>
          <nav className="flex-1 px-6">
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => { setActiveTab("dashboard"); setSidebarOpen(false); }}
                  className={`w-full text-left px-5 py-4 rounded-2xl flex flex-row items-center gap-4 transition-all duration-300 relative group overflow-hidden whitespace-nowrap ${activeTab === "dashboard"
                    ? "bg-idara-navy text-white shadow-[0_10px_20px_-5px_rgba(3,18,73,0.3)] translate-x-2"
                    : "text-gray-400 hover:bg-gray-50 hover:text-idara-navy"
                    }`}
                >
                  <LayoutDashboard className={`w-5 h-5 transition-transform duration-500 ${activeTab === 'dashboard' ? 'scale-110' : 'group-hover:rotate-12'}`} /> 
                  <span className="font-black text-base md:text-lg tracking-tight text-inherit">Dashboard</span>
                  {activeTab === 'dashboard' && <div className="absolute right-0 top-0 bottom-0 w-1 bg-idara-orange"></div>}
                </button>
              </li>
              <li>
                <a
                  href="/admin/cms"
                  className="w-full text-left px-5 py-4 rounded-2xl flex flex-row items-center gap-4 transition-all duration-300 relative group overflow-hidden whitespace-nowrap text-gray-400 hover:bg-gray-50 hover:text-idara-navy"
                >
                  <FileText className="w-5 h-5 transition-transform duration-500 group-hover:rotate-12" />
                  <span className="font-black text-base md:text-lg tracking-tight">Content Pages</span>
                </a>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab("emails"); setSidebarOpen(false); }}
                  className={`w-full text-left px-5 py-4 rounded-2xl flex flex-row items-center gap-4 transition-all duration-300 relative group overflow-hidden whitespace-nowrap ${activeTab === "emails"
                    ? "bg-idara-navy text-white shadow-[0_10px_20px_-5px_rgba(3,18,73,0.3)] translate-x-2"
                    : "text-gray-400 hover:bg-gray-50 hover:text-idara-navy"
                    }`}
                >
                  <Mail className={`w-5 h-5 transition-transform duration-500 ${activeTab === 'emails' ? 'scale-110' : 'group-hover:rotate-12'}`} /> 
                  <span className="font-black text-base md:text-lg tracking-tight">Messages</span>
                  {activeTab === 'emails' && <div className="absolute right-0 top-0 bottom-0 w-1 bg-idara-orange"></div>}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab("addjob"); setSidebarOpen(false); }}
                  className={`w-full text-left px-5 py-4 rounded-2xl flex flex-row items-center gap-4 transition-all duration-300 relative group overflow-hidden whitespace-nowrap ${activeTab === "addjob"
                    ? "bg-idara-navy text-white shadow-[0_10px_20px_-5px_rgba(3,18,73,0.3)] translate-x-2"
                    : "text-gray-400 hover:bg-gray-50 hover:text-idara-navy"
                    }`}
                >
                  <Briefcase className={`w-5 h-5 transition-transform duration-500 ${activeTab === 'addjob' ? 'scale-110' : 'group-hover:rotate-12'}`} />
                  <span className="font-black text-base md:text-lg tracking-tight">Add Job</span>
                  {activeTab === 'addjob' && <div className="absolute right-0 top-0 bottom-0 w-1 bg-idara-orange"></div>}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab("recentjobs"); setSidebarOpen(false); }}
                  className={`w-full text-left px-5 py-4 rounded-2xl flex flex-row items-center gap-4 transition-all duration-300 relative group overflow-hidden whitespace-nowrap ${activeTab === "recentjobs"
                    ? "bg-idara-navy text-white shadow-[0_10px_20px_-5px_rgba(3,18,73,0.3)] translate-x-2"
                    : "text-gray-400 hover:bg-gray-50 hover:text-idara-navy"
                    }`}
                >
                  <Clock className={`w-5 h-5 transition-transform duration-500 ${activeTab === 'recentjobs' ? 'scale-110' : 'group-hover:rotate-12'}`} />
                  <span className="font-black text-base md:text-lg tracking-tight">Recent Jobs</span>
                  {activeTab === 'recentjobs' && <div className="absolute right-0 top-0 bottom-0 w-1 bg-idara-orange"></div>}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab("oldjobs"); setSidebarOpen(false); }}
                  className={`w-full text-left px-5 py-4 rounded-2xl flex flex-row items-center gap-4 transition-all duration-300 relative group overflow-hidden whitespace-nowrap ${activeTab === "oldjobs"
                    ? "bg-idara-navy text-white shadow-[0_10px_20px_-5px_rgba(3,18,73,0.3)] translate-x-2"
                    : "text-gray-400 hover:bg-gray-50 hover:text-idara-navy"
                    }`}
                >
                  <Archive className={`w-5 h-5 transition-transform duration-500 ${activeTab === 'oldjobs' ? 'scale-110' : 'group-hover:rotate-12'}`} />
                  <span className="font-black text-base md:text-lg tracking-tight">Old Jobs</span>
                  {activeTab === 'oldjobs' && <div className="absolute right-0 top-0 bottom-0 w-1 bg-idara-orange"></div>}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab("jobresponse"); setSidebarOpen(false); }}
                  className={`w-full text-left px-5 py-4 rounded-2xl flex flex-row items-center gap-4 transition-all duration-300 relative group overflow-hidden whitespace-nowrap ${activeTab === "jobresponse"
                    ? "bg-idara-navy text-white shadow-[0_10px_20px_-5px_rgba(3,18,73,0.3)] translate-x-2"
                    : "text-gray-400 hover:bg-gray-50 hover:text-idara-navy"
                    }`}
                >
                  <FileText className={`w-5 h-5 transition-transform duration-500 ${activeTab === 'jobresponse' ? 'scale-110' : 'group-hover:rotate-12'}`} />
                  <span className="font-black text-base md:text-lg tracking-tight">Job Responses</span>
                  {activeTab === 'jobresponse' && <div className="absolute right-0 top-0 bottom-0 w-1 bg-idara-orange"></div>}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab("jobapplications"); setSidebarOpen(false); }}
                  className={`w-full text-left px-5 py-4 rounded-2xl flex flex-row items-center gap-4 transition-all duration-300 relative group overflow-hidden whitespace-nowrap ${activeTab === "jobapplications"
                    ? "bg-idara-navy text-white shadow-[0_10px_20px_-5px_rgba(3,18,73,0.3)] translate-x-2"
                    : "text-gray-400 hover:bg-gray-50 hover:text-idara-navy"
                    }`}
                >
                  <Users className={`w-5 h-5 transition-transform duration-500 ${activeTab === 'jobapplications' ? 'scale-110' : 'group-hover:rotate-12'}`} />
                  <span className="font-black text-base md:text-lg tracking-tight">Job Applications</span>
                  {activeTab === 'jobapplications' && <div className="absolute right-0 top-0 bottom-0 w-1 bg-emerald-500"></div>}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab("candidates"); setSidebarOpen(false); }}
                  className={`w-full text-left px-5 py-4 rounded-2xl flex flex-row items-center gap-4 transition-all duration-300 relative group overflow-hidden whitespace-nowrap ${activeTab === "candidates"
                    ? "bg-idara-navy text-white shadow-[0_10px_20px_-5px_rgba(3,18,73,0.3)] translate-x-2"
                    : "text-gray-400 hover:bg-gray-50 hover:text-idara-navy"
                    }`}
                >
                  <Users className={`w-5 h-5 transition-transform duration-500 ${activeTab === 'candidates' ? 'scale-110' : 'group-hover:rotate-12'}`} />
                  <span className="font-black text-base md:text-lg tracking-tight">Candidates</span>
                  {activeTab === 'candidates' && <div className="absolute right-0 top-0 bottom-0 w-1 bg-idara-orange"></div>}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab("interview"); setSidebarOpen(false); }}
                  className={`w-full text-left px-5 py-4 rounded-2xl flex flex-row items-center gap-4 transition-all duration-300 relative group overflow-hidden whitespace-nowrap ${activeTab === "interview"
                    ? "bg-idara-navy text-white shadow-[0_10px_20px_-5px_rgba(3,18,73,0.3)] translate-x-2"
                    : "text-gray-400 hover:bg-gray-50 hover:text-idara-navy"
                    }`}
                >
                  <Calendar className={`w-5 h-5 transition-transform duration-500 ${activeTab === 'interview' ? 'scale-110' : 'group-hover:rotate-12'}`} />
                  <span className="font-black text-base md:text-lg tracking-tight">Interview</span>
                  {activeTab === 'interview' && <div className="absolute right-0 top-0 bottom-0 w-1 bg-idara-orange"></div>}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab("hired"); setSidebarOpen(false); }}
                  className={`w-full text-left px-5 py-4 rounded-2xl flex flex-row items-center gap-4 transition-all duration-300 relative group overflow-hidden whitespace-nowrap ${activeTab === "hired"
                    ? "bg-idara-navy text-white shadow-[0_10px_20px_-5px_rgba(3,18,73,0.3)] translate-x-2"
                    : "text-gray-400 hover:bg-gray-50 hover:text-idara-navy"
                    }`}
                >
                  <CheckCircle className={`w-5 h-5 transition-transform duration-500 ${activeTab === 'hired' ? 'scale-110' : 'group-hover:rotate-12'}`} />
                  <span className="font-black text-base md:text-lg tracking-tight">Hired</span>
                  {activeTab === 'hired' && <div className="absolute right-0 top-0 bottom-0 w-1 bg-idara-orange"></div>}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab("volunteers"); setSidebarOpen(false); }}
                  className={`w-full text-left px-5 py-4 rounded-2xl flex flex-row items-center gap-4 transition-all duration-300 relative group overflow-hidden whitespace-nowrap ${activeTab === "volunteers"
                    ? "bg-idara-navy text-white shadow-[0_10px_20px_-5px_rgba(3,18,73,0.3)] translate-x-2"
                    : "text-gray-400 hover:bg-gray-50 hover:text-idara-navy"
                    }`}
                >
                  <Heart className={`w-5 h-5 transition-transform duration-500 ${activeTab === 'volunteers' ? 'scale-110' : 'group-hover:rotate-12'}`} />
                  <span className="font-black text-base md:text-lg tracking-tight">Volunteers</span>
                  {activeTab === 'volunteers' && <div className="absolute right-0 top-0 bottom-0 w-1 bg-idara-orange"></div>}
                </button>
              </li>
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-8 border-t border-gray-100 mt-auto">
            <button
              onClick={handleLogout}
              className="w-full bg-idara-navy text-white font-black py-4 rounded-2xl shadow-[0_10px_20px_-5px_rgba(3,18,73,0.3)] hover:bg-idara-orange hover:shadow-idara-orange/30 transition-all duration-300 active:scale-[0.98] flex justify-center items-center gap-3 text-sm"
            >
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
            <p className="text-sm md:text-base text-center text-gray-300 font-bold uppercase tracking-widest mt-6">
              © 2026 Idara Al-Khair • Core
            </p>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-6 overflow-y-auto mt-16 lg:mt-0 bg-[#f9fafc]">
          {/* Dashboard Tab */}
          {activeTab === "dashboard" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-7xl mx-auto space-y-10 pb-20">
              {/* Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 bg-white p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(3,18,73,0.02)] border border-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-idara-navy/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-idara-navy tracking-tight mb-2">Welcome Back, Admin</h2>
                  <p className="text-gray-400 font-bold flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-idara-orange" />
                    {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
                <div className="flex items-center gap-4 relative z-10">
                   <div className="flex flex-col items-end">
                      <span className="text-sm md:text-base font-black text-green-500 uppercase tracking-widest flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        System Operational
                      </span>
                      <p className="text-sm md:text-base font-bold text-gray-300 uppercase tracking-widest mt-1">Refreshed: {new Date().toLocaleTimeString()}</p>
                   </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "Active Job Posts", val: getRecentJobs().length, icon: Briefcase, color: "idara-navy", trend: "+2 this week" },
                  { label: "Total Applications", val: jobResponses.length, icon: FileText, color: "idara-orange", trend: "12 pending review" },
                  { label: "Human Resources", val: volunteers.length, icon: Heart, color: "emerald-500", trend: "5 new registrations" },
                  { label: "Community Inquiries", val: messages.length, icon: Mail, color: "amber-500", trend: "Last reply 2h ago" }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_60px_rgba(3,18,73,0.08)] transition-all duration-500 group relative overflow-hidden hover:-translate-y-2">
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-current opacity-[0.03] rounded-full -mr-12 -mt-12 group-hover:scale-[3] transition-all duration-700 text-${stat.color}`}></div>
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                      stat.color === 'idara-navy' ? 'bg-idara-navy text-white shadow-idara-navy/20' : 
                      stat.color === 'idara-orange' ? 'bg-idara-orange text-white shadow-idara-orange/20' : 
                      stat.color === 'emerald-500' ? 'bg-emerald-500 text-white shadow-emerald-500/20' : 
                      'bg-amber-500 text-white shadow-amber-500/20'
                    }`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-4xl font-black text-idara-navy mb-1 tracking-tighter">{stat.val}</p>
                      <p className="text-sm md:text-base font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                       <span className="text-sm md:text-base font-bold text-gray-300 uppercase tracking-widest">{stat.trend}</span>
                       <TrendingUp className="w-3 h-3 text-green-400" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions & Recent */}
              <div className="grid lg:grid-cols-3 gap-10">
                {/* Recent Activity */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex justify-between items-center px-4">
                    <h3 className="text-xl sm:text-2xl font-black text-idara-navy">Recent Inquiries</h3>
                    <button onClick={() => setActiveTab("emails")} className="text-sm md:text-base font-black text-idara-orange uppercase tracking-widest hover:underline flex items-center gap-2">
                      View All <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(3,18,73,0.02)] border border-gray-50 overflow-hidden">
                    <div className="divide-y divide-gray-50">
                      {messages.length === 0 ? (
                        <div className="p-20 text-center text-gray-300 font-bold uppercase tracking-widest text-xs italic">No recent activity detected</div>
                      ) : (
                        messages.slice(0, 5).map((m, i) => (
                          <div key={i} className="p-8 hover:bg-gray-50/50 transition-all group flex items-start justify-between cursor-default">
                             <div className="flex items-center gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center font-black text-idara-navy group-hover:bg-idara-navy group-hover:text-white transition-all shadow-sm">
                                  {m.name.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                  <p className="font-black text-idara-navy group-hover:text-idara-orange transition-colors">{m.name}</p>
                                  <p className="text-xs font-bold text-gray-400 leading-none mt-1">{m.email}</p>
                                </div>
                             </div>
                             <div className="flex flex-col items-end gap-2">
                                <span className="text-sm md:text-base font-black bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full uppercase tracking-widest">New Message</span>
                                <p className="text-sm md:text-base font-bold text-gray-300 uppercase tracking-widest">{new Date(m.createdAt).toLocaleDateString()}</p>
                             </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>

                {/* Quick Actions Panel */}
                <div className="space-y-6">
                  <h3 className="text-xl sm:text-2xl font-black text-idara-navy px-4">Quick Actions</h3>
                  <div className="bg-idara-navy rounded-[3rem] p-10 shadow-2xl shadow-idara-navy/20 text-white relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-full bg-idara-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative z-10 space-y-4">
                      <button 
                        onClick={() => setActiveTab("addjob")}
                        className="w-full bg-white/10 hover:bg-idara-orange text-white text-left p-6 rounded-3xl transition-all duration-300 group/btn flex justify-between items-center"
                      >
                        <div>
                          <p className="font-black tracking-tight">Create Listing</p>
                          <p className="text-sm md:text-base font-bold text-white/50 uppercase tracking-widest mt-1">Post a new job vacancy</p>
                        </div>
                        <Briefcase className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                      <button 
                        onClick={() => setActiveTab("volunteers")}
                        className="w-full bg-white/10 hover:bg-emerald-500 text-white text-left p-6 rounded-3xl transition-all duration-300 group/btn flex justify-between items-center"
                      >
                        <div>
                          <p className="font-black tracking-tight">Onboard Squad</p>
                          <p className="text-sm md:text-base font-bold text-white/50 uppercase tracking-widest mt-1">Manage volunteer apps</p>
                        </div>
                        <Heart className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                    <p className="text-sm md:text-base font-black text-white/20 uppercase tracking-[0.5em] text-center mt-10">Idara Control Center</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Emails Tab */}
          {activeTab === "emails" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-7xl mx-auto pb-20">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-4">
                  {showAllMessages && (
                    <button
                      onClick={() => setShowAllMessages(false)}
                      className="w-10 h-10 flex items-center justify-center bg-idara-navy text-white rounded-xl hover:bg-idara-orange transition-all"
                    >
                      ←
                    </button>
                  )}
                  <h2 className="text-2xl sm:text-3xl font-black text-idara-navy">
                    Contact Messages
                  </h2>
                </div>
                {messages.length > 0 && !showAllMessages && (
                  <div className="flex gap-3">
                    <button
                      onClick={handleSelectAll}
                      className="px-4 py-2 text-sm bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 flex items-center gap-2 transition-all"
                    >
                      {selectedMessages.size === messages.length ? 'Deselect All' : 'Select All'}
                    </button>
                    <button
                      onClick={handleDeleteSelected}
                      disabled={selectedMessages.size === 0}
                      className="px-4 py-2 text-sm bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-all"
                    >
                      Delete Selected ({selectedMessages.size})
                    </button>
                  </div>
                )}
              </div>
              {messages.length === 0 ? (
                <p className="text-gray-500 italic">No messages found.</p>
              ) : (
                <>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {(showAllMessages ? messages : getRecentMessages()).map((m, index) => (
                      <div
                        key={m.id || m.filename || `message-${index}`}
                        className={`bg-white border-2 border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2.5rem] p-8 relative transition-all duration-500 hover:shadow-[0_20px_50px_rgba(3,18,73,0.08)] hover:-translate-y-1 hover:border-idara-orange/20 ${selectedMessages.has(m.id) && !showAllMessages ? 'ring-4 ring-idara-orange/20 border-idara-orange' : ''}`}
                      >
                        {!showAllMessages && (
                          <div className="absolute top-4 right-4">
                            <input
                              type="checkbox"
                              checked={selectedMessages.has(m.id)}
                              onChange={() => handleSelectMessage(m.id)}
                              className="w-5 h-5 text-idara-orange bg-gray-50 border-gray-200 rounded-lg focus:ring-idara-orange"
                            />
                          </div>
                        )}
                        <div className="w-12 h-12 bg-idara-navy/5 rounded-2xl flex items-center justify-center text-idara-navy font-black text-xl mb-4 group-hover:bg-idara-navy group-hover:text-white transition-all">
                          {m.name.charAt(0).toUpperCase()}
                        </div>
                        <h3 className="font-black text-xl text-idara-navy mb-1">{m.name}</h3>
                        <p className="text-sm font-bold text-idara-orange mb-0.5">{m.email}</p>
                        <p className="text-xs font-medium text-gray-400">{m.phone}</p>
                        <div className="mt-4 p-4 bg-gray-50 rounded-2xl text-gray-700 text-sm leading-relaxed border border-gray-100">
                          {m.message}
                        </div>
                        <div className="mt-4 flex items-center justify-between border-t border-gray-50 pt-4">
                          {m.preferredDate ? (
                            <p className="text-sm md:text-base font-black text-green-600 bg-green-50 px-2 py-1 rounded-full uppercase tracking-wider">
                              📅 {m.preferredDate}
                            </p>
                          ) : <div />}
                          <p className="text-sm md:text-base font-bold text-gray-400 uppercase tracking-wider">
                            {new Date(m.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                </>
              )}
            </div>
          )}

          {/* Add Job */}
          {activeTab === "addjob" && (
            <div className="flex justify-center items-start bg-linear-to-br from-gray-50 to-gray-100 p-4 py-6">
              <div className="w-full max-w-6xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 text-idara-navy flex items-center gap-4">
                  Add New Job
                </h2>

                <form
                  onSubmit={handleAddJob}
                  className="bg-white p-10 rounded-[2.5rem] shadow-2xl space-y-8 border-2 border-gray-50 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-idara-orange/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                  
                  <div className="grid md:grid-cols-2 gap-8 relative z-10">
                    <div>
                      <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Job Title</label>
                      <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} required placeholder="Senior Developer" className="w-full bg-gray-50 rounded-2xl border-2 border-gray-100 px-5 py-4 focus:bg-white focus:border-idara-orange outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Location</label>
                      <input type="text" value={jobLocation} onChange={(e) => setJobLocation(e.target.value)} required placeholder="Karachi, Pakistan" className="w-full bg-gray-50 rounded-2xl border-2 border-gray-100 px-5 py-4 focus:bg-white focus:border-idara-orange outline-none transition-all" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Description</label>
                      <textarea value={jobDesc} onChange={(e) => setJobDesc(e.target.value)} required rows={4} placeholder="Describe the role..." className="w-full bg-gray-50 rounded-2xl border-2 border-gray-100 px-5 py-4 focus:bg-white focus:border-idara-orange outline-none transition-all" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="md:col-span-1">
                      <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Job Type</label>
                      <select value={jobType} onChange={(e) => setJobType(e.target.value)} className="w-full bg-gray-50 rounded-2xl border-2 border-gray-100 px-5 py-4 focus:bg-white focus:border-idara-orange outline-none transition-all appearance-none cursor-pointer">
                        <option>Full-Time</option>
                        <option>Part-Time</option>
                        <option>Internship</option>
                        <option>Contract</option>
                      </select>
                    </div>
                    <div className="md:col-span-1">
                      <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Category</label>
                      <input value={category} placeholder="Engineering" onChange={(e) => setCategory(e.target.value)} className="w-full bg-gray-50 rounded-2xl border-2 border-gray-100 px-5 py-4 focus:bg-white focus:border-idara-orange outline-none transition-all" />
                    </div>
                    <div className="md:col-span-1">
                      <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Department</label>
                      <input value={department} placeholder="Tech" onChange={(e) => setDepartment(e.target.value)} className="w-full bg-gray-50 rounded-2xl border-2 border-gray-100 px-5 py-4 focus:bg-white focus:border-idara-orange outline-none transition-all" />
                    </div>
                    <div className="md:col-span-1">
                      <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Deadline</label>
                      <input type="date" value={deadlineAt} onChange={(e) => setDeadlineAt(e.target.value)} className="w-full bg-gray-50 rounded-2xl border-2 border-gray-100 px-5 py-4 focus:bg-white focus:border-idara-orange outline-none transition-all" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Requirements</label>
                      <textarea value={requirements} onChange={(e) => setRequirements(e.target.value)} rows={4} className="w-full bg-gray-50 rounded-2xl border-2 border-gray-100 px-5 py-4 focus:bg-white focus:border-idara-orange outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Responsibilities</label>
                      <textarea value={responsibilities} onChange={(e) => setResponsibilities(e.target.value)} rows={4} className="w-full bg-gray-50 rounded-2xl border-2 border-gray-100 px-5 py-4 focus:bg-white focus:border-idara-orange outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Qualifications</label>
                      <textarea value={qualifications} onChange={(e) => setQualifications(e.target.value)} rows={4} className="w-full bg-gray-50 rounded-2xl border-2 border-gray-100 px-5 py-4 focus:bg-white focus:border-idara-orange outline-none transition-all" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={jobSubmitting}
                    className="w-full bg-idara-navy text-white font-black py-5 rounded-4xl shadow-2xl shadow-idara-navy/20 hover:bg-idara-orange hover:shadow-idara-orange/20 active:scale-[0.98] transition-all disabled:opacity-60 text-xl"
                  >
                    {jobSubmitting ? "Creating..." : "Create Job Posting"}
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Recent Jobs (2 din ke andar wali) */}
          {activeTab === "recentjobs" && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-black text-idara-navy">
                  Recent Job Postings
                </h2>
                <button
                  onClick={loadJobs}
                  className="w-12 h-12 flex items-center justify-center bg-gray-100 text-idara-navy rounded-xl hover:bg-idara-navy hover:text-white transition-all shadow-sm"
                >
                  <RefreshCw className="w-5 h-5" />
                </button>
              </div>

              {getRecentJobs().length === 0 ? (
                <div className="text-center py-12 bg-white rounded-xl border">
                  <Clock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg mb-2">No recent jobs found</p>
                  <p className="text-gray-400 text-sm">Jobs from the last 2 days will appear here</p>
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {getRecentJobs().map((job) => (
                    <div key={job.id} className="group bg-white border-2 border-gray-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl hover:border-idara-orange/20 transition-all duration-500 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-idara-orange/5 rounded-full -mr-12 -mt-12 group-hover:scale-[3] transition-all duration-700"></div>

                      <div className="flex justify-between items-start mb-6 relative z-10">
                        <div className="w-12 h-12 bg-idara-navy/5 rounded-2xl flex items-center justify-center text-idara-navy font-black text-xl group-hover:bg-idara-navy group-hover:text-white transition-all">
                          {job.title.charAt(0).toUpperCase()}
                        </div>
                        <button
                          onClick={() => handleDeleteJob(job.id)}
                          className="w-10 h-10 flex items-center justify-center text-gray-300 hover:text-red-500 transition-all bg-gray-50 hover:bg-red-50 rounded-xl"
                          title="Delete Job"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      <h3 className="font-black text-2xl text-idara-navy mb-2 group-hover:text-idara-orange transition-colors relative z-10">{job.title}</h3>

                      <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                        <span className="flex items-center bg-gray-100 px-3 py-1.5 rounded-full text-sm md:text-base font-black text-gray-600 uppercase tracking-wider">
                          📍 {job.location}
                        </span>
                        <span className="flex items-center bg-idara-navy text-white px-3 py-1.5 rounded-full text-sm md:text-base font-black uppercase tracking-wider">
                          🕒 {job.jobType?.replace("_", " ")}
                        </span>
                      </div>

                      <p className="text-sm text-gray-500 line-clamp-3 mb-6 leading-relaxed relative z-10">{job.description}</p>

                      <div className="pt-6 border-t border-gray-50 flex items-center justify-between relative z-10">
                        <div className="text-sm md:text-base text-green-600 font-black flex items-center bg-green-50 px-3 py-1.5 rounded-full uppercase tracking-wider">
                          READY
                        </div>
                        <p className="text-sm md:text-base font-bold text-gray-400 uppercase tracking-wider">
                          {job.createdAt ? new Date(job.createdAt).toLocaleDateString() : ""}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Old Jobs (2 din se purani) */}
          {activeTab === "oldjobs" && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2">
                  <Archive className="w-6 h-6" />
                  Old Jobs (Archive)
                </h2>
                <button
                  onClick={loadJobs}
                  className="px-3 py-1.5 text-sm rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Refresh Jobs
                </button>
              </div>

              {getOldJobs().length === 0 ? (
                <div className="text-center py-12 bg-white rounded-xl border">
                  <Archive className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg mb-2">No old jobs found</p>
                  <p className="text-gray-400 text-sm">Jobs older than 2 days will appear here</p>
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {getOldJobs().map((job) => (
                    <div key={job.id} className="group bg-white border-2 border-gray-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gray-100/50 rounded-full -mr-12 -mt-12 group-hover:bg-idara-navy/5 transition-all duration-500"></div>

                      <div className="flex justify-between items-start mb-6 relative z-10">
                        <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 font-black text-xl group-hover:bg-gray-200 transition-all">
                          {job.title.charAt(0).toUpperCase()}
                        </div>
                        <button
                          onClick={() => handleDeleteJob(job.id)}
                          className="w-10 h-10 flex items-center justify-center text-gray-300 hover:text-red-500 transition-all bg-gray-50 hover:bg-red-50 rounded-xl"
                          title="Delete Job"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      <h3 className="font-black text-2xl text-gray-400 mb-2 group-hover:text-idara-navy transition-colors relative z-10">{job.title}</h3>

                      <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                        <span className="flex items-center bg-gray-50 px-3 py-1.5 rounded-full text-sm md:text-base font-black text-gray-400 uppercase tracking-wider">
                          📍 {job.location}
                        </span>
                        <span className="flex items-center bg-gray-50 text-gray-400 px-3 py-1.5 rounded-full text-sm md:text-base font-black uppercase tracking-wider">
                          🕒 {job.jobType?.replace("_", " ")}
                        </span>
                      </div>

                      <p className="text-sm text-gray-400 line-clamp-3 mb-6 leading-relaxed relative z-10">{job.description}</p>

                      <div className="pt-6 border-t border-gray-50 flex items-center justify-between relative z-10">
                        <div className="text-sm md:text-base text-gray-400 font-black flex items-center bg-gray-100 px-3 py-1.5 rounded-full uppercase tracking-wider">
                          ARCHIVED
                        </div>
                        <p className="text-sm md:text-base font-bold text-gray-400 uppercase tracking-wider">
                          {job.createdAt ? new Date(job.createdAt).toLocaleDateString() : ""}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Job Responses */}
          {activeTab === "jobresponse" && (
            <div>
              <div className="animate-in fade-in duration-500">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                  <h2 className="text-2xl sm:text-3xl font-black text-idara-navy flex items-center gap-3">
                    <Briefcase className="w-8 h-8 text-idara-orange" />
                    Role Responses ({specificJobApps.length})
                  </h2>
                  <button
                    onClick={loadJobResponses}
                    disabled={responsesLoading}
                    className="px-6 py-3 bg-white border-2 border-gray-100 text-idara-navy rounded-2xl hover:bg-idara-navy hover:text-white transition-all shadow-sm font-black flex items-center gap-2"
                  >
                    <RefreshCw className={`w-4 h-4 ${responsesLoading ? 'animate-spin' : ''}`} />
                    Refresh
                  </button>
                </div>

                {responsesLoading ? (
                  <div className="flex flex-col items-center justify-center py-20 bg-white rounded-[2.5rem] border text-center">
                    <RefreshCw className="w-12 h-12 text-idara-orange animate-spin mb-4" />
                    <p className="text-idara-navy font-black uppercase tracking-widest text-sm">Filtering Responses...</p>
                  </div>
                ) : jobResponses.length === 0 ? (
                  <div className="text-center py-20 bg-white rounded-[2.5rem] border-2 border-dashed border-gray-200">
                    <Briefcase className="w-20 h-20 text-gray-200 mx-auto mb-6" />
                    <h3 className="text-xl font-bold text-gray-400">No Role Specific Responses</h3>
                    <p className="text-gray-400 mt-2">Applications for specific job postings will appear here.</p>
                  </div>
                ) : (
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {specificJobApps.map((res) => (
                      <div key={res.id} className="group bg-white border-2 border-gray-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col h-full text-left">
                        {/* Decoration */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-idara-orange/5 rounded-full -mr-16 -mt-16 group-hover:scale-[1.5] transition-all duration-700"></div>
                        
                        <div className="flex justify-between items-start mb-6 relative z-10">
                          <div className="w-14 h-14 bg-[#012060] text-white rounded-3xl flex items-center justify-center font-black text-xl shadow-xl shadow-blue-900/20 uppercase">
                            {res.applicantName?.charAt(0)}
                          </div>
                          <span className={`text-sm md:text-base font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-sm ${
                            res.status === 'HIRED' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 
                            res.status === 'REJECTED' ? 'bg-rose-50 text-rose-600 border border-rose-100' : 
                            res.status === 'INTERVIEW' ? 'bg-blue-50 text-blue-600 border border-blue-100' :
                            'bg-amber-50 text-amber-600 border border-amber-100'
                          }`}>
                            {res.status}
                          </span>
                        </div>

                        <div className="space-y-1 mb-6 relative z-10">
                          <h3 className="text-2xl font-black text-idara-navy truncate" title={res.applicantName}>{res.applicantName}</h3>
                          <p className="text-idara-orange font-bold text-sm truncate">{res.applicantEmail}</p>
                          <div className="flex items-center gap-2 text-gray-400 text-xs font-bold mt-2">
                             <Smartphone className="w-3 h-3 text-idara-orange" />
                             {res.applicantPhone || 'N/A'}
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-4xl p-6 mb-8 border border-gray-100 relative z-10 grow">
                          <div className="mb-4">
                              <span className="text-sm md:text-base font-black text-gray-400 uppercase tracking-widest block mb-1">Applying For</span>
                              <p className="font-black text-idara-navy truncate">{res.job?.title || 'Unknown Position'}</p>
                          </div>
                          
                          <div className="pt-2 border-t border-gray-100">
                             <span className="text-sm md:text-base font-black text-gray-400 uppercase tracking-widest block mb-1">Message / Area of Interest</span>
                             <p className="text-xs text-gray-600 font-medium line-clamp-4 italic bg-white/50 p-3 rounded-2xl border border-dotted border-gray-200">
                                {res.coverLetter || 'No message provided'}
                             </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3 relative z-10 mt-auto">
                          {res.resumeUrl && (
                            <a 
                              href={res.resumeUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex-1 bg-white border-2 border-blue-900 text-blue-900 font-black py-3 rounded-2xl hover:bg-blue-900 hover:text-white transition-all text-xs flex items-center justify-center gap-2"
                            >
                              <FileText className="w-4 h-4" /> View CV
                            </a>
                          )}
                          {res.status !== 'INTERVIEW' && res.status !== 'HIRED' && (
                            <button 
                              onClick={() => markForInterview(res)}
                              className="flex-1 bg-idara-orange text-white font-black py-3 rounded-2xl hover:brightness-110 shadow-lg shadow-idara-orange/20 transition-all text-xs flex items-center justify-center gap-2"
                            >
                              <Calendar className="w-4 h-4" /> Interview
                            </button>
                          )}
                        </div>

                        <div className="flex items-center justify-between mt-8 pt-4 border-t border-gray-50 relative z-10 text-sm md:text-base text-gray-400 font-black uppercase tracking-widest">
                           <div className="flex items-center gap-2">
                              <Calendar className="w-3 h-3 text-idara-orange" />
                              {new Date(res.createdAt).toLocaleDateString()}
                           </div>
                           <span>#APP-{res.id}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Job Applications (General Interest) */}
          {activeTab === "jobapplications" && (
            <div className="animate-in fade-in duration-500">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <h2 className="text-2xl sm:text-3xl font-black text-idara-navy flex items-center gap-3">
                  <Users className="w-8 h-8 text-emerald-500" />
                  General Interest Apps ({generalInterestApps.length})
                </h2>
                <button
                  onClick={loadJobResponses}
                  disabled={responsesLoading}
                  className="px-6 py-3 bg-white border-2 border-gray-100 text-idara-navy rounded-2xl hover:bg-idara-navy hover:text-white transition-all shadow-sm font-black flex items-center gap-2"
                >
                  <RefreshCw className={`w-4 h-4 ${responsesLoading ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
              </div>

              {responsesLoading ? (
                <div className="flex flex-col items-center justify-center py-20 bg-white rounded-[2.5rem] border text-center">
                  <RefreshCw className="w-12 h-12 text-emerald-500 animate-spin mb-4" />
                  <p className="text-idara-navy font-black uppercase tracking-widest text-sm">Searching Database...</p>
                </div>
              ) : generalInterestApps.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-[2.5rem] border-2 border-dashed border-gray-200">
                  <Users className="w-20 h-20 text-gray-200 mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-gray-400">No General Submissions</h3>
                  <p className="text-gray-400 mt-2">Applications from the 'Upload' button will show up here.</p>
                </div>
              ) : (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {generalInterestApps.map((res) => (
                    <div key={res.id} className="group bg-white border-2 border-emerald-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col h-full text-left">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-[1.5] transition-all duration-700"></div>
                      <div className="flex justify-between items-start mb-6 relative z-10">
                        <div className="w-14 h-14 bg-emerald-600 text-white rounded-3xl flex items-center justify-center font-black text-xl shadow-xl shadow-emerald-900/20 uppercase">
                          {res.applicantName?.charAt(0)}
                        </div>
                        <span className="text-sm md:text-base font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-sm bg-emerald-50 text-emerald-600 border border-emerald-100">
                          GENERAL
                        </span>
                      </div>
                      <div className="space-y-1 mb-6 relative z-10">
                        <h3 className="text-2xl font-black text-idara-navy truncate">{res.applicantName}</h3>
                        <p className="text-emerald-600 font-bold text-sm truncate">{res.applicantEmail}</p>
                        <div className="flex items-center gap-2 text-gray-400 text-xs font-bold mt-2">
                           <Smartphone className="w-3 h-3 text-emerald-500" />
                           {res.applicantPhone || 'N/A'}
                        </div>
                      </div>
                      <div className="bg-emerald-50/50 rounded-4xl p-6 mb-8 border border-emerald-100 relative z-10 grow">
                        <div className="mb-4">
                            <span className="text-sm md:text-base font-black text-emerald-600 uppercase tracking-widest block mb-1">Area of Interest</span>
                            <p className="font-black text-idara-navy bg-white/50 p-3 rounded-2xl border border-dotted border-emerald-200">
                                {res.coverLetter?.split('\n')[0] || "General Request"}
                            </p>
                        </div>
                        <div className="pt-2 border-t border-emerald-100">
                           <span className="text-sm md:text-base font-black text-gray-400 uppercase tracking-widest block mb-1">Full Context</span>
                           <p className="text-xs text-gray-600 font-medium line-clamp-4 italic">
                              {res.coverLetter || 'No details provided'}
                           </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3 relative z-10 mt-auto">
                        {res.resumeUrl && (
                          <a href={res.resumeUrl} target="_blank" rel="noopener noreferrer" className="flex-1 bg-white border-2 border-emerald-600 text-emerald-600 font-black py-3 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all text-xs flex items-center justify-center gap-2"><FileText className="w-4 h-4" /> CV</a>
                        )}
                        <button onClick={() => markForInterview(res)} className="flex-1 bg-idara-navy text-white font-black py-3 rounded-2xl hover:bg-emerald-600 transition-all text-xs flex items-center justify-center gap-2"><Calendar className="w-4 h-4" /> Onboard</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Volunteers Tab */}
          {activeTab === "volunteers" && (
            <div className="animate-in fade-in duration-500">
              {/* ✅ UNIFIED PREMIUM VOLUNTEER ORIENTATION MODAL */}
              {isVolModalOpen && (
                <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
                  <div className="absolute inset-0 bg-idara-navy/40 backdrop-blur-xl transition-all duration-500" onClick={() => !isProcessingVol && setIsVolModalOpen(false)}></div>
                  <div className="bg-white w-full max-w-md rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] relative z-10 animate-in zoom-in-95 duration-500 border border-white/20">
                    <div className="bg-linear-to-br from-idara-orange to-idara-orange p-10 text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl animate-pulse"></div>
                      <h3 className="text-3xl font-black tracking-tight mb-2 flex items-center gap-3">
                        <Heart className="w-8 h-8 text-white" />
                        Scale Orientation
                      </h3>
                      <p className="text-sm md:text-base text-white/70 font-black uppercase tracking-[0.2em]">
                        Volunteer Registration • {selectedVolForAction?.volunteerName}
                      </p>
                    </div>
                    <div className="p-10 space-y-8 bg-linear-to-b from-white to-gray-50/30">
                      <div className="flex items-center gap-5 p-5 bg-gray-50/50 rounded-4xl border border-gray-100 shadow-inner">
                        <div className="w-14 h-14 bg-idara-orange text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-idara-orange/10">
                          {selectedVolForAction?.volunteerName?.charAt(0)}
                        </div>
                        <div className="space-y-0.5">
                          <p className="text-lg font-black text-idara-navy leading-none">{selectedVolForAction?.volunteerName}</p>
                          <p className="text-xs font-bold text-idara-orange/70 lowercase">{selectedVolForAction?.volunteerEmail}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-6">
                        <div className="group">
                          <label className="block text-sm md:text-base font-black text-gray-400 uppercase tracking-widest mb-3 ml-2 group-focus-within:text-idara-orange transition-colors">Date for Orientation</label>
                          <input 
                            type="date" 
                            value={volActionDate}
                            onChange={(e) => setVolActionDate(e.target.value)}
                            className="w-full bg-white border-2 border-gray-100 rounded-2xl px-6 py-4 outline-none focus:border-idara-orange focus:ring-4 focus:ring-idara-orange/5 transition-all font-bold text-gray-700 shadow-sm"
                          />
                        </div>
                        <div className="group">
                          <label className="block text-sm md:text-base font-black text-gray-400 uppercase tracking-widest mb-3 ml-2 group-focus-within:text-idara-orange transition-colors">Select Time</label>
                          <input 
                            type="time" 
                            value={volActionTime}
                            onChange={(e) => setVolActionTime(e.target.value)}
                            className="w-full bg-white border-2 border-gray-100 rounded-2xl px-6 py-4 outline-none focus:border-idara-orange focus:ring-4 focus:ring-idara-orange/5 transition-all font-bold text-gray-700 shadow-sm"
                          />
                        </div>
                      </div>

                      <div className="flex gap-4 pt-2">
                        <button 
                          onClick={() => setIsVolModalOpen(false)}
                          className="flex-1 py-4 font-black text-gray-400 hover:text-idara-navy rounded-2xl transition-all hover:bg-gray-100"
                        >
                          Dismiss
                        </button>
                        <button 
                          onClick={() => handleVolunteerResponse(selectedVolForAction.id, 'INTERVIEW', volActionDate, volActionTime)}
                          disabled={isProcessingVol || !volActionDate || !volActionTime}
                          className="flex-2 bg-idara-orange text-white py-4 px-8 rounded-2xl font-black shadow-2xl shadow-idara-orange/30 hover:brightness-110 active:scale-95 transition-all duration-300 disabled:opacity-40 flex items-center justify-center gap-3"
                        >
                          {isProcessingVol ? (
                            <RefreshCw className="w-5 h-5 animate-spin" />
                          ) : (
                            <>
                              <Calendar className="w-5 h-5" />
                              Send Invitation
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-black text-idara-navy flex items-center gap-3">
                  <Heart className="w-8 h-8 text-idara-orange" />
                  Volunteer Applications ({volunteers.length})
                </h2>
                <button
                  onClick={loadVolunteers}
                  disabled={volunteersLoading}
                  className="w-12 h-12 flex items-center justify-center bg-white border-2 border-gray-100 text-idara-navy rounded-2xl hover:bg-idara-navy hover:text-white transition-all shadow-sm"
                >
                  <RefreshCw className={`w-5 h-5 ${volunteersLoading ? 'animate-spin' : ''}`} />
                </button>
              </div>

              {volunteers.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-[2.5rem] border-2 border-dashed border-gray-200">
                  <Heart className="w-20 h-20 text-gray-200 mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-gray-400">No Volunteer Applications Yet</h3>
                  <p className="text-gray-400 mt-2">Applications from the volunteer form will appear here.</p>
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {volunteers.map((vol) => (
                    <div key={vol.id} className="group bg-white border-2 border-gray-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-idara-orange/5 rounded-full -mr-16 -mt-16 group-hover:scale-[2] transition-all duration-700"></div>
                      
                      <div className="flex justify-between items-start mb-6 relative z-10">
                        <div className="w-14 h-14 bg-idara-navy text-white rounded-3xl flex items-center justify-center font-black text-xl shadow-xl shadow-idara-navy/20 uppercase">
                          {vol.volunteerName.charAt(0)}
                        </div>
                        <div className="flex gap-2">
                           <button
                            onClick={() => deleteVolunteer(vol.id)}
                            className="w-10 h-10 flex items-center justify-center text-gray-300 hover:text-red-500 transition-all bg-gray-50 hover:bg-red-50 rounded-xl"
                            title="Delete Permanently"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      <div className="space-y-1 mb-6 relative z-10">
                        <div className="flex items-center gap-3">
                          <h3 className="text-2xl font-black text-idara-navy group-hover:text-idara-orange transition-colors">
                            {vol.volunteerName}
                          </h3>
                          {vol.status !== 'PENDING' && (
                            <span className={`text-sm md:text-base font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-sm ${
                              vol.status === 'APPROVED' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 
                              vol.status === 'REJECTED' ? 'bg-rose-50 text-rose-600 border border-rose-100' : 
                              'bg-amber-50 text-amber-600 border border-amber-100'
                            }`}>
                              {vol.status}
                            </span>
                          )}
                        </div>
                        <p className="text-idara-orange font-bold text-sm tracking-tight">{vol.volunteerEmail}</p>
                      </div>

                      <div className="bg-gray-50 rounded-4xl p-6 mb-8 space-y-4 border border-gray-100 relative z-10">
                        <div className="flex justify-between text-sm">
                          <span className="font-bold text-gray-400 uppercase tracking-widest text-sm md:text-base">Volunteer Age</span>
                          <span className="font-black text-idara-navy">{vol.volunteerAge} Years</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="font-bold text-gray-400 uppercase tracking-widest text-sm md:text-base">Applied By</span>
                          <span className="font-black text-idara-navy">{vol.applicantName}</span>
                        </div>
                        {vol.interviewDate && (
                          <div className="flex justify-between text-sm text-amber-600 bg-amber-50 px-3 py-2 rounded-xl border border-amber-100">
                            <span className="font-bold uppercase tracking-widest text-sm md:text-base">Meet Scheduled</span>
                            <span className="font-black">{vol.interviewDate} @ {vol.interviewTime}</span>
                          </div>
                        )}
                        <div className="pt-2">
                          <span className="font-bold text-gray-400 uppercase tracking-widest text-sm md:text-base block mb-2">Availability</span>
                          <div className="flex flex-wrap gap-2">
                            {vol.availability.split(',').map((avail: string) => (
                              <span key={avail} className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm md:text-base font-black text-gray-600 transition-all group-hover:border-idara-orange/30 group-hover:bg-orange-50/50">
                                {avail.trim()}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Professional Action Buttons */}
                      <div className="flex flex-wrap gap-3 relative z-10">
                        <button 
                          onClick={() => { setSelectedVolForAction(vol); setIsVolModalOpen(true); }}
                          className="flex-1 bg-white border-2 border-idara-navy text-idara-navy font-black py-3 rounded-2xl hover:bg-idara-navy hover:text-white transition-all text-xs flex items-center justify-center gap-2"
                        >
                          <Calendar className="w-4 h-4" /> Schedule Meet
                        </button>
                        <button 
                          onClick={() => handleVolunteerResponse(vol.id, 'APPROVE')}
                          disabled={isProcessingVol || vol.status === 'APPROVED'}
                          className="flex-1 bg-emerald-600 text-white font-black py-3 rounded-2xl hover:bg-emerald-700 transition-all text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10 disabled:opacity-50"
                        >
                          <CheckCircle className="w-4 h-4" /> Approve
                        </button>
                        <button 
                          onClick={() => handleVolunteerResponse(vol.id, 'REJECT')}
                          disabled={isProcessingVol || vol.status === 'REJECTED'}
                          className="w-12 h-12 bg-white border-2 border-rose-100 text-rose-500 rounded-2xl hover:bg-rose-500 hover:text-white transition-all flex items-center justify-center disabled:opacity-50"
                          title="Reject Application"
                        >
                          <XCircle className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-8 pt-4 border-t border-gray-50 relative z-10">
                        <div className="flex items-center gap-2 text-sm md:text-base font-black text-gray-400 uppercase tracking-widest">
                          <CheckCircle className={`w-3 h-3 ${vol.status === 'APPROVED' ? 'text-emerald-500' : 'text-gray-300'}`} />
                          {vol.status === 'PENDING' ? 'Awaiting Action' : vol.status.replace('_', ' ')}
                        </div>
                        <span className="text-sm md:text-base font-bold text-gray-400 uppercase tracking-widest">
                          {new Date(vol.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Candidates Tab - UPDATED WITH MANUAL ADD FEATURE */}
          {activeTab === "candidates" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Candidates ({candidates.length})
                </h2>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <button
                    onClick={() => setShowAddForm(!showAddForm)}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-green-600 text-white rounded-md sm:rounded-lg hover:bg-green-700 flex items-center gap-1 sm:gap-2 transition-all"
                  >
                    {showAddForm ? '❌ Cancel' : '➕ Add New Candidate'}
                  </button>
                  {/* <button
                   onClick={loadCandidates}
                   className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-indigo-600 text-white rounded-md sm:rounded-lg hover:bg-indigo-700 flex items-center gap-1 sm:gap-2 transition-all"
                    >
                    <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5" />
                    Refresh
                  </button> */}
                </div>

              </div>

              {/* ✅ Add Candidate Form */}
              {showAddForm && (
                <div className="bg-white p-6 rounded-xl border border-green-200 mb-6 shadow-lg">
                  <h3 className="text-lg font-semibold mb-4 text-green-800 flex items-center gap-2">
                    ➕ Add New Candidate
                  </h3>
                  <form onSubmit={handleAddCandidate} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={newCandidate.name}
                        onChange={(e) => setNewCandidate({ ...newCandidate, name: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                        placeholder="Enter candidate name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        value={newCandidate.email}
                        onChange={(e) => setNewCandidate({ ...newCandidate, email: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                        placeholder="Enter email address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Position *</label>
                      <input
                        type="text"
                        required
                        value={newCandidate.position}
                        onChange={(e) => setNewCandidate({ ...newCandidate, position: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                        placeholder="Enter job position"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        value={newCandidate.phone}
                        onChange={(e) => setNewCandidate({ ...newCandidate, phone: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                        placeholder="Enter phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
                      <input
                        type="text"
                        value={newCandidate.experience}
                        onChange={(e) => setNewCandidate({ ...newCandidate, experience: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                        placeholder="e.g., 3 years in web development"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Education</label>
                      <input
                        type="text"
                        value={newCandidate.education}
                        onChange={(e) => setNewCandidate({ ...newCandidate, education: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                        placeholder="e.g., Bachelors in Computer Science"
                      />
                    </div>
                    <div className="md:col-span-2 flex gap-3 pt-2">
                      <button
                        type="submit"
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2 transition-colors"
                      >
                        💾 Save Candidate
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setShowAddForm(false);
                          setNewCandidate({
                            name: '', email: '', position: '', phone: '', experience: '', education: ''
                          });
                        }}
                        className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {candidates.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-[2.5rem] border-2 border-dashed border-gray-200">
                  <Users className="w-20 h-20 text-gray-200 mx-auto mb-6" />
                  <p className="text-gray-400 font-black text-2xl mb-8 uppercase tracking-widest">Database Empty</p>
                  <button
                    onClick={() => setShowAddForm(true)}
                    className="px-8 py-4 bg-idara-navy text-white font-black rounded-2xl hover:bg-idara-orange transition-all shadow-xl shadow-idara-navy/10 flex items-center gap-3 mx-auto"
                  >
                    <Users className="w-5 h-5" /> Add First Candidate
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-[2.5rem] border-2 border-gray-100 overflow-hidden shadow-2xl">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-full">
                      <thead className="bg-idara-navy text-white">
                        <tr>
                          <th className="px-8 py-6 text-left text-sm md:text-base font-black uppercase tracking-[0.2em] opacity-60">ID</th>
                          <th className="px-8 py-6 text-left text-sm md:text-base font-black uppercase tracking-[0.2em] opacity-60">Candidate</th>
                          <th className="px-8 py-6 text-left text-sm md:text-base font-black uppercase tracking-[0.2em] opacity-60">Contact</th>
                          <th className="px-8 py-6 text-left text-sm md:text-base font-black uppercase tracking-[0.2em] opacity-60">Position</th>
                          <th className="px-8 py-6 text-left text-sm md:text-base font-black uppercase tracking-[0.2em] opacity-60">Status</th>
                          <th className="px-8 py-6 text-left text-sm md:text-base font-black uppercase tracking-[0.2em] opacity-60">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {candidates.map((candidate, index) => (
                          <tr key={candidate.id} className={`hover:bg-gray-50 transition-all duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/20'}`}>
                            <td className="px-8 py-6 whitespace-nowrap">
                              <span className="text-xs font-black text-gray-300">#{candidate.id}</span>
                            </td>
                            <td className="px-8 py-6 whitespace-nowrap">
                              <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-idara-navy/5 flex items-center justify-center text-idara-navy font-black text-sm">
                                  {candidate.name.charAt(0).toUpperCase()}
                                </div>
                                <div className="text-sm font-black text-idara-navy">{candidate.name}</div>
                              </div>
                            </td>
                            <td className="px-8 py-6 whitespace-nowrap">
                              <div className="text-sm font-bold text-idara-orange">{candidate.email}</div>
                              <div className="text-sm md:text-base text-gray-400 font-medium">{candidate.phone || "No Phone"}</div>
                            </td>
                            <td className="px-8 py-6 whitespace-nowrap">
                              <span className="bg-gray-100 px-3 py-1.5 rounded-full text-sm md:text-base font-black text-gray-600 uppercase tracking-wider">
                                {candidate.position}
                              </span>
                            </td>
                            <td className="px-8 py-6 whitespace-nowrap">
                              <span className={`inline-flex items-center px-4 py-2 rounded-xl text-sm md:text-base font-black uppercase tracking-wider ${candidate.status === "interview_scheduled"
                                ? 'bg-blue-100 text-blue-800'
                                : candidate.status === "hired"
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                {candidate.status || "Candidates"}
                              </span>
                            </td>
                            <td className="px-8 py-6 whitespace-nowrap">
                              <div className="flex gap-2">
                                <button
                                  onClick={() => scheduleInterview(candidate.id, candidate.name, candidate.email, candidate.position)}
                                  className="w-10 h-10 flex items-center justify-center bg-idara-navy text-white rounded-xl hover:bg-idara-orange transition-all shadow-lg shadow-idara-navy/10"
                                  title="Schedule Interview"
                                >
                                  <Calendar className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => markAsHired(candidate)}
                                  className="w-10 h-10 flex items-center justify-center bg-green-600 text-white rounded-xl hover:bg-idara-navy transition-all shadow-lg shadow-green-600/10"
                                  title="Mark as Hired"
                                >
                                  <CheckCircle className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => deleteCandidate(candidate.id)}
                                  className="w-10 h-10 flex items-center justify-center bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all"
                                  title="Delete"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Table Footer with Summary */}
                  <div className="bg-gray-50/50 px-8 py-6 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm md:text-base font-black uppercase tracking-widest text-gray-400">
                      <div className="flex items-center gap-8">
                        <span className="flex items-center gap-2">Total <span className="text-idara-navy">{candidates.length}</span></span>
                        <span className="flex items-center gap-2">Interview <span className="text-idara-orange">{candidates.filter(c => c.status === "interview_scheduled").length}</span></span>
                        <span className="flex items-center gap-2">Hired <span className="text-green-600">{candidates.filter(c => c.status === "hired").length}</span></span>
                      </div>
                      <div>
                        Updated: {new Date().toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Interview Candidates */}
          {activeTab === "interview" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2">
                  <Calendar className="w-6 h-6" />
                  Interview Candidates ({interviewCandidates.length})
                </h2>
                <button
                  onClick={loadInterviewCandidates}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Refresh
                </button>
              </div>

              {interviewCandidates.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-xl border">
                  <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg mb-2">No interview candidates</p>
                  <p className="text-gray-400 text-sm">Candidates marked for interview will appear here</p>
                </div>
              ) : (
                <div className="grid gap-8 md:grid-cols-2">
                  {interviewCandidates.map((candidate) => (
                    <div key={candidate.id} className="bg-white border-2 border-gray-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-5">
                          <div className="w-14 h-14 bg-idara-navy text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-idara-navy/10 text-uppercase">
                            {candidate.candidateName.charAt(0)}
                          </div>
                          <div>
                            <h3 className="font-black text-xl text-idara-navy">{candidate.candidateName}</h3>
                            <p className="text-idara-orange font-bold text-sm">{candidate.candidateEmail}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="bg-blue-100 text-blue-800 text-sm md:text-base font-black px-3 py-1.5 rounded-full uppercase tracking-wider">
                            Interview Team
                          </span>
                        </div>
                      </div>

                      <div className="p-6 bg-gray-50 rounded-4xl border border-gray-100 mb-8">
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-sm md:text-base font-black text-gray-400 uppercase tracking-widest italic">Applied For</p>
                          <p className="text-idara-navy font-black text-sm">{candidate.jobTitle}</p>
                        </div>
                        
                        {(candidate.interviewDate || candidate.interviewTime) && (
                          <div className="pt-4 border-t border-gray-200">
                            <p className="text-green-600 font-black text-sm md:text-base uppercase tracking-[0.2em] mb-2">Confirmed Schedule</p>
                            <div className="flex gap-4">
                              <p className="text-idara-navy font-black">📅 {candidate.interviewDate}</p>
                              <p className="text-idara-navy font-black">🕒 {candidate.interviewTime}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex gap-3 pt-2">
                        <button
                          onClick={() => markAsHired(candidate)}
                          className="flex-1 py-4 bg-green-600 text-white font-black rounded-2xl hover:bg-idara-navy transition-all shadow-xl shadow-green-600/10 flex items-center justify-center gap-2"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Hired
                        </button>
                        <button
                          onClick={() => markForInterview({
                            id: candidate.applicationId,
                            applicantName: candidate.candidateName,
                            applicantEmail: candidate.candidateEmail,
                            job: { title: candidate.jobTitle }
                          })}
                          className="px-6 py-4 bg-idara-navy text-white font-black rounded-2xl hover:bg-idara-orange transition-all shadow-xl shadow-idara-navy/10 flex items-center justify-center gap-2"
                        >
                          <Calendar className="w-4 h-4" />
                          Reschedule
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Hired Candidates */}
          {activeTab === "hired" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  Hired Candidates ({hiredCandidates.length})
                </h2>
                <button
                  onClick={loadHiredCandidates}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Refresh
                </button>
              </div>

              {hiredCandidates.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-xl border">
                  <CheckCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg mb-2">No hired candidates yet</p>
                  <p className="text-gray-400 text-sm">Successfully hired candidates will appear here</p>
                </div>
              ) : (
                <div className="grid gap-8 md:grid-cols-2">
                  {hiredCandidates.map((candidate) => (
                    <div key={candidate.id} className="group bg-white border-2 border-gray-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -mr-16 -mt-16 group-hover:bg-green-100 transition-all duration-500"></div>

                      <div className="flex justify-between items-start mb-6 relative z-10">
                        <div className="flex items-center gap-5">
                          <div className="w-14 h-14 bg-green-600 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-green-600/10">
                            {candidate.candidateName.charAt(0)}
                          </div>
                          <div>
                            <h3 className="font-black text-xl text-idara-navy">{candidate.candidateName}</h3>
                            <p className="text-idara-orange font-bold text-sm">{candidate.candidateEmail}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="bg-green-100 text-green-800 text-sm md:text-base font-black px-3 py-1.5 rounded-full uppercase tracking-wider">
                            Officially Hired
                          </span>
                        </div>
                      </div>

                      <div className="p-6 bg-green-50/50 rounded-4xl border border-green-100 mb-8 relative z-10">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-sm md:text-base font-black text-gray-400 uppercase tracking-widest italic">Position</p>
                          <p className="text-green-700 font-black text-sm">{candidate.jobTitle}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm md:text-base font-black text-gray-400 uppercase tracking-widest italic">Hired Date</p>
                          <p className="text-idara-navy font-black text-sm">{new Date(candidate.hiredAt).toLocaleDateString()}</p>
                        </div>
                      </div>

                      <div className="bg-idara-navy p-6 rounded-3xl flex items-center justify-center gap-3 relative z-10 transition-all group-hover:bg-idara-orange">
                        <CheckCircle className="w-5 h-5 text-white" />
                        <span className="text-white font-black uppercase tracking-widest text-xs">Onboarding Complete</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </main>

        {/* Fixed button at bottom right corner - only on emails tab */}
        {activeTab === "emails" && !showAllMessages && (
          <button
            onClick={async () => {
              await loadMessages();
              setShowAllMessages(true);
            }}
            className="fixed bottom-4 right-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center gap-2 z-50 shadow-lg"
          >
            See All Contact Messages
          </button>
        )}
      </div>
    );
  }

  // --------- Login Page (Default) -----------
  return (
    <main className="min-h-screen bg-linear-to-br from-idara-navy via-[#0c1f6d] to-[#03114b] flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-idara-orange/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-idara-cyan/10 rounded-full blur-[120px]"></div>
      </div>

      <form
        onSubmit={handleLogin}
        className="bg-white/95 backdrop-blur-2xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] rounded-[2.5rem] px-8 py-12 w-full max-w-md border border-white/20 relative z-10"
      >
        {/* Heading */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-idara-orange/10 rounded-3xl flex items-center justify-center mx-auto mb-4 border border-idara-orange/20">
            <span className="text-4xl">🚀</span>
          </div>
          <h2 className="text-3xl font-black text-idara-navy tracking-tight">Admin Login</h2>
          <p className="text-gray-500 text-sm font-medium mt-1">IDARA AL-KHAIR Management Portal</p>
        </div>

        {/* Email Input */}
        <div className="mb-6">
          <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">
            Admin Email
          </label>
          <div className="relative group">
            <input
              type="email"
              placeholder="hr@ait.iak.ngo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-50 rounded-2xl border-2 border-gray-100 px-5 py-4 text-gray-800 placeholder:text-gray-400 focus:bg-white focus:border-idara-orange outline-none transition-all shadow-sm group-hover:border-gray-200"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-8">
          <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">
            Admin Password
          </label>
          <div className="relative group">
            <input
              type="password"
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-50 rounded-2xl border-2 border-gray-100 px-5 py-4 text-gray-800 placeholder:text-gray-400 focus:bg-white focus:border-idara-orange outline-none transition-all shadow-sm group-hover:border-gray-200"
            />
          </div>
        </div>

        {/* Button */}
        <button
          disabled={loading}
          className="w-full bg-idara-navy text-white font-black py-4 rounded-2xl shadow-xl shadow-idara-navy/20 hover:bg-idara-orange hover:shadow-idara-orange/20 active:scale-[0.98] transition-all disabled:opacity-70 flex justify-center items-center gap-3 text-lg"
        >
          {loading ? (
            <RefreshCw className="w-5 h-5 animate-spin" />
          ) : (
            <>
              Login Dashboard
              <span className="text-xl">→</span>
            </>
          )}
        </button>

        {/* Error Message */}
        {error && (
          <div className="mt-6 p-4 bg-red-50 rounded-2xl border border-red-100 flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white shrink-0">
              <span className="text-xs">!</span>
            </div>
            <p className="text-red-600 text-xs font-bold leading-tight">{error}</p>
          </div>
        )}
      </form>
    </main>
  );
}
