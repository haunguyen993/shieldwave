"use client";
import { useState } from "react";

const TABS = [
  { key: "light", label: "Light scan" },
  { key: "deep", label: "Deep scan" },
];
const PORT_OPTIONS = [
  "Top 100 ports",
  "Top 1000 ports",
  "All 65535 ports",
  "Custom list..."
];

export default function NetworkScannerPage() {
  const [tab, setTab] = useState("light");
  const [target, setTarget] = useState("");
  const [portType, setPortType] = useState("common");
  const [portList, setPortList] = useState(PORT_OPTIONS[0]);
  const [agree, setAgree] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<string|null>(null);

  function handleScan(e: React.FormEvent) {
    e.preventDefault();
    setScanning(true);
    setResult(null);
    setTimeout(() => {
      setResult(
        tab === "light"
          ? "No critical vulnerabilities found. 1 outdated service detected."
          : "3 CVEs found: CVE-2023-1234, CVE-2022-5678, CVE-2021-9999. See report for details."
      );
      setScanning(false);
    }, 1800);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a2636] via-[#233a53] to-[#2a3e5c] flex items-center justify-center py-12 px-2 font-sans">
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Left: Info */}
        <div className="flex-1 max-w-xl flex flex-col justify-center">
          <div className="mb-8 flex flex-col gap-4">
            <div className="w-16 h-16 bg-[#ffd600] rounded-2xl flex items-center justify-center mb-2">
              {/* Network icon */}
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect width="36" height="36" rx="8" fill="#ffd600"/><text x="8" y="26" fontSize="24" fontWeight="bold" fill="#23242e">N</text><circle cx="28" cy="28" r="4" fill="#23242e"/></svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-2 leading-tight text-[#ffd600] drop-shadow">Network Vulnerability Scanner</h1>
            <p className="mb-2 text-base md:text-lg text-white font-medium">
              The Network Vulnerability Scanner is a highly accurate tool that detects <span className="text-[#ff5a36] font-bold">14,962</span> CVEs in extensively used software products and technologies.
            </p>
            <p className="mb-4 text-base md:text-lg text-[#c7e0f7] font-medium">
              With daily vulnerability updates and a very low rate of false positives, the scanner provides reliable results for your next move.
            </p>
            <button className="px-5 py-2 bg-[#23242e] text-white rounded-lg shadow border border-[#3b4a5e] hover:bg-[#353646] transition font-semibold w-fit">Create free account</button>
          </div>
        </div>
        {/* Right: Form */}
        <div className="flex-1 max-w-xl w-full">
          <div className="bg-white rounded-[28px] shadow-2xl border border-[#e3eafc] flex flex-col overflow-hidden">
            {/* Tabs */}
            <div className="flex relative bg-[#f8fbff]">
              {TABS.map((t, i) => (
                <button
                  key={t.key}
                  className={`flex-1 py-4 text-lg font-bold transition ${i === 0 ? 'rounded-tl-[28px]' : ''} ${i === TABS.length-1 ? 'rounded-tr-[28px]' : ''} ${tab === t.key ? 'bg-white text-[#1976d2] shadow-[0_2px_8px_#e3eafc]' : 'text-[#7a8ca7]'}`}
                  onClick={() => setTab(t.key)}
                  type="button"
                  style={{zIndex: tab === t.key ? 2 : 1}}
                >{t.label}</button>
              ))}
            </div>
            <form className="flex flex-col gap-0 px-8 pt-8 pb-6" onSubmit={handleScan}>
              {/* Target */}
              <div className="mb-6">
                <label className="block text-[#1976d2] font-semibold mb-2 text-base">Target</label>
                <input
                  className="w-full px-4 py-3 rounded-lg border border-[#e3eafc] bg-[#f8fbff] text-[#23242e] font-semibold text-base focus:border-[#1976d2] focus:ring-2 focus:ring-[#b3e0ff] outline-none placeholder-[#b0b8c9]"
                  placeholder="Hostname"
                  value={target}
                  onChange={e => setTarget(e.target.value)}
                  required
                />
              </div>
              <div className="border-t border-[#e3eafc] -mx-8 mb-0" />
              {/* Port selection */}
              <div className="py-6">
                <label className="block text-[#1976d2] font-semibold mb-2 text-base">Port selection</label>
                <div className="flex gap-8 mb-4">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input type="radio" name="portType" value="common" checked={portType === 'common'} onChange={()=>setPortType('common')} className="accent-[#1976d2]" />
                    <span className="text-[#1976d2] text-base font-semibold">Common ports</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input type="radio" name="portType" value="list" checked={portType === 'list'} onChange={()=>setPortType('list')} className="accent-[#1976d2]" />
                    <span className="text-[#1976d2] text-base font-semibold">List of ports</span>
                  </label>
                </div>
                <select
                  className="w-full px-4 py-2 rounded-lg border border-[#e3eafc] bg-white text-[#23242e] font-medium text-base focus:border-[#1976d2] focus:ring-2 focus:ring-[#b3e0ff] outline-none"
                  value={portList}
                  onChange={e => setPortList(e.target.value)}
                >
                  {PORT_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>
              <div className="border-t border-[#e3eafc] -mx-8 mb-0" />
              {/* Terms checkbox */}
              <div className="flex items-center gap-2 py-6">
                <input type="checkbox" id="agree" checked={agree} onChange={e=>setAgree(e.target.checked)} className="accent-[#1976d2] w-5 h-5" />
                <label htmlFor="agree" className="text-[#23242e] text-sm">I am authorized to scan this target and I agree with the Terms of Service.</label>
              </div>
              <a href="#" className="text-[#1976d2] text-xs underline mb-4 -mt-4">Read the Terms of Service</a>
              <button
                type="submit"
                className="w-full py-3 bg-[#ffd600] text-[#23242e] font-bold rounded-lg shadow hover:bg-[#ffe066] transition text-lg flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                disabled={scanning || !target || !agree}
              >
                {scanning ? (
                  <span className="animate-spin h-5 w-5 border-2 border-[#23242e] border-t-transparent rounded-full inline-block"></span>
                ) : (
                  <span className="w-4 h-4 inline-block bg-[#23242e] rounded-full mr-2" style={{boxShadow:'0 0 0 2px #ffd600'}}></span>
                )}
                Start scan
              </button>
              {result && (
                <div className="mt-2 p-3 rounded-lg bg-[#f7fafd] border border-[#e3eafc] text-[#003366] font-semibold text-center animate-fade-in-up">{result}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 