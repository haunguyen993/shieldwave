'use client';
import { useState } from "react";

export default function SignupPage() {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSuccess("");
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value.trim().toLowerCase();
    const password = (form.elements.namedItem('password') as HTMLInputElement)?.value;
    const confirm = (form.elements.namedItem('confirm') as HTMLInputElement)?.value;
    if (!name || !email || !password || !confirm) {
      setError("Please fill all fields.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    // Check if user exists
    const users = JSON.parse(localStorage.getItem('sw_users') || '[]');
    if (users.some((u: any) => u.email === email)) {
      setError("Email already registered.");
      return;
    }
    users.push({ name, email, password, provider: 'email' });
    localStorage.setItem('sw_users', JSON.stringify(users));
    localStorage.setItem('sw_current_user', JSON.stringify({ name, email, provider: 'email' }));
    setSuccess("Sign up successful! Redirecting...");
    setTimeout(() => {
      window.location.href = "/";
    }, 1200);
  }

  function handleSocialSignup(provider: string) {
    setError("");
    setSuccess("");
    const email = provider+"@demo.shieldwave";
    const name = provider.charAt(0).toUpperCase()+provider.slice(1)+" User";
    const users = JSON.parse(localStorage.getItem('sw_users') || '[]');
    if (!users.some((u: any) => u.email === email)) {
      users.push({ name, email, password: '', provider });
      localStorage.setItem('sw_users', JSON.stringify(users));
    }
    localStorage.setItem('sw_current_user', JSON.stringify({ name, email, provider }));
    setSuccess("Sign up successful! Redirecting...");
    setTimeout(() => {
      window.location.href = "/";
    }, 1200);
  }

  return (
    <main className="flex-1 flex items-center justify-center px-2 py-8 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 flex flex-col gap-6 border border-gray-100">
        <h2 className="text-2xl font-bold text-center text-[#23242e] mb-2">Create your free account</h2>
        {error && <div className="text-red-600 text-center text-sm font-medium">{error}</div>}
        {success && <div className="text-green-600 text-center text-sm font-medium">{success}</div>}
        {!showEmailForm ? (
          <div className="flex flex-col gap-3">
            <button
              className="w-full flex items-center justify-center gap-3 py-2 border border-gray-200 rounded-lg font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition shadow"
              onClick={() => setShowEmailForm(true)}
            >
              <span className="text-lg">✉️</span>
              Continue with Email
            </button>
            <button type="button" className="w-full flex items-center justify-center gap-3 py-2 border border-gray-200 rounded-lg font-semibold text-gray-700 bg-white hover:bg-gray-50 transition shadow" onClick={() => handleSocialSignup('google')}>
              <svg width="20" height="20" viewBox="0 0 48 48"><g><circle fill="#fff" cx="24" cy="24" r="24"/><path fill="#4285F4" d="M34.6 24.2c0-.7-.1-1.4-.2-2H24v4.1h6c-.3 1.5-1.3 2.7-2.7 3.5v2.9h4.4c2.6-2.4 4.1-5.9 4.1-10.5z"/><path fill="#34A853" d="M24 36c2.7 0 5-0.9 6.7-2.4l-4.4-2.9c-1.2.8-2.7 1.3-4.3 1.3-3.3 0-6-2.2-7-5.2h-4.5v3.2C13.7 33.7 18.5 36 24 36z"/><path fill="#FBBC05" d="M17 27.8c-.3-.8-.5-1.7-.5-2.8s.2-2 .5-2.8v-3.2h-4.5C11.7 21.1 12 22.5 12 24s-.3 2.9-.5 4.2l4.5-3.2z"/><path fill="#EA4335" d="M24 18.7c1.5 0 2.8.5 3.8 1.4l2.8-2.8C29 15.2 26.7 14 24 14c-5.5 0-10.3 2.3-13.5 6.1l4.5 3.2c1-3 3.7-5.2 7-5.2z"/></g></svg>
              Continue with Google
            </button>
            <button type="button" className="w-full flex items-center justify-center gap-3 py-2 border border-gray-200 rounded-lg font-semibold text-gray-700 bg-white hover:bg-gray-50 transition shadow" onClick={() => handleSocialSignup('microsoft')}>
              <svg width="20" height="20" viewBox="0 0 48 48"><g><rect fill="#fff" x="4" y="4" width="40" height="40" rx="8"/><path fill="#F25022" d="M14 14h8v8h-8z"/><path fill="#7FBA00" d="M26 14h8v8h-8z"/><path fill="#00A4EF" d="M14 26h8v8h-8z"/><path fill="#FFB900" d="M26 26h8v8h-8z"/></g></svg>
              Continue with Microsoft
            </button>
          </div>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleSignup}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input id="name" name="name" type="text" autoComplete="name" required className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#ffd600] focus:ring-2 focus:ring-[#ffd600]/30 outline-none bg-gray-50 text-gray-900" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#ffd600] focus:ring-2 focus:ring-[#ffd600]/30 outline-none bg-gray-50 text-gray-900" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input id="password" name="password" type="password" autoComplete="new-password" required className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#ffd600] focus:ring-2 focus:ring-[#ffd600]/30 outline-none bg-gray-50 text-gray-900" />
            </div>
            <div>
              <label htmlFor="confirm" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input id="confirm" name="confirm" type="password" autoComplete="new-password" required className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#ffd600] focus:ring-2 focus:ring-[#ffd600]/30 outline-none bg-gray-50 text-gray-900" />
            </div>
            <div className="flex items-center gap-2 mt-2">
              <input type="checkbox" className="rounded border-gray-300 focus:ring-[#ffd600]" required />
              <span className="text-xs text-gray-500">I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.</span>
            </div>
            <button type="submit" className="w-full py-2 mt-2 bg-[#ffd600] text-black font-bold rounded-lg shadow hover:bg-[#ffe066] transition text-base">Sign up</button>
            <button type="button" className="w-full py-2 text-sm text-gray-500 hover:underline mt-1" onClick={() => setShowEmailForm(false)}>
              ← Back to social login
            </button>
          </form>
        )}
        <div className="text-center text-sm text-gray-500 mt-2">
          Already have an account? <a href="/login" className="text-[#23242e] font-semibold hover:underline">Sign in now</a>
        </div>
      </div>
    </main>
  );
} 