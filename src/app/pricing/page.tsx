'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const plans = [
  {
    name: 'FREE',
    price: '0$',
    desc: ['Up to 5 scanned Assets', 'Up to 2 parallel scans'],
    cta: 'Sign up for Free',
    id: 'free',
  },
  {
    name: 'PRO',
    price: '200$/month',
    desc: ['Advanced features', 'Deep scanning'],
    cta: 'Sign up for Pro',
    id: 'pro',
  },
];

const features = [
  { label: 'Light scan to quickly detect exposure', free: true, pro: true },
  { label: 'Deep scan to create an attack map', free: false, pro: true },
  { label: 'Quick scan to detect misconfigurations', free: true, pro: true },
  { label: 'In-depth deep scan', free: false, pro: true },
  { label: 'Safe remote attack simulation', free: false, pro: true },
  { label: 'Automatic capture of cookies and source IP', free: false, pro: true },
  { label: 'Limit scan assets', free: 'Up to 5', pro: 'Up to 50' },
  { label: 'Parallel scanning', free: 'Up to 2', pro: 'Up to 5' },
];

export default function PricingPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const u = localStorage.getItem('sw_current_user');
      setUser(u ? JSON.parse(u) : null);
    }
  }, []);

  function handleSignup(plan: string) {
    if (user) {
      setMessage('You are already signed up!');
      setTimeout(() => setMessage(''), 2000);
    } else {
      router.push('/signup');
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#181924] to-[#23242e] text-white">
      <section className="container mx-auto flex flex-col items-center py-16 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-left w-full">Scan, Exploit, Report, Repeat</h1>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch mb-12">
          {plans.map((plan) => (
            <div key={plan.id} className="flex-1 bg-[#23242e] rounded-xl shadow-xl p-8 flex flex-col items-center border border-[#353646] min-w-[260px] max-w-xs hover:scale-105 transition-transform">
              <div className="text-lg font-bold mb-1 text-gray-200">{plan.name}</div>
              <div className="text-2xl font-extrabold mb-2 text-[#ffd600]">{plan.price}{plan.name === 'PRO' && <span className="text-base font-medium text-gray-400">/month</span>}</div>
              <ul className="mb-6 text-gray-300 text-sm space-y-1 list-disc list-inside">
                {plan.desc.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
              <button
                className="w-full py-2 bg-[#ffd600] text-black font-bold rounded-lg shadow hover:bg-[#ffe066] transition text-base mt-auto"
                onClick={() => handleSignup(plan.id)}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
        {message && <div className="text-center text-yellow-400 font-semibold mb-4 animate-pulse">{message}</div>}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-sm rounded-xl overflow-hidden bg-[#181924] border border-[#353646]">
            <thead>
              <tr className="bg-[#23242e] text-[#ffd600]">
                <th className="py-3 px-4 text-left font-semibold">Function</th>
                <th className="py-3 px-4 font-semibold">Free</th>
                <th className="py-3 px-4 font-semibold">Pro</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={f.label} className="border-t border-[#353646] hover:bg-[#23242e] transition">
                  <td className="py-2 px-4 text-gray-200">{f.label}</td>
                  <td className="py-2 px-4 text-center">
                    {f.free === true && <span className="text-green-400 font-bold">&#10003;</span>}
                    {f.free === false && <span className="text-red-500 font-bold">&#10007;</span>}
                    {typeof f.free === 'string' && <span className="text-gray-100">{f.free}</span>}
                  </td>
                  <td className="py-2 px-4 text-center">
                    {f.pro === true && <span className="text-green-400 font-bold">&#10003;</span>}
                    {f.pro === false && <span className="text-red-500 font-bold">&#10007;</span>}
                    {typeof f.pro === 'string' && <span className="text-gray-100">{f.pro}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
} 