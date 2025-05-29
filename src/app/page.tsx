import Image from "next/image";
import CyberpunkDashboardAnimation from "../components/CyberpunkDashboardAnimation";
import VulnerabilityScanningAnimation from "../components/VulnerabilityScanningAnimation";
import ExploitationAnimation from "../components/ExploitationAnimation";
import Shield3DAnimation from "../components/Shield3DAnimation";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#181924] to-[#23242e] text-white">
      {/* Hero Section */}
      <section className="container mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-4 gap-8">
        {/* Left: Text */}
        <div className="flex-1 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Get a hacker's perspective on your <span className="text-[#f7c873]">web apps, network, and cloud</span>
          </h1>
          <p className="mb-6 text-lg text-gray-300">
            Pentest-Tools.com helps security teams run the key steps of a penetration test, easily and without expert hacking skills.
          </p>
          <ul className="mb-8 space-y-2 text-base text-gray-200">
            <li>✔️ Automatically map the attack surface</li>
            <li>✔️ Scan for the latest critical vulnerabilities</li>
            <li>✔️ Exploit to assess the business risk</li>
            <li>✔️ Write pentest reports 50% faster</li>
          </ul>
          <div className="flex gap-4">
            <a href="#" className="px-6 py-3 bg-[#ffd600] text-black font-semibold rounded hover:bg-[#ffe066] transition">Pentest now for free</a>
            <a href="#" className="px-6 py-3 border border-white/30 rounded font-semibold hover:bg-white/10 transition">Book a live demo</a>
          </div>
        </div>
        {/* Right: Hero Animation */}
        <div className="flex-1 flex justify-center items-center">
          <Shield3DAnimation />
        </div>
      </section>

      {/* Trusted by logos */}
      <section className="container mx-auto py-8 px-4">
        <div className="flex flex-col items-center">
          <span className="uppercase text-xs text-gray-400 tracking-widest mb-4">Trusted by 2,000+ security teams in 119+ countries</span>
          <div className="flex flex-wrap justify-center gap-8 grayscale opacity-80">
            <Image src="/logo-vodafone.png" alt="Vodafone" width={80} height={32} />
            <Image src="/logo-starbucks.png" alt="Starbucks" width={80} height={32} />
            <Image src="/logo-orange.png" alt="Orange" width={80} height={32} />
            <Image src="/logo-generali.png" alt="Generali" width={80} height={32} />
            <Image src="/logo-rolex.png" alt="Rolex" width={80} height={32} />
            <Image src="/logo-accenture.png" alt="Accenture" width={80} height={32} />
          </div>
        </div>
      </section>

      {/* What you can do section */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">What you can do with ShieldWave</h2>
        <p className="text-gray-300 max-w-2xl mb-12">
          Built by a team of experienced penetration testers, ShieldWave is a web-based platform that speeds-up the common steps performed in almost every assessment: reconnaissance, vulnerability scanning, exploitation, and report writing. Using the 20+ built-in tools, you get quick insights into targets' weaknesses so you know where to dig deeper, pop shells, and have fun.
        </p>
        <div className="flex flex-col gap-12">
          {/* Card 1: Attack Surface Mapping + Animation */}
          <div className="flex flex-col md:flex-row items-center bg-[#23242e] rounded-xl border border-[#353646] p-8 shadow-lg overflow-hidden animate-fade-in-up">
            <div className="w-full md:w-[380px] flex-shrink-0 flex items-center justify-center mb-6 md:mb-0 md:mr-8">
              <CyberpunkDashboardAnimation />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">Attack Surface Mapping</h3>
              <ul className="text-gray-300 text-sm space-y-1 mb-2">
                <li>• Discover subdomains, open ports, running services</li>
                <li>• Map web technologies, detect WAFs, hidden files</li>
                <li>• Popular tools: Subdomain Finder, Port Scanner, URL Fuzzer</li>
              </ul>
              <a href="#" className="inline-block mt-2 text-[#ffd600] font-medium hover:underline transition">Explore recon tools →</a>
            </div>
          </div>
          {/* Card 2: Vulnerability Scanning */}
          <div className="flex flex-col md:flex-row items-center bg-[#23242e] rounded-xl border border-[#353646] p-8 shadow-lg overflow-hidden animate-fade-in-up">
            <div className="w-full md:w-[380px] flex-shrink-0 flex items-center justify-center mb-6 md:mb-0 md:mr-8">
              <VulnerabilityScanningAnimation />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">Vulnerability Scanning</h3>
              <ul className="text-gray-300 text-sm space-y-1 mb-2">
                <li>• Web & network vulnerability scanning</li>
                <li>• Detect XSS, SQLi, OS Command Injection, CVEs</li>
                <li>• Dedicated scanners for APIs, CMSs, infrastructure</li>
              </ul>
              <a href="#" className="inline-block mt-2 text-[#ffd600] font-medium hover:underline transition">Explore vulnerability scanners →</a>
            </div>
          </div>
          {/* Card 3: Exploitation */}
          <div className="flex flex-col md:flex-row items-center bg-[#23242e] rounded-xl border border-[#353646] p-8 shadow-lg overflow-hidden animate-fade-in-up">
            <div className="w-full md:w-[380px] flex-shrink-0 flex items-center justify-center mb-6 md:mb-0 md:mr-8">
              <ExploitationAnimation />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">Exploitation</h3>
              <ul className="text-gray-300 text-sm space-y-1 mb-2">
                <li>• Exploit critical CVEs, gain access, extract evidence</li>
                <li>• Exploit web vulnerabilities: SQLi, XSS, etc.</li>
                <li>• Auto Exploiter, strong proof-of-concepts</li>
              </ul>
              <a href="#" className="inline-block mt-2 text-[#ffd600] font-medium hover:underline transition">Discover exploit tools →</a>
            </div>
          </div>
          {/* Card 4: Reporting */}
          <div className="bg-[#23242e] rounded-xl border border-[#353646] p-8 shadow-lg overflow-hidden animate-fade-in-up">
            <h3 className="text-xl font-semibold mb-2">Writing Pentest Reports</h3>
            <ul className="text-gray-300 text-sm space-y-1 mb-2">
              <li>• Generate editable Word (.docx) reports 50% faster</li>
              <li>• Predefined templates, reusable findings</li>
              <li>• Export: PDF, DOCX, HTML, CSV, XLSX</li>
            </ul>
            <a href="#" className="inline-block mt-2 text-[#ffd600] font-medium hover:underline transition">Learn about reporting →</a>
          </div>
          {/* Card 5: Continuous Security Monitoring */}
          <div className="bg-[#23242e] rounded-xl border border-[#353646] p-8 shadow-lg overflow-hidden animate-fade-in-up">
            <h3 className="text-xl font-semibold mb-2">Continuous Security Monitoring</h3>
            <ul className="text-gray-300 text-sm space-y-1 mb-2">
              <li>• Schedule periodic scans, get notified on issues</li>
              <li>• Send reports to Email, Slack, Webhooks</li>
              <li>• Custom conditions, automation</li>
            </ul>
            <a href="#" className="inline-block mt-2 text-[#ffd600] font-medium hover:underline transition">Discover monitoring →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
