'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [form, setForm] = useState({ first: '', last: '', email: '', subject: '', message: '', agree: false });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const contactRef = useRef<HTMLFormElement>(null);

  function handleChange(e: any) {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  }
  function handleSubmit(e: any) {
    e.preventDefault();
    setError('');
    if (!form.first || !form.last || !form.email || !form.subject || !form.message || !form.agree) {
      setError('Please fill all fields and agree to communication.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181924] to-[#23242e] text-white">
      {/* Hero Section */}
      <section className="container mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-4 gap-8">
        <div className="flex-1 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">We'd love to hear from you</h1>
          <p className="mb-6 text-lg text-gray-300">Whether you're curious about our security tools and features, have technical, support issues, or any feedback for us – we're here to help you get an answer! We are here for you!</p>
          <button className="px-6 py-3 bg-[#ffd600] text-black font-semibold rounded hover:bg-[#ffe066] transition shadow mb-4" onClick={() => contactRef.current?.scrollIntoView({behavior: 'smooth'})}>Drop us a line</button>
        </div>
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <motion.div
            className="relative w-[220px] h-[220px] md:w-[300px] md:h-[300px]"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
          >
            <svg width="100%" height="100%" viewBox="0 0 300 300">
              <defs>
                <radialGradient id="radial" cx="50%" cy="50%" r="80%">
                  <stop offset="0%" stopColor="#00fff7cc" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#00fff700" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="150" cy="150" r="140" fill="url(#radial)" />
              <circle cx="150" cy="150" r="100" fill="#23242e" stroke="#00fff7" strokeWidth="4" opacity="0.18" />
              <circle cx="150" cy="150" r="60" fill="#23242e" stroke="#ffd600" strokeWidth="3" opacity="0.25" />
              <circle cx="150" cy="150" r="30" fill="#23242e" stroke="#00fff7" strokeWidth="2" opacity="0.5" />
              {/* User icon */}
              <circle cx="150" cy="120" r="38" fill="#1e293b" stroke="#00fff7" strokeWidth="3" />
              <circle cx="150" cy="120" r="24" fill="#23242e" stroke="#ffd600" strokeWidth="2" />
              <ellipse cx="150" cy="180" rx="38" ry="28" fill="#1e293b" stroke="#00fff7" strokeWidth="3" />
              {/* Checkmark */}
              <circle cx="210" cy="210" r="28" fill="#23242e" stroke="#ffd600" strokeWidth="3" />
              <polyline points="200,210 210,220 225,200" fill="none" stroke="#ffd600" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </motion.div>
      </section>
      {/* Contact Form Section */}
      <section className="container mx-auto grid md:grid-cols-2 gap-12 py-8 px-4">
        <form ref={contactRef} className="bg-[#23242e] rounded-2xl shadow-xl p-8 flex flex-col gap-4 border border-[#353646]" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <div className="flex gap-3">
            <input name="first" value={form.first} onChange={handleChange} placeholder="First Name" className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:border-[#ffd600] focus:ring-2 focus:ring-[#ffd600]/30 outline-none bg-gray-900 text-gray-100" />
            <input name="last" value={form.last} onChange={handleChange} placeholder="Last Name" className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:border-[#ffd600] focus:ring-2 focus:ring-[#ffd600]/30 outline-none bg-gray-900 text-gray-100" />
          </div>
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" className="px-4 py-2 rounded-lg border border-gray-200 focus:border-[#ffd600] focus:ring-2 focus:ring-[#ffd600]/30 outline-none bg-gray-900 text-gray-100" />
          <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" className="px-4 py-2 rounded-lg border border-gray-200 focus:border-[#ffd600] focus:ring-2 focus:ring-[#ffd600]/30 outline-none bg-gray-900 text-gray-100" />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" rows={4} className="px-4 py-2 rounded-lg border border-gray-200 focus:border-[#ffd600] focus:ring-2 focus:ring-[#ffd600]/30 outline-none bg-gray-900 text-gray-100" />
          <label className="flex items-center gap-2 text-xs text-gray-400">
            <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} className="rounded border-gray-300 focus:ring-[#ffd600]" />
            I accept Customer Service Communication from ShieldWave.
          </label>
          {error && <div className="text-red-500 text-sm font-medium">{error}</div>}
          {submitted && <div className="text-green-400 text-sm font-medium">Thank you! We received your message.</div>}
          <button type="submit" className="w-full py-2 mt-2 bg-[#ffd600] text-black font-bold rounded-lg shadow hover:bg-[#ffe066] transition text-base flex items-center justify-center gap-2">
            Submit your message <span className="ml-1">→</span>
          </button>
          <div className="text-xs text-gray-500 mt-2">By clicking submit, you consent to allow ShieldWave to store and process the personal information submitted above to provide you with the content requested.</div>
        </form>
        <div className="flex flex-col gap-6 justify-center">
          <div className="text-gray-300 text-sm">
            Get in touch and send us your requests, feedback, suggestions, complaints, or anything else you want to share with us. Leave your email address and expect a reply from us soon!<br /><br />
            Our Support team is available Monday through Friday between 10:00 AM and 6:00 PM GMT+2.<br /><br />
            You can submit a support request here:
          </div>
          <div className="flex flex-col gap-2 text-gray-200 text-sm">
            <div className="flex items-center gap-2"><span className="text-[#ffd600]">📍</span> 48 Bd. Iuliu Maniu, Bucharest, Romania, European Union</div>
            <div className="flex items-center gap-2"><span className="text-[#ffd600]">🏢</span> VAT Number: RO29302931</div>
            <div className="flex items-center gap-2"><span className="text-[#ffd600]">🕒</span> Monday to Friday: 10:00 am – 6:00 pm</div>
            <div className="flex items-center gap-2"><span className="text-[#ffd600]">💼</span> <a href="#" className="underline hover:text-[#ffd600]">View all job openings</a></div>
          </div>
        </div>
      </section>
      {/* Support Section */}
      <section className="container mx-auto py-16 px-4 flex flex-col items-start justify-center text-left">
        <motion.div
          className="mb-6 flex flex-col items-start justify-center text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-2">Support</h2>
          <p className="text-gray-300 max-w-2xl mb-4">Whether you're curious about our security tools and features, have technical, support issues, or any feedback for us – we're here to help you get an answer!</p>
          <button className="px-6 py-3 bg-[#23242e] text-[#ffd600] font-semibold rounded hover:bg-[#353646] border border-[#353646] transition shadow">Get in touch</button>
        </motion.div>
        <motion.div
          className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] flex items-start justify-start"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          animate={{ scale: [1, 1.1, 1], filter: [
            'drop-shadow(0 0 24px #00fff7cc) drop-shadow(0 0 8px #ffd600)',
            'drop-shadow(0 0 40px #ffd600cc) drop-shadow(0 0 16px #00fff7)',
            'drop-shadow(0 0 24px #00fff7cc) drop-shadow(0 0 8px #ffd600)'
          ] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg width="100%" height="100%" viewBox="0 0 180 180">
            <defs>
              <radialGradient id="heartglow" cx="50%" cy="50%" r="80%">
                <stop offset="0%" stopColor="#ffd600cc" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#00fff700" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="heartstroke" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffd600" />
                <stop offset="100%" stopColor="#00fff7" />
              </linearGradient>
            </defs>
            <circle cx="90" cy="90" r="80" fill="url(#heartglow)" />
            <path d="M90 140s-40-24-40-56c0-18 14-32 32-32 10 0 18 6 22 14 4-8 12-14 22-14 18 0 32 14 32 32 0 32-40 56-40 56z" fill="#23242e" stroke="url(#heartstroke)" strokeWidth="5" />
            <path d="M90 140s-40-24-40-56c0-18 14-32 32-32 10 0 18 6 22 14 4-8 12-14 22-14 18 0 32 14 32 32 0 32-40 56-40 56z" fill="none" stroke="#ffd600" strokeWidth="2" opacity="0.5" />
          </svg>
        </motion.div>
      </section>
    </div>
  );
} 