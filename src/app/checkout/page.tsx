'use client';
import { useState } from 'react';

const plans = [
  { value: 'PRO', label: 'PRO', price: 200, yearly: 2400 },
  { value: 'FREE', label: 'FREE', price: 0, yearly: 0 },
];
const features = [
  'All tools included',
  'Deep and Custom modes for all tools',
  'Advance reporting',
  'Automation capabilities',
  'Multiple workspaces',
  'Manual findings',
];
const billingCycles = [
  { value: 'yearly', label: 'Yearly' },
  { value: 'monthly', label: 'Monthly' },
];

const paymentMethods = [
  {
    key: 'card',
    label: 'Card',
    icon: (
      <svg width="40" height="28" viewBox="0 0 40 28" fill="none"><rect x="2" y="4" width="36" height="20" rx="3" fill="#555"/><rect x="2" y="10" width="36" height="2" fill="#eee"/><rect x="6" y="18" width="10" height="2" rx="1" fill="#eee"/><rect x="30" y="18" width="4" height="2" rx="1" fill="#eee"/></svg>
    ),
  },
  {
    key: 'paypal',
    label: 'PayPal',
    icon: (
      <svg width="40" height="28" viewBox="0 0 40 28" fill="none"><text x="7" y="19" fontSize="15" fontWeight="bold" fill="#003087">P</text><text x="17" y="19" fontSize="15" fontWeight="bold" fill="#009cde">PayPal</text></svg>
    ),
  },
  {
    key: 'gpay',
    label: 'G Pay',
    icon: (
      <svg width="40" height="28" viewBox="0 0 40 28" fill="none"><g><circle cx="14" cy="14" r="10" fill="#fff"/><text x="8" y="19" fontSize="13" fontWeight="bold" fill="#4285F4">G</text></g><rect x="20" y="8" width="14" height="12" rx="6" fill="#fff" stroke="#222" strokeWidth="1.5"/><text x="24" y="19" fontSize="13" fontWeight="bold" fill="#222">Pay</text></svg>
    ),
  },
  {
    key: 'amazon',
    label: 'Amazon Pay',
    icon: (
      <svg width="40" height="28" viewBox="0 0 40 28" fill="none"><text x="4" y="19" fontSize="13" fontWeight="bold" fill="#232F3E">amazon</text><text x="25" y="19" fontSize="13" fontWeight="bold" fill="#FF9900">pay</text></svg>
    ),
  },
];

