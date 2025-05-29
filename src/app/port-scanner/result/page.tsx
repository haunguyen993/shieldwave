'use client';
import { useState } from 'react';

const SCAN_DATA = {
  ip: '8.8.8.8',
  openPorts: [
    { port: 53, protocol: 'TCP', status: 'open', name: 'tcwrapped', product: '-', version: '-' },
    { port: 443, protocol: 'TCP', status: 'open', name: 'https', product: 'HTTP server (unknown)', version: '-' },
  ],
  start: 'May 29, 2025 - 18:12',
  end: 'May 29, 2025 - 18:13',
  duration: '1 minute 8 seconds',
  portList: 'Top 100 ports',
  detectOS: false,
  detectService: true,
  protocol: 'TCP',
};

export default function PortScanResultPage() {
  const [tab, setTab] = useState<'summary'|'results'|'params'>('summary');

  return (
    <div className="min-h-screen bg-[#fafbfc] flex flex-col items-center py-8 px-2 font-sans">
      {/* Header */}
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#23242e] tracking-tight">Port Scanner (Light)</h1>
          <span className="inline-flex items-center px-4 py-2 bg-[#e6f9ed] text-[#1bbf5c] rounded-full font-bold border border-[#b7f5d6] text-base">✔ Finished</span>
        </div>
        {/* Target input display */}
        <div className="bg-white border border-[#e3eafc] rounded-xl px-6 py-5 mb-4">
          <div className="text-[#7a8ca7] text-sm font-medium mb-1">Target</div>
          <div className="text-2xl font-mono font-bold text-[#1976d2]">{SCAN_DATA.ip}</div>
        </div>
        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#f3f4f6] hover:bg-[#e3eafc] border border-[#e3eafc] rounded-lg font-semibold text-[#23242e] shadow-sm"><span className="inline-block"><svg width="18" height="18" fill="none"><rect width="18" height="18" rx="4" fill="#23242e" fillOpacity=".08"/><path d="M6 9.75V12a.75.75 0 0 0 .75.75h4.5A.75.75 0 0 0 12 12V9.75M9 11.25V6.75M9 6.75l-2.25 2.25M9 6.75l2.25 2.25" stroke="#23242e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span> <span className="font-medium">Download report</span></button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-[#f3f4f6] border border-[#e3eafc] rounded-lg font-semibold text-[#1976d2] shadow-sm">+ <span className="font-medium">New scan</span></button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-[#f3f4f6] border border-[#e3eafc] rounded-lg font-semibold text-[#1976d2] shadow-sm">⟳ <span className="font-medium">Rescan</span></button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-[#fff1f0] border border-[#ffeaea] rounded-lg font-semibold text-[#ff2a2a] shadow-sm">⚠️ <span className="font-medium">Report incorrect result</span></button>
        </div>
        {/* Tabs */}
        <div className="border-b border-[#e3eafc] flex gap-2 mb-2">
          <button className={`py-3 px-6 font-bold text-base border-b-2 transition ${tab==='summary'?'border-[#1976d2] text-[#1976d2] bg-white':'border-transparent text-[#7a8ca7] bg-transparent'}`} onClick={()=>setTab('summary')}>Summary</button>
          <button className={`py-3 px-6 font-bold text-base border-b-2 transition ${tab==='results'?'border-[#1976d2] text-[#1976d2] bg-white':'border-transparent text-[#7a8ca7] bg-transparent'}`} onClick={()=>setTab('results')}>Results</button>
          <button className={`py-3 px-6 font-bold text-base border-b-2 transition ${tab==='params'?'border-[#1976d2] text-[#1976d2] bg-white':'border-transparent text-[#7a8ca7] bg-transparent'}`} onClick={()=>setTab('params')}>Scan Parameters</button>
        </div>
        {/* Tab content */}
        <div className="py-8">
          {tab==='summary' && (
            <div>
              <div className="text-xl font-extrabold text-[#23242e] mb-4 tracking-tight">Summary</div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-[#fafbfc] border border-[#e3eafc] rounded-xl p-6 flex flex-col items-center justify-center">
                  <div className="text-3xl font-extrabold text-[#1976d2]">2</div>
                  <div className="text-[#23242e] text-lg font-semibold mt-2">open ports</div>
                </div>
                <div className="bg-[#fafbfc] border border-[#e3eafc] rounded-xl p-6 flex flex-col items-center justify-center">
                  <div className="text-[#7a8ca7] text-base font-semibold mb-1">Start time</div>
                  <div className="text-lg font-mono text-[#23242e]">May 29, 2025 - 18:12</div>
                </div>
                <div className="bg-[#fafbfc] border border-[#e3eafc] rounded-xl p-6 flex flex-col items-center justify-center">
                  <div className="text-[#7a8ca7] text-base font-semibold mb-1">Finish time</div>
                  <div className="text-lg font-mono text-[#23242e]">May 29, 2025 - 18:13</div>
                </div>
                <div className="bg-[#fafbfc] border border-[#e3eafc] rounded-xl p-6 flex flex-col items-center justify-center">
                  <div className="text-[#7a8ca7] text-base font-semibold mb-1">Scan duration</div>
                  <div className="text-lg font-mono text-[#23242e]">1 minute 8 seconds</div>
                </div>
              </div>
            </div>
          )}
          {tab==='results' && (
            <div>
              <div className="text-xl font-extrabold text-[#23242e] mb-4 tracking-tight">Results</div>
              <div className="flex flex-col md:flex-row gap-8">
                {/* Host info */}
                <div className="flex-1 min-w-[220px] bg-[#fafbfc] border border-[#e3eafc] rounded-xl p-6 mb-4 md:mb-0">
                  <div className="text-lg font-bold text-[#23242e] mb-2">Host</div>
                  <div className="text-2xl font-mono font-bold mb-1 text-[#1976d2]">8.8.8.8</div>
                  <div className="flex items-center gap-2 mb-1"><span className="text-[#1976d2]">🖥️</span> <span className="text-[#5a6473] font-medium">dns.google</span></div>
                  <div className="flex items-center gap-2"><span className="text-[#7a8ca7]">❓</span> <span className="text-[#5a6473] font-medium">Unknown</span></div>
                </div>
                {/* Ports table */}
                <div className="flex-[2]">
                  <table className="w-full rounded-xl overflow-hidden border border-[#e3eafc] text-sm">
                    <thead>
                      <tr className="bg-[#f3f4f6] text-[#23242e]">
                        <th className="py-2 px-3 text-left font-semibold">Port Number</th>
                        <th className="py-2 px-3 text-left font-semibold">Protocol</th>
                        <th className="py-2 px-3 text-left font-semibold">State</th>
                        <th className="py-2 px-3 text-left font-semibold">Service</th>
                        <th className="py-2 px-3 text-left font-semibold">Product</th>
                        <th className="py-2 px-3 text-left font-semibold">Version</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-[#e3eafc]">
                        <td className="py-2 px-3 font-semibold text-[#1976d2]"><span className="inline-block w-2 h-2 rounded-full bg-[#1bbf5c] mr-2 align-middle"></span>53</td>
                        <td className="py-2 px-3 text-[#5a6473]">TCP</td>
                        <td className="py-2 px-3 text-[#1bbf5c] font-bold">open</td>
                        <td className="py-2 px-3 text-[#5a6473]">tcwrapped</td>
                        <td className="py-2 px-3 text-[#5a6473]">-</td>
                        <td className="py-2 px-3 text-[#5a6473]">-</td>
                      </tr>
                      <tr className="border-t border-[#e3eafc]">
                        <td className="py-2 px-3 font-semibold text-[#1976d2]"><span className="inline-block w-2 h-2 rounded-full bg-[#1bbf5c] mr-2 align-middle"></span>443</td>
                        <td className="py-2 px-3 text-[#5a6473]">TCP</td>
                        <td className="py-2 px-3 text-[#1bbf5c] font-bold">open</td>
                        <td className="py-2 px-3 text-[#5a6473]">https</td>
                        <td className="py-2 px-3 text-[#5a6473]">HTTP server (unknown)</td>
                        <td className="py-2 px-3 text-[#5a6473]">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          {tab==='params' && (
            <div>
              <div className="text-xl font-extrabold text-[#23242e] mb-4 tracking-tight">Scan Parameters</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#fafbfc] border border-[#e3eafc] rounded-xl p-6">
                  <div className="text-[#7a8ca7] text-base font-semibold mb-1">Host</div>
                  <div className="text-lg font-mono text-[#1976d2]">8.8.8.8</div>
                </div>
                <div className="bg-[#fafbfc] border border-[#e3eafc] rounded-xl p-6">
                  <div className="text-[#7a8ca7] text-base font-semibold mb-1">Ports</div>
                  <div className="text-lg font-mono text-[#5a6473]">Top 100 ports</div>
                </div>
                <div className="bg-[#fafbfc] border border-[#e3eafc] rounded-xl p-6">
                  <div className="text-[#7a8ca7] text-base font-semibold mb-1">Detect OS</div>
                  <div className="text-lg font-mono text-[#5a6473]">False</div>
                </div>
                <div className="bg-[#fafbfc] border border-[#e3eafc] rounded-xl p-6">
                  <div className="text-[#7a8ca7] text-base font-semibold mb-1">Detect service version</div>
                  <div className="text-lg font-mono text-[#5a6473]">True</div>
                </div>
                <div className="bg-[#fafbfc] border border-[#e3eafc] rounded-xl p-6">
                  <div className="text-[#7a8ca7] text-base font-semibold mb-1">Protocol</div>
                  <div className="text-lg font-mono text-[#5a6473]">TCP</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 