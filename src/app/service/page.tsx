'use client';

const CERTS = [
  { src: '/cert-oscp.png', alt: 'OSCP' },
  { src: '/cert-google-cyber.png', alt: 'Google Cybersecurity' },
  { src: '/cert-ceh.png', alt: 'CEH' },
  { src: '/cert-google-it.png', alt: 'Google IT Support' },
  { src: '/cert-netfund.png', alt: 'NetFund' },
  { src: '/cert-cissp.png', alt: 'CISSP' },
];

export default function ServicePage() {
  return (
    <div className="min-h-screen w-full font-sans bg-gradient-to-br from-[#181924] to-[#23242e] text-white">
      {/* Hero */}
      <section className="container mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-4 gap-8">
        {/* Left: Text */}
        <div className="flex-1 max-w-xl flex flex-col justify-center md:items-start items-center text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-white drop-shadow text-left w-full">
            <span className="block">Web Application</span>
            <span className="block text-[#8ecaff]">Penetration Testing</span>
          </h1>
          <p className="mb-6 text-base md:text-lg text-gray-200 max-w-lg text-left w-full">
            See how your web application fares against realistic attacks. We find exploitable vulnerabilities and provide practical recommendations on how to fix them.
          </p>
          <ul className="mb-8 space-y-2 text-base text-gray-100 text-left w-full">
            <li className="flex items-center gap-2"><span className="text-[#1bbf5c] text-lg">✓</span> Rigorous manual testing tools can't replicate</li>
            <li className="flex items-center gap-2"><span className="text-[#1bbf5c] text-lg">✓</span> Real attack simulation based on app logic know-how</li>
            <li className="flex items-center gap-2"><span className="text-[#1bbf5c] text-lg">✓</span> Security checks from multiple users' perspectives</li>
            <li className="flex items-center gap-2"><span className="text-[#1bbf5c] text-lg">✓</span> Only findings validated through exploitation</li>
          </ul>
          <button className="px-6 py-3 bg-[#ffd600] text-[#23242e] font-bold rounded shadow hover:bg-[#ffe066] transition text-base self-start">Request a web penetration test</button>
        </div>
        {/* Right: Globe cyber SVG */}
        <div className="flex-1 flex items-end justify-end w-full h-[320px] md:h-auto md:pr-4 z-0 mt-8 md:mt-0">
          <svg viewBox="0 0 400 400" className="w-[260px] h-[260px] md:w-[400px] md:h-[400px]">
            <defs>
              <radialGradient id="glow" cx="70%" cy="70%" r="40%">
                <stop offset="0%" stopColor="#ffb3b3" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ff2a2a" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            <g>
              <ellipse cx="200" cy="200" rx="140" ry="140" fill="none" stroke="#8ecaff" strokeWidth="2.5" opacity="0.18" />
              <ellipse cx="200" cy="200" rx="100" ry="140" fill="none" stroke="#8ecaff" strokeWidth="1.5" opacity="0.13" />
              <ellipse cx="200" cy="200" rx="140" ry="100" fill="none" stroke="#8ecaff" strokeWidth="1.5" opacity="0.13" />
              <ellipse cx="200" cy="200" rx="60" ry="60" fill="none" stroke="#8ecaff" strokeWidth="1.5" opacity="0.10" />
              {/* Radar target */}
              <circle cx="300" cy="300" r="40" fill="url(#glow)" />
              <circle cx="300" cy="300" r="20" fill="#ff2a2a" opacity="0.18" />
              <circle cx="300" cy="300" r="8" fill="#ff2a2a" opacity="0.7" />
            </g>
          </svg>
        </div>
      </section>
      {/* Certifications */}
      <section className="bg-white w-full py-10 px-4">
        <div className="container mx-auto flex flex-col items-center">
          <div className="text-center text-[#23242e] text-base font-semibold mb-8 tracking-wide">We are certified to provide quality consulting services to you.</div>
          <div className="flex flex-wrap gap-6 items-center justify-center w-full max-w-4xl mx-auto">
            {CERTS.map((c, i) => (
              <div key={i} className="flex items-center justify-center h-20 w-32 md:w-40">
                <img src={c.src} alt={c.alt} className="h-16 object-contain mx-auto" style={{maxWidth: 120}} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Section: What is web application penetration testing? */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-white text-left w-full">What is web application penetration testing?</h2>
        <div className="ml-4 md:ml-16">
          <p className="text-gray-300 mb-8 text-left max-w-2xl">
            A web app penetration test is a type of security assessment that uses manual techniques to explore and test the target website for vulnerabilities like Cross-Site Scripting, SQL injection, Remote Code Execution, Broken Authentication and more. Unlike code reviews or static security tests, this type of assessment examines the target application in its live environment by simulating real attacks that cybercriminals carry out.
          </p>
          {/* Cloud keywords */}
          <div className="relative w-full flex items-center justify-center h-48 md:h-56 mb-8">
            <span className="absolute left-[30%] top-4 text-2xl md:text-3xl font-bold bg-white text-black px-2 py-1 rounded shadow-lg rotate-[-12deg] opacity-70 blur-sm">http-headers</span>
            <span className="absolute left-[45%] top-0 text-lg font-semibold bg-white text-black px-2 py-1 rounded shadow-lg rotate-[6deg] opacity-70 blur-sm">deserialization</span>
            <span className="absolute left-[60%] top-8 text-base font-semibold bg-white text-black px-2 py-1 rounded shadow-lg rotate-[-4deg] opacity-70 blur-sm">information-leakage security-policy</span>
            <span className="absolute left-[20%] top-16 text-base font-semibold bg-white text-black px-2 py-1 rounded shadow-lg rotate-[2deg] opacity-70 blur-sm">https restapi</span>
            <span className="absolute left-[40%] top-20 text-base font-semibold bg-white text-black px-2 py-1 rounded shadow-lg rotate-[-5deg] opacity-70 blur-sm">remote code-execution</span>
            <span className="absolute left-[60%] top-24 text-base font-semibold bg-white text-black px-2 py-1 rounded shadow-lg rotate-[8deg] opacity-70 blur-sm">IDOR</span>
            <span className="absolute left-[25%] top-28 text-base font-semibold bg-white text-black px-2 py-1 rounded shadow-lg rotate-[-7deg] opacity-70 blur-sm">broken authentication</span>
            <span className="absolute left-[50%] top-32 text-base font-semibold bg-white text-black px-2 py-1 rounded shadow-lg rotate-[5deg] opacity-70 blur-sm">CSP</span>
            <span className="absolute left-[35%] top-36 text-base font-semibold bg-white text-black px-2 py-1 rounded shadow-lg rotate-[-8deg] opacity-70 blur-sm">clear-text</span>
            <span className="absolute left-[70%] top-36 text-base font-semibold bg-white text-black px-2 py-1 rounded shadow-lg rotate-[8deg] opacity-70 blur-sm">remote</span>
            <span className="absolute left-[15%] top-40 text-base font-semibold bg-white text-black px-2 py-1 rounded shadow-lg rotate-[-7deg] opacity-70 blur-sm">log4shell</span>
            <span className="absolute left-[30%] top-44 text-base font-semibold bg-white text-black px-2 py-1 rounded shadow-lg rotate-[6deg] opacity-70 blur-sm">owasp</span>
            <span className="absolute left-[55%] top-44 text-base font-semibold bg-white text-black px-2 py-1 rounded shadow-lg rotate-[-5deg] opacity-70 blur-sm">xss</span>
            <span className="absolute left-[75%] top-40 text-base font-semibold bg-white text-black px-2 py-1 rounded shadow-lg rotate-[7deg] opacity-70 blur-sm">authentication</span>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl font-extrabold bg-white text-black px-4 py-2 rounded shadow-xl z-10 border-2 border-black">SQL injection</span>
          </div>
        </div>
      </section>
      {/* Section: Pricing */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-2 text-white text-left w-full">How much does it cost?</h2>
        <div className="ml-4 md:ml-16">
          <p className="text-gray-300 max-w-2xl mb-8 text-left w-full text-base">
            We price our service based on how complex the target application is and on what type of penetration test you want (black box or white box).
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center mx-auto">
          {/* SMB card */}
          <div className="flex-1 bg-white rounded-2xl shadow-xl p-8 flex flex-col items-start border border-[#e3eafc] min-w-[320px] max-w-xl">
            <div className="text-xl font-extrabold text-[#003366] mb-4 w-full">SMB<br/>web app pentest</div>
            <div className="w-full bg-[#f3f7fd] rounded-lg py-5 text-center text-lg font-semibold text-[#003366] mb-6">
              <div className="text-base font-medium mb-1">Fixed price:</div>
              <span className="text-3xl font-extrabold">$2000</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-6">
              <div className="flex flex-col items-start bg-white border border-[#e3eafc] rounded-xl px-4 py-3 shadow-sm">
                <span className="text-[#ff6a00] text-2xl mb-1">⏱️</span>
                <div className="text-sm font-bold text-[#003366] mb-1">Expected timeframe</div>
                <div className="text-xs text-[#00bfff] font-semibold uppercase">3 working days (best effort)</div>
              </div>
              <div className="flex flex-col items-start bg-white border border-[#e3eafc] rounded-xl px-4 py-3 shadow-sm">
                <span className="text-[#ff6a00] text-2xl mb-1">📧</span>
                <div className="text-sm font-bold text-[#003366] mb-1">Report delivered</div>
                <div className="text-xs text-[#00bfff] font-semibold uppercase">On the 4th day</div>
              </div>
              <div className="flex flex-col items-start bg-white border border-[#e3eafc] rounded-xl px-4 py-3 shadow-sm">
                <span className="text-[#ff6a00] text-2xl mb-1">👤</span>
                <div className="text-sm font-bold text-[#003366] mb-1">Simulated scenario</div>
                <div className="text-xs text-[#00bfff] font-semibold uppercase">Anonymous attacker</div>
              </div>
            </div>
            <button className="w-full py-3 bg-[#00e6fb] text-[#003366] font-bold rounded-xl shadow hover:bg-[#00bfff] transition text-base mt-auto">Request a penetration test</button>
          </div>
          {/* Enterprise card */}
          <div className="flex-1 bg-white rounded-2xl shadow-xl p-8 flex flex-col items-start border border-[#e3eafc] min-w-[320px] max-w-xl">
            <div className="text-xl font-extrabold text-[#003366] mb-4 w-full">Enterprise<br/>web app pentest</div>
            <div className="w-full bg-[#f3f7fd] rounded-lg py-5 text-center text-lg font-semibold text-[#003366] mb-6">
              <div className="text-base font-medium mb-1">Starting from:</div>
              <span className="text-3xl font-extrabold">$3000</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-6">
              <div className="flex flex-col items-start bg-white border border-[#e3eafc] rounded-xl px-4 py-3 shadow-sm">
                <span className="text-[#ff6a00] text-2xl mb-1">⏱️</span>
                <div className="text-sm font-bold text-[#003366] mb-1">Expected timeframe</div>
                <div className="text-xs text-[#00bfff] font-semibold uppercase">4+ working days (best effort)</div>
              </div>
              <div className="flex flex-col items-start bg-white border border-[#e3eafc] rounded-xl px-4 py-3 shadow-sm">
                <span className="text-[#ff6a00] text-2xl mb-1">📧</span>
                <div className="text-sm font-bold text-[#003366] mb-1">Report delivered</div>
                <div className="text-xs text-[#00bfff] font-semibold uppercase">When ready</div>
              </div>
              <div className="flex flex-col items-start bg-white border border-[#e3eafc] rounded-xl px-4 py-3 shadow-sm">
                <span className="text-[#ff6a00] text-2xl mb-1">👥</span>
                <div className="text-sm font-bold text-[#003366] mb-1">Simulated scenario</div>
                <div className="text-xs text-[#00bfff] font-semibold uppercase">Both anonymous & authenticated user</div>
              </div>
            </div>
            <button className="w-full py-3 bg-[#00e6fb] text-[#003366] font-bold rounded-xl shadow hover:bg-[#00bfff] transition text-base mt-auto">Request a penetration test</button>
          </div>
        </div>
      </section>
    </div>
  );
} 