'use client';
import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const u = localStorage.getItem('sw_current_user');
      setUser(u ? JSON.parse(u) : null);
    }
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);
  function handleLogout() {
    localStorage.removeItem('sw_current_user');
    setUser(null);
    window.location.reload();
  }
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-[#181924] to-[#23242e] text-white min-h-screen flex flex-col">
        {/* Header/Nav */}
        <header className="w-full border-b border-[#23242e] bg-[#181924] sticky top-0 z-50">
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
              <Image src="/shieldwave-logo.png" alt="SHIELDWAVE Logo" width={36} height={36} className="rounded" />
              <span className="font-bold text-lg tracking-tight">SHIELDWAVE</span>
            </Link>
            {/* Menu */}
            <nav className="hidden md:flex gap-6 text-sm font-medium" ref={menuRef}>
              {/* Function Dropdown */}
              <div className="relative">
                <button
                  className={`flex items-center gap-1 hover:text-[#f7c873] transition ${openMenu === 'function' ? 'text-[#ffd600]' : ''}`}
                  onClick={() => setOpenMenu(openMenu === 'function' ? null : 'function')}
                  type="button"
                >
                  Function
                  <svg width="16" height="16" fill="none" viewBox="0 0 20 20"><path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                {openMenu === 'function' && (
                  <div className="absolute left-0 mt-2 w-48 bg-[#23242e] border border-[#353646] rounded-lg shadow-lg z-50 animate-fade-in-up">
                    <Link href="/port-scanner" className="block px-4 py-2 hover:bg-[#181924] hover:text-[#ffd600] transition">Port Scanner</Link>
                    <Link href="/website-scanner" className="block px-4 py-2 hover:bg-[#181924] hover:text-[#ffd600] transition">Website Scanner</Link>
                    <Link href="/network-scanner" className="block px-4 py-2 hover:bg-[#181924] hover:text-[#ffd600] transition">Network Scanner</Link>
                  </div>
                )}
              </div>
              {/* Company Dropdown */}
              <div className="relative">
                <button
                  className={`flex items-center gap-1 hover:text-[#f7c873] transition ${openMenu === 'company' ? 'text-[#ffd600]' : ''}`}
                  onClick={() => setOpenMenu(openMenu === 'company' ? null : 'company')}
                  type="button"
                >
                  Company
                  <svg width="16" height="16" fill="none" viewBox="0 0 20 20"><path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                {openMenu === 'company' && (
                  <div className="absolute left-0 mt-2 w-40 bg-[#23242e] border border-[#353646] rounded-lg shadow-lg z-50 animate-fade-in-up">
                    <Link href="/about" className="block px-4 py-2 hover:bg-[#181924] hover:text-[#ffd600] transition">About Us</Link>
                    <Link href="/contact" className="block px-4 py-2 hover:bg-[#181924] hover:text-[#ffd600] transition">Contact</Link>
                  </div>
                )}
              </div>
              <Link href="/service" className="hover:text-[#f7c873] transition">Service</Link>
              <Link href="/pricing" className="hover:text-[#f7c873] transition">Pricing</Link>
            </nav>
            {/* Actions */}
            <div className="flex gap-2 items-center">
              {user ? (
                <>
                  <span className="text-sm font-medium text-[#ffd600]">Welcome, {user.name}</span>
                  <button onClick={handleLogout} className="ml-2 px-4 py-2 bg-[#23242e] text-white font-semibold rounded hover:bg-[#353646] border border-[#353646] transition">Log out</button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-sm font-medium hover:underline">Log in</Link>
                  <Link href="/signup" className="ml-2 px-4 py-2 bg-[#ffd600] text-black font-semibold rounded hover:bg-[#ffe066] transition">Free sign up</Link>
                </>
              )}
            </div>
          </div>
        </header>
        {/* Main content */}
        <main className="flex-1 flex flex-col">{children}</main>
        {/* Footer (optional, có thể thêm nếu muốn) */}
      </body>
    </html>
  );
}
