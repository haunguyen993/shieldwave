'use client';
import { useRef, useState } from "react";

export default function LoginPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Keyboard shortcut: Ctrl+Enter to submit
  function handleKeyDown(e: React.KeyboardEvent) {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      formRef.current?.requestSubmit();
    }
  }

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSuccess("");
    const form = e.currentTarget;
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value.trim().toLowerCase();
    const password = (form.elements.namedItem('password') as HTMLInputElement)?.value;
    const users = JSON.parse(localStorage.getItem('sw_users') || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password);
    if (!user) {
      setError("Invalid email or password.");
      return;
    }
    localStorage.setItem('sw_current_user', JSON.stringify(user));
    setSuccess("Login successful! Redirecting...");
    setTimeout(() => {
      window.location.href = "/";
    }, 1200);
  }

  function handleSocialLogin(provider: string) {
    setError("");
    setSuccess("");
    const email = provider+"@demo.shieldwave";
    const users = JSON.parse(localStorage.getItem('sw_users') || '[]');
    const user = users.find((u: any) => u.email === email && u.provider === provider);
    if (!user) {
      setError("No account found for this provider. Please sign up first.");
      return;
    }
    localStorage.setItem('sw_current_user', JSON.stringify(user));
    setSuccess("Login successful! Redirecting...");
    setTimeout(() => {
      window.location.href = "/";
    }, 1200);
  }

  return (
    <main className="flex-1 flex items-center justify-center px-2 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-center text-[#23242e] mb-2">Log in to SHIELDWAVE</h2>
        {error && <div className="text-red-600 text-center text-sm font-medium">{error}</div>}
        {success && <div className="text-green-600 text-center text-sm font-medium">{success}</div>}
        <form ref={formRef} className="flex flex-col gap-4" onKeyDown={handleKeyDown} onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" required className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#ffd600] focus:ring-2 focus:ring-[#ffd600]/30 outline-none bg-gray-50 text-gray-900" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input id="password" name="password" type="password" autoComplete="current-password" required className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#ffd600] focus:ring-2 focus:ring-[#ffd600]/30 outline-none bg-gray-50 text-gray-900" />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" className="rounded border-gray-300 focus:ring-[#ffd600]" />
              Remember me
            </label>
            <a href="#" className="text-sm text-[#23242e] hover:underline font-medium">Forgot password?</a>
          </div>
          <button type="submit" className="w-full py-2 mt-2 bg-[#ffd600] text-black font-bold rounded-lg shadow hover:bg-[#ffe066] transition text-base flex items-center justify-center gap-2">
            Log in
            <span className="text-xs font-normal text-gray-700">Ctrl + Enter</span>
          </button>
        </form>
        <div className="flex items-center gap-2 my-2">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400">or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>
        <div className="flex flex-col gap-3">
          <button type="button" className="w-full flex items-center justify-center gap-3 py-2 border border-gray-200 rounded-lg font-semibold text-gray-700 bg-white hover:bg-gray-50 transition shadow" onClick={() => handleSocialLogin('google')}>
            <svg width="20" height="20" viewBox="0 0 48 48"><g><circle fill="#fff" cx="24" cy="24" r="24"/><path fill="#4285F4" d="M34.6 24.2c0-.7-.1-1.4-.2-2H24v4.1h6c-.3 1.5-1.3 2.7-2.7 3.5v2.9h4.4c2.6-2.4 4.1-5.9 4.1-10.5z"/><path fill="#34A853" d="M24 36c2.7 0 5-0.9 6.7-2.4l-4.4-2.9c-1.2.8-2.7 1.3-4.3 1.3-3.3 0-6-2.2-7-5.2h-4.5v3.2C13.7 33.7 18.5 36 24 36z"/><path fill="#FBBC05" d="M17 27.8c-.3-.8-.5-1.7-.5-2.8s.2-2 .5-2.8v-3.2h-4.5C11.7 21.1 12 22.5 12 24s-.3 2.9-.5 4.2l4.5-3.2z"/><path fill="#EA4335" d="M24 18.7c1.5 0 2.8.5 3.8 1.4l2.8-2.8C29 15.2 26.7 14 24 14c-5.5 0-10.3 2.3-13.5 6.1l4.5 3.2c1-3 3.7-5.2 7-5.2z"/></g></svg>
            Log in with Google
          </button>
          <button type="button" className="w-full flex items-center justify-center gap-3 py-2 border border-gray-200 rounded-lg font-semibold text-gray-700 bg-white hover:bg-gray-50 transition shadow" onClick={() => handleSocialLogin('microsoft')}>
            <svg width="20" height="20" viewBox="0 0 48 48"><g><rect fill="#fff" x="4" y="4" width="40" height="40" rx="8"/><path fill="#F25022" d="M14 14h8v8h-8z"/><path fill="#7FBA00" d="M26 14h8v8h-8z"/><path fill="#00A4EF" d="M14 26h8v8h-8z"/><path fill="#FFB900" d="M26 26h8v8h-8z"/></g></svg>
            Log in with Microsoft
          </button>
        </div>
        <div className="text-center text-sm text-gray-500 mt-2">
          Need an account? <a href="/signup" className="text-[#23242e] font-semibold hover:underline">Sign up here</a>
        </div>
      </div>
    </main>
  );
} 