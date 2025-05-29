'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const sampleResult = {
  ip: '192.168.1.1',
  host: 'demo-host.local',
  openPorts: [
    { port: 22, status: 'open', name: 'ssh', service: 'OpenSSH 8.2' },
    { port: 80, status: 'open', name: 'http', service: 'nginx 1.18' },
    { port: 443, status: 'open', name: 'https', service: 'nginx 1.18' },
    { port: 3306, status: 'closed', name: 'mysql', service: '' },
    { port: 8080, status: 'open', name: 'http-alt', service: 'Apache Tomcat' },
  ]
};

export default function PortScannerPage() {
  const [tab, setTab] = useState<'light' | 'deep'>('light');
  const [target, setTarget] = useState('');
  const [detect, setDetect] = useState<'service' | 'os'>('service');
  const [protocol, setProtocol] = useState<'tcp' | 'udp'>('tcp');
  const [portType, setPortType] = useState<'common' | 'list'>('common');
  const [portList, setPortList] = useState('Top 100 ports');
  const [agree, setAgree] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  async function handleScan(e: any) {
    e.preventDefault();
    setScanning(true);
    // Gọi API scan
    const res = await fetch('/api/scan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ target, type: protocol })
    });
    const data = await res.json();
    setScanning(false);
    if (data && data.scanId) {
      router.push(`/port-scanner/result?ip=${encodeURIComponent(target)}&scanId=${encodeURIComponent(data.scanId)}`);
    }
  }

  function handleReset() {
    setResult(null);
    setTarget('');
    setAgree(false);
    setCopied(false);
  }

  function handleCopy() {
    if (!result) return;
    const text = `Scan result for ${result.host} (${result.ip}):\n` +
      result.openPorts.map((p: any) => `${p.port}\t${p.status.toUpperCase()}\t${p.name}\t${p.service}`).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  function handleTab(tabName: 'light'|'deep') {
    if (tabName === 'deep') {
      setShowModal(true);
      return;
    }
    setTab(tabName);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a2636] via-[#233a53] to-[#2a3e5c] flex items-center justify-center py-12 px-2 font-sans">
      {/* Modal Deep Scan Compare */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-0 relative animate-fade-in-up">
            <button onClick={()=>setShowModal(false)} className="absolute top-4 right-4 text-[#7a8ca7] hover:text-[#23242e] text-2xl font-bold focus:outline-none">×</button>
            <div className="px-8 pt-8 pb-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#ffb300] text-xl">ⓘ</span>
                <span className="text-lg font-semibold text-[#23242e]">Enable Deep Scans and unlock more tools & features</span>
              </div>
              <div className="text-[#1976d2] font-medium mb-4">Perform deep port scanning with additional options.</div>
              <table className="w-full mb-4 border-separate border-spacing-y-1">
                <thead>
                  <tr className="text-[#7a8ca7] text-sm">
                    <th className="text-left font-semibold py-2">Options</th>
                    <th className="text-center font-semibold py-2">Light scan</th>
                    <th className="text-center font-semibold py-2">Deep scan</th>
                  </tr>
                </thead>
                <tbody className="text-[#23242e] text-base">
                  <tr>
                    <td className="py-2">Top 100 ports</td>
                    <td className="text-center"><span className="text-[#1bbf5c] text-xl">✓</span></td>
                    <td className="text-center"><span className="text-[#1bbf5c] text-xl">✓</span></td>
                  </tr>
                  <tr>
                    <td className="py-2">Single IP or hostname</td>
                    <td className="text-center"><span className="text-[#1bbf5c] text-xl">✓</span></td>
                    <td className="text-center"><span className="text-[#1bbf5c] text-xl">✓</span></td>
                  </tr>
                  <tr>
                    <td className="py-2">Detect service version</td>
                    <td className="text-center"><span className="text-[#1bbf5c] text-xl">✓</span></td>
                    <td className="text-center"><span className="text-[#1bbf5c] text-xl">✓</span></td>
                  </tr>
                  <tr>
                    <td className="py-2">Detect operating system</td>
                    <td className="text-center"><span className="text-[#1bbf5c] text-xl">✓</span></td>
                    <td className="text-center"><span className="text-[#1bbf5c] text-xl">✓</span></td>
                  </tr>
                  <tr>
                    <td className="py-2">All 65535 ports</td>
                    <td className="text-center"><span className="text-[#ff2a2a] text-xl">✗</span></td>
                    <td className="text-center"><span className="text-[#1bbf5c] text-xl">✓</span></td>
                  </tr>
                  <tr>
                    <td className="py-2">Traceroute</td>
                    <td className="text-center"><span className="text-[#ff2a2a] text-xl">✗</span></td>
                    <td className="text-center"><span className="text-[#1bbf5c] text-xl">✓</span></td>
                  </tr>
                </tbody>
              </table>
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-1 text-[#1bbf5c] text-base"><span>✓</span> <span>Full access to all the 20+ tools on the platform</span></div>
                <div className="flex items-center gap-2 mb-1 text-[#1bbf5c] text-base"><span>✓</span> <span>Dedicated scanners for major new vulnerabilities</span></div>
                <div className="flex items-center gap-2 mb-1 text-[#1bbf5c] text-base"><span>✓</span> <span>Authenticated scans, reporting & a lot more!</span></div>
              </div>
            </div>
            <div className="bg-[#fafbfc] border-t border-[#e3eafc] px-8 py-4 flex flex-col md:flex-row gap-3 md:gap-4 items-center justify-end rounded-b-2xl">
              <button className="px-5 py-2 rounded-lg border border-[#e3eafc] bg-white text-[#23242e] font-semibold hover:bg-[#f3f4f6] transition">Compare plans</button>
              <button className="px-5 py-2 rounded-lg border border-[#ffd600] bg-[#ffd600] text-[#23242e] font-extrabold hover:bg-[#ffe066] transition">Create free account</button>
            </div>
          </div>
        </div>
      )}
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Left: Info */}
        <div className="flex-1 max-w-xl flex flex-col justify-center">
          <div className="mb-8 flex flex-col gap-4">
            <div className="w-16 h-16 bg-[#b3e0ff] rounded-2xl flex items-center justify-center mb-2">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="16" fill="#e3f2fd"/><path d="M18 12a6 6 0 1 1 0 12a6 6 0 0 1 0-12zm0 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8z" fill="#1976d2"/><circle cx="18" cy="18" r="10" stroke="#1976d2" strokeWidth="2" fill="none"/></svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-2 leading-tight text-[#ffd600] drop-shadow">Port Scanner <span className="text-white">with</span> <span className="text-white">Nmap</span></h1>
            <p className="mb-4 text-base md:text-lg text-[#c7e0f7] font-medium">
              Use Nmap to scan ports, identify running services (including versions), and perform OS fingerprinting in a single TCP port check.<br />
              You can inspect the top 100 TCP and UDP ports for free or subscribe to a paid plan to automate and schedule extensive custom scans for even more ports.<br />
              Each Nmap port scan targeting an IP address or hostname automatically maps the attack surface and provides accurate data for your reconnaissance efforts. Sign up for a paid account to conduct deep port scans with additional advanced options.
            </p>
            <button className="px-5 py-2 bg-[#23242e] text-white rounded-lg shadow border border-[#3b4a5e] hover:bg-[#353646] transition font-semibold w-fit">Create free account</button>
          </div>
        </div>
        {/* Right: Form */}
        <div className="flex-1 max-w-xl w-full">
          <div className="bg-white rounded-[28px] shadow-2xl border border-[#e3eafc] flex flex-col overflow-hidden">
            {/* Tabs */}
            <div className="flex relative bg-[#f8fbff]">
              <button
                className={`flex-1 py-4 text-lg font-bold transition rounded-tl-[28px] ${tab === 'light' ? 'bg-white text-[#1976d2] shadow-[0_2px_8px_#e3eafc]' : 'text-[#7a8ca7]'}`}
                onClick={() => handleTab('light')}
                type="button"
                style={{zIndex: tab === 'light' ? 2 : 1}}
              >Light scan</button>
              <button
                className={`flex-1 py-4 text-lg font-bold transition rounded-tr-[28px] ${tab === 'deep' ? 'bg-white text-[#1976d2] shadow-[0_2px_8px_#e3eafc]' : 'text-[#7a8ca7]'}`}
                onClick={() => handleTab('deep')}
                type="button"
                style={{zIndex: tab === 'deep' ? 2 : 1}}
              >Deep scan</button>
            </div>
            <form className="flex flex-col gap-0 px-8 pt-8 pb-6">
              {/* Target */}
              <div className="mb-6">
                <label className="block text-[#1976d2] font-semibold mb-2 text-base">Target</label>
                <input
                  className="w-full px-4 py-3 rounded-lg border border-[#e3eafc] bg-[#f8fbff] text-[#23242e] font-semibold text-base focus:border-[#1976d2] focus:ring-2 focus:ring-[#b3e0ff] outline-none placeholder-[#b0b8c9]"
                  placeholder="IP or Hostname"
                  value={target}
                  onChange={e => setTarget(e.target.value)}
                  required
                />
              </div>
              <div className="border-t border-[#e3eafc] -mx-8 mb-0" />
              {/* Scan options */}
              <div className="flex flex-col md:flex-row gap-4 items-center py-6">
                <span className="text-[#1976d2] font-semibold w-40 min-w-[120px]">Scan options</span>
                <div className="flex gap-6 items-center">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <span className="relative inline-block w-10 h-6">
                      <input type="checkbox" checked={detect === 'service'} onChange={() => setDetect('service')} className="sr-only peer" />
                      <span className="absolute left-0 top-0 w-10 h-6 bg-[#e3eafc] rounded-full peer-checked:bg-[#1976d2] transition" />
                      <span className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${detect === 'service' ? 'translate-x-4 bg-[#1976d2]' : ''}`} />
                    </span>
                    <span className="text-[#1976d2] text-base font-semibold">Detect service version</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <span className="relative inline-block w-10 h-6">
                      <input type="checkbox" checked={detect === 'os'} onChange={() => setDetect('os')} className="sr-only peer" />
                      <span className="absolute left-0 top-0 w-10 h-6 bg-[#e3eafc] rounded-full peer-checked:bg-[#1976d2] transition" />
                      <span className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${detect === 'os' ? 'translate-x-4 bg-[#1976d2]' : ''}`} />
                    </span>
                    <span className="text-[#7a8ca7] text-base font-semibold">Detect operating system</span>
                  </label>
                </div>
              </div>
              <div className="border-t border-[#e3eafc] -mx-8 mb-0" />
              {/* Protocol */}
              <div className="flex flex-col md:flex-row gap-4 items-center py-6">
                <span className="text-[#1976d2] font-semibold w-40 min-w-[120px]">Protocol</span>
                <div className="flex gap-6 items-center">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input type="radio" checked={protocol === 'tcp'} onChange={() => setProtocol('tcp')} className="accent-[#1976d2] w-5 h-5" />
                    <span className="text-[#1976d2] text-base font-semibold">TCP</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input type="radio" checked={protocol === 'udp'} onChange={() => setProtocol('udp')} className="accent-[#1976d2] w-5 h-5" />
                    <span className="text-[#7a8ca7] text-base font-semibold">UDP</span>
                  </label>
                </div>
              </div>
              <div className="border-t border-[#e3eafc] -mx-8 mb-0" />
              {/* Port selection */}
              <div className="flex flex-col md:flex-row gap-4 items-center py-6">
                <span className="text-[#1976d2] font-semibold w-40 min-w-[120px]">Port selection</span>
                <div className="flex gap-6 items-center flex-1">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input type="radio" checked={portType === 'common'} onChange={() => setPortType('common')} className="accent-[#1976d2] w-5 h-5" />
                    <span className="text-[#1976d2] text-base font-semibold">Common ports</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input type="radio" checked={portType === 'list'} onChange={() => setPortType('list')} className="accent-[#1976d2] w-5 h-5" />
                    <span className="text-[#7a8ca7] text-base font-semibold">List of ports</span>
                  </label>
                  <div className="relative ml-2">
                    <select
                      className="appearance-none px-3 py-2 rounded-lg border border-[#e3eafc] bg-[#f8fbff] text-[#1976d2] font-semibold text-base focus:border-[#1976d2] focus:ring-2 focus:ring-[#b3e0ff] outline-none min-w-[180px] pr-8"
                      value={portList}
                      onChange={e => setPortList(e.target.value)}
                    >
                      <option>Top 100 ports</option>
                      <option>Top 1000 ports</option>
                      <option>Custom...</option>
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#1976d2] text-lg">▼</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-[#e3eafc] -mx-8 mb-0" />
              {/* Checkbox + Terms */}
              <div className="flex flex-col gap-2 py-6">
                <label className="flex items-center gap-2 text-base text-[#23242e]">
                  <input type="checkbox" checked={agree} onChange={e => setAgree(e.target.checked)} required className="accent-[#ffd600] w-5 h-5" />
                  I am authorized to scan this target and I agree with the Terms of Service.
                </label>
                <a href="#" className="underline text-[#1976d2] hover:text-[#ffd600] text-sm font-semibold">Read the Terms of Service</a>
              </div>
              {/* Button */}
              <div className="py-6">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#ffd600] text-[#23242e] font-extrabold rounded-full shadow hover:bg-[#ffe066] transition text-lg flex items-center justify-center gap-2 disabled:opacity-60 border-2 border-[#ffd600]"
                  style={{boxShadow: '0 2px 12px 0 #ffd60033'}}
                  disabled={!agree}
                >
                  <span className="text-xl">🟡</span> Start scan
                </button>
              </div>
              <div className="bg-[#f8fbff] text-[#7a8ca7] text-sm rounded-b-[28px] -mx-8 px-8 py-3 flex items-center justify-between">
                <span>Map a company's network perimeter, check firewall rules, and determine...</span>
                <a href="#" className="font-bold underline hover:text-[#1976d2]">SEE MORE <span className="ml-1">▼</span></a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 