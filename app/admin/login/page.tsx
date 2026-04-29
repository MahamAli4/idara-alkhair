"use client";

import { useState } from "react";
import { RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

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
        setLoading(false);
        return;
      }
      
      // Login successful, redirect to dashboard
      // Force a hard navigation so middleware and layout trigger freshly
      window.location.href = "/admin";
    } catch (err: any) {
      setError(String(err));
      setLoading(false);
    }
  };

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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-idara-navy tracking-tight">Admin Login</h2>
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
