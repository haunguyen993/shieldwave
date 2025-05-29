"use client";
import { useState } from "react";

const TABS = [
  { key: "light", label: "Light scan" },
  { key: "deep", label: "Deep scan" },
  { key: "cli", label: "CLI scan" },
];

export default function WebsiteScannerPage() {
  const [tab, setTab] = useState("light");
  const [target, setTarget] = useState("");
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<string|null>(null);

  function handleScan(e: React.FormEvent) {
    e.preventDefault();
    setScanning(true);
    setResult(null);
    setTimeout(() => {
      setResult(
        tab === "light"
          ? "No critical vulnerabilities found. 2 low-risk issues detected."
          : "1 exploitable SQLi found! 3 XSS, 1 XXE, 2 misconfigurations. See report for details."
      );
      setScanning(false);
    }, 1800);
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#1a2332] to-[#263447] px-0 md:px-0 pb-0 font-sans relative overflow-x-hidden">
      {/* Hero section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-20 pb-10 px-6 md:px-10 gap-8">
        {/* Left: Text */}
        <div className="flex-1 max-w-xl">
          <div className="mb-6">
            <div className="inline-flex items-center mb-4">
              <div className="bg-[#ffd600] rounded-xl p-3 mr-4 flex items-center justify-center">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect width="36" height="36" rx="8" fill="#ffd600"/><path d="M18 8v4M18 24v4M8 18h4M24 18h4M12.93 12.93l2.83 2.83M20.24 20.24l2.83 2.83M12.93 23.07l2.83-2.83M20.24 15.76l2.83-2.83" stroke="#23242e" strokeWidth="2" strokeLinecap="round"/><circle cx="18" cy="18" r="5" fill="#23242e"/></svg>
              </div>
              <span className="text-2xl font-bold text-white">Website Vulnerability Scanner</span>
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-4 leading-tight">Website<br/>Vulnerability<br/>Scanner</h1>
            <p className="text-gray-300 text-lg mb-2">Our custom-built Website Vulnerability Scanner detects SQLi, XSS, command injection, XXE, and <a href="#" className="text-[#ffd600] underline">75+ more web app vulnerabilities</a>, using strategically crafted test payloads to <span className="font-semibold text-white">validate their exploitability</span>.</p>
            <p className="text-gray-400 mb-2">Engineered to handle modern web app architectures, it efficiently crawls SPAs and other JavaScript-heavy websites, detects hidden API endpoints, and navigates complex <span className="font-semibold text-white">authentication flows</span>.</p>
            <p className="text-gray-400 mb-6">Export findings into <span className="font-semibold text-white">customizable reports</span> – complete with risk prioritization, actionable evidence (screenshots, attack replay, HTTP request/response), and clear remediation steps to speed up the fixes that make a difference.</p>
            <button className="px-5 py-2 bg-[#232e3e] text-white rounded-lg font-semibold shadow hover:bg-[#2d3a4e] transition">Create free account</button>
          </div>
        </div>
        {/* Right: Scan form */}
        <div className="flex-1 flex items-center justify-center">
          <form onSubmit={handleScan} className="w-full max-w-md bg-[#eaf3fc]/80 rounded-2xl shadow-xl p-0 overflow-hidden border border-[#c7e0f7]">
            <div className="flex">
              {TABS.map(t => (
                <button
                  type="button"
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`flex-1 py-3 text-lg font-semibold transition-all ${tab === t.key ? 'bg-[#c7e0f7] text-[#232e3e]' : 'bg-transparent text-[#8ca3c7]'} ${t.key === 'light' ? 'rounded-tl-2xl' : ''} ${t.key === 'cli' ? 'rounded-tr-2xl' : ''}`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="p-6 flex flex-col gap-4 bg-[#eaf3fc]">
              <div className="flex gap-2 items-center">
                <select className="px-3 py-2 rounded-lg border border-[#c7e0f7] bg-white text-[#23242e] font-semibold text-base focus:border-[#1976d2] focus:ring-2 focus:ring-[#b3e0ff] outline-none w-28">
                  <option>HTTPS</option>
                  <option>HTTP</option>
                </select>
                <input
                  className="flex-1 px-4 py-2 rounded-lg border border-[#c7e0f7] bg-white text-[#23242e] font-medium text-base focus:border-[#1976d2] focus:ring-2 focus:ring-[#b3e0ff] outline-none"
                  placeholder="www.example.com"
                  value={target}
                  onChange={e => setTarget(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#ffd600] text-[#23242e] font-bold rounded-lg shadow hover:bg-[#ffe066] transition text-lg flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={scanning || !target}
              >
                {scanning ? (
                  <span className="animate-spin h-5 w-5 border-2 border-[#23242e] border-t-transparent rounded-full inline-block"></span>
                ) : (
                  <span className="w-4 h-4 inline-block bg-[#23242e] rounded-full mr-2" style={{boxShadow:'0 0 0 2px #ffd600'}}></span>
                )}
                Start scan
              </button>
              {result && (
                <div className="mt-2 p-3 rounded-lg bg-[#f7fafd] border border-[#c7e0f7] text-[#003366] font-semibold text-center animate-fade-in-up">{result}</div>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Section 2: Features grid with cyberpunk line */}
      <div className="relative max-w-6xl mx-auto px-4 md:px-0 pt-8 pb-20">
        {/* Cyberpunk vertical line */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full flex flex-col items-center z-0 pointer-events-none">
          <div className="w-1 h-16 bg-gradient-to-b from-[#ff3c3c] to-transparent rounded-full"></div>
          <div className="w-6 h-6 rounded-full border-4 border-[#ff3c3c] bg-[#232e3e] shadow-[0_0_24px_8px_#ff3c3c66]"></div>
          <div className="w-1 flex-1 bg-gradient-to-b from-[#ff3c3c] via-[#ff3c3c33] to-transparent"></div>
        </div>
        {/* Section 1: Text left, icon right */}
        <div className="grid md:grid-cols-2 gap-12 relative z-10 mt-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">Find exploitable web app vulnerabilities with <span className="text-[#ffd600]">documented evidence</span></h2>
            <p className="text-gray-300 mb-4">
              Our proprietary Website Vulnerability Scanner gives security pros and appsec teams what they need: <span className="font-semibold text-white">highly accurate, validated findings</span> and actionable evidence – not just a long list of possible exposure points.
            </p>
            <p className="text-gray-400 mb-4">
              Unlike generic scanners, our tool uses out-of-band detection to minimize false positives and ensure reliable results, collecting proof along the way.
            </p>
            <p className="text-gray-400">
              Perform unauthenticated recon, deep authenticated testing, or automated compliance scans – all with a powerful, easy-to-use tool that blends into your workflow.
            </p>
          </div>
          <div className="flex items-center justify-center">
            {/* Dragon SVG */}
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none"><path d="M60 10C33.43 10 11 32.43 11 59c0 26.57 22.43 49 49 49s49-22.43 49-49C109 32.43 86.57 10 60 10zm0 90c-22.06 0-40-17.94-40-40s17.94-40 40-40 40 17.94 40 40-17.94 40-40 40z" fill="#3ca3f7"/><path d="M60 30a29 29 0 100 58 29 29 0 000-58zm0 54a25 25 0 110-50 25 25 0 010 50z" fill="#3ca3f7"/></svg>
          </div>
        </div>
        {/* Section 2: Icon left, text right */}
        <div className="grid md:grid-cols-2 gap-12 mt-20 relative z-10">
          <div className="flex items-center justify-center">
            {/* X SVG */}
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none"><circle cx="60" cy="60" r="54" fill="#3ca3f7" fillOpacity="0.15"/><circle cx="60" cy="60" r="40" fill="#3ca3f7"/><path d="M40 80l40-40M80 80l-40-40" stroke="#fff" strokeWidth="8" strokeLinecap="round"/></svg>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">Trust your results. Minimize FPs with <span className="text-[#ffd600]">proof-based validation</span></h2>
            <p className="text-gray-300 mb-4">
              Our Website Vulnerability Scanner doesn't just find web app security issues – it gives you the evidence you need to validate and report real security risks.
            </p>
            <p className="text-gray-400 mb-4">
              As it crawls and tests your web app, it captures payload execution results and collects evidence such as HTTP request/response with highlighted proof, screenshots, and extracted sensitive data.
            </p>
            <p className="text-gray-400">
              When it's confident the vulnerabilities it found actually exist, the scanner's automatic validation feature applies a <span className="font-semibold text-white">“Confirmed”</span> label.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 