export default function CheckoutPage() {
  const [plan, setPlan] = useState('PRO');
  const [billing, setBilling] = useState('yearly');
  const [selectedPayment, setSelectedPayment] = useState('card');
  const selectedPlan = plans.find(p => p.value === plan)!;
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#3a4656] to-[#6b7a8f] flex flex-col justify-center items-center py-10 px-2 font-sans">
      <h1 className="text-4xl font-extrabold text-white mb-8 w-full max-w-6xl text-left drop-shadow">Checkout</h1>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl items-start">
        {/* Left: Plan/Features/Price */}
        <div className="flex-1 bg-white/90 rounded-2xl shadow-2xl p-0 flex flex-col min-w-[340px] max-w-2xl overflow-hidden border border-[#e3eafc]">
          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[#e3eafc]">
            {/* Plan select + features */}
            <div className="flex-1 p-8 bg-[#f7fafd] flex flex-col gap-8">
              <div>
                <label className="block text-[#5c6e81] font-bold mb-2 text-lg">Selected plan:</label>
                <select value={plan} onChange={e=>setPlan(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-[#e3eafc] bg-white text-[#23242e] font-semibold text-base focus:border-[#1976d2] focus:ring-2 focus:ring-[#b3e0ff] outline-none">
                  {plans.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
                </select>
              </div>
              <div>
                <div className="font-bold text-[#5c6e81] mb-3 text-lg">Features included:</div>
                <ul className="space-y-3">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#3a4656] text-base font-medium"><span className="text-[#4da6ff] text-xl">✓</span> {f} <span className="ml-1 text-[#b3c6e0] cursor-pointer" title="More info">ⓘ</span></li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Billing + price */}
            <div className="flex-1 p-8 bg-white flex flex-col gap-8">
              <div>
                <label className="block text-[#5c6e81] font-bold mb-2 text-lg">Billing Cycle:</label>
                <select value={billing} onChange={e=>setBilling(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-[#e3eafc] bg-[#f7fafd] text-[#23242e] font-semibold text-base focus:border-[#1976d2] focus:ring-2 focus:ring-[#b3e0ff] outline-none">
                  {billingCycles.map(b => <option key={b.value} value={b.value}>{b.label}</option>)}
                </select>
              </div>
              <div>
                <div className="font-bold text-[#5c6e81] mb-2 text-lg">This will cost you:</div>
                <div className="bg-white rounded-xl px-8 py-5 text-3xl font-extrabold text-[#003366] mb-3 border border-[#e3eafc] flex items-center gap-2">${selectedPlan.price} <span className="text-base font-normal text-[#5c6e81]">/ month</span></div>
                <div className="bg-[#f7fafd] rounded-xl px-8 py-3 text-lg font-bold text-[#5c6e81] border border-[#e3eafc]">${selectedPlan.yearly} <span className="text-base font-normal">/ year</span></div>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Payment form */}
        <div className="flex-1 bg-white rounded-2xl shadow-2xl p-10 flex flex-col min-w-[340px] max-w-xl border border-[#e3eafc]">
          <div className="text-3xl font-extrabold text-[#003366] mb-2 text-center">Total: <span className="text-[#1976d2]">${selectedPlan.yearly.toLocaleString()}</span></div>
          <a href="#" className="text-[#1976d2] text-sm underline mb-4 text-center block">View Details</a>
          <form className="flex flex-col gap-4">
            <div className="flex gap-2 mb-2">
              <select className="px-3 py-2 rounded-lg border border-[#e3eafc] bg-white text-[#23242e] font-medium w-32">
                <option>🇻🇳 Vietnam</option>
                <option>🇺🇸 USA</option>
                <option>🇬🇧 UK</option>
              </select>
              <input className="flex-1 px-3 py-2 rounded-lg border border-[#e3eafc] bg-white text-[#23242e] font-medium" placeholder="Enter Coupon Code" />
            </div>
            <input className="px-3 py-2 rounded-lg border border-[#e3eafc] bg-white text-[#23242e] font-medium" placeholder="Email" />
            {/* Payment method buttons */}
            <div className="flex gap-4 mb-2">
              {paymentMethods.map(method => (
                <button
                  type="button"
                  key={method.key}
                  className={`flex-1 flex flex-col items-center justify-center gap-1 rounded-lg border bg-white py-2 transition-all focus:outline-none ${selectedPayment === method.key ? 'border-2 border-[#ff9900] shadow-[0_0_0_2px_#ff9900]' : 'border-[#e3eafc] hover:border-[#b3b3b3]'}`}
                  onClick={() => setSelectedPayment(method.key)}
                >
                  {method.icon}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <input className="flex-1 px-3 py-2 rounded-lg border border-[#e3eafc] bg-white text-[#23242e] font-medium" placeholder="First Name" />
              <input className="flex-1 px-3 py-2 rounded-lg border border-[#e3eafc] bg-white text-[#23242e] font-medium" placeholder="Last Name" />
            </div>
            <input className="px-3 py-2 rounded-lg border border-[#e3eafc] bg-white text-[#23242e] font-medium" placeholder="Company (Optional)" />
            <input className="px-3 py-2 rounded-lg border border-[#e3eafc] bg-white text-[#23242e] font-medium" placeholder="Card Number" />
            <div className="flex gap-2">
              <input className="w-1/3 px-3 py-2 rounded-lg border border-[#e3eafc] bg-white text-[#23242e] font-medium" placeholder="MM" />
              <input className="w-1/3 px-3 py-2 rounded-lg border border-[#e3eafc] bg-white text-[#23242e] font-medium" placeholder="YY" />
              <input className="w-1/3 px-3 py-2 rounded-lg border border-[#e3eafc] bg-white text-[#23242e] font-medium" placeholder="CVC" />
            </div>
            <button type="submit" className="w-full py-4 bg-[#ff9900] text-white font-bold rounded-xl shadow hover:bg-[#ffb84d] transition text-lg mt-2">Pay ${selectedPlan.yearly.toLocaleString()}</button>
          </form>
          <div className="text-xs text-gray-400 text-center mt-8">
            Sold and fulfilled by <span className="font-semibold"> <svg className='inline h-4' viewBox='0 0 100 24'><text x='0' y='18' fontSize='18' fill='#b3b3b3'>FastSpring</text></svg></span><br/>
            <a href="#" className="underline">Privacy Policy</a> | <a href="#" className="underline">Terms of Sale</a>
          </div>
        </div>
      </div>
      {/* Breadcrumb */}
      <div className="w-full max-w-5xl mx-auto mt-8 text-sm text-gray-400 flex items-center gap-2">
        <a href="/pricing" className="hover:underline">Pricing</a>
        <span>&gt;</span>
        <span className="text-gray-500">Checkout</span>
      </div>
      <div className="w-full max-w-5xl mx-auto text-xs text-gray-400 mt-2 mb-4">© 2024-Future <span className="font-bold text-[#8ecaff]">ShieldWave</span></div>
    </div>
  );
} 