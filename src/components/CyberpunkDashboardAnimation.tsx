'use client';
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function CyberpunkDashboardAnimation() {
  return (
    <div className="relative w-full h-[340px] md:h-[400px] bg-gradient-to-br from-[#181924] to-[#23242e] overflow-visible rounded-xl flex items-center">
      {/* Vertical glowing line and red pulse */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 flex flex-col items-center z-10">
        <motion.div
          className="w-16 h-16"
          initial={{ scale: 0.7, opacity: 0.7 }}
          animate={{ scale: [0.7, 1.1, 0.7], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <svg width="64" height="64">
            <circle cx="32" cy="32" r="18" fill="#ff2a2a22" />
            <circle cx="32" cy="32" r="28" stroke="#ff2a2a" strokeWidth="2" fill="none" opacity="0.5" />
            <circle cx="32" cy="32" r="8" fill="#ff2a2a" filter="url(#glow)" />
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>
        </motion.div>
        <div className="w-1 h-[220px] bg-gradient-to-b from-[#ff2a2a] via-[#ff2a2a44] to-transparent" />
      </div>
      {/* Radar and labels */}
      <svg viewBox="0 0 340 340" className="absolute left-0 top-0 w-[340px] h-[340px] z-0">
        {/* Radar rings */}
        <circle cx="170" cy="170" r="110" stroke="#00fff7" strokeWidth="1.5" fill="none" opacity="0.18" />
        <circle cx="170" cy="170" r="75" stroke="#00fff7" strokeWidth="1.2" fill="none" opacity="0.13" />
        <circle cx="170" cy="170" r="40" stroke="#00fff7" strokeWidth="1" fill="none" opacity="0.10" />
        {/* Radar sweep */}
        <motion.path
          d="M170,170 L170,60 A110,110 0 0,1 280,170 Z"
          fill="url(#radarSweep)"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          style={{ transformOrigin: "170px 170px" }}
        />
        <defs>
          <radialGradient id="radarSweep" cx="50%" cy="50%" r="80%">
            <stop offset="0%" stopColor="#00fff7cc" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00fff700" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Dotted lines to labels */}
        <line x1="170" y1="170" x2="60" y2="80" stroke="#ff2a2a" strokeDasharray="4 4" strokeWidth="1.5" />
        <line x1="170" y1="170" x2="270" y2="70" stroke="#00ff99" strokeDasharray="4 4" strokeWidth="1.5" />
        <line x1="170" y1="170" x2="70" y2="220" stroke="#ffe066" strokeDasharray="4 4" strokeWidth="1.5" />
        {/* Radar center */}
        <circle cx="170" cy="170" r="6" fill="#00fff7" filter="url(#glow)" />
        {/* WordPress label */}
        <rect x="90" y="120" rx="12" width="70" height="28" fill="#23242e" stroke="#fff" strokeWidth="1.2" />
        <text x="125" y="140" fill="#fff" fontSize="14" fontFamily="monospace" textAnchor="middle">WordPress</text>
        {/* Apache label */}
        <rect x="120" y="210" rx="10" width="60" height="24" fill="#23242e" stroke="#fff" strokeWidth="1" />
        <text x="150" y="227" fill="#fff" fontSize="13" fontFamily="monospace" textAnchor="middle">Apache</text>
        {/* 22/tcp label */}
        <rect x="30" y="200" rx="8" width="54" height="22" fill="#181924" stroke="#ffe066" strokeWidth="1.2" />
        <text x="57" y="215" fill="#ffe066" fontSize="13" fontFamily="monospace" textAnchor="middle">22/tcp</text>
        {/* 8443/tcp label */}
        <rect x="270" y="50" rx="8" width="60" height="22" fill="#181924" stroke="#00ff99" strokeWidth="1.2" />
        <text x="300" y="65" fill="#00ff99" fontSize="13" fontFamily="monospace" textAnchor="middle">8443/tcp</text>
        {/* old.target.com label */}
        <rect x="10" y="60" rx="8" width="100" height="26" fill="#181924" stroke="#ff2a2a" strokeWidth="1.2" />
        <text x="60" y="78" fill="#ff2a2a" fontSize="13" fontFamily="monospace" textAnchor="middle">old.target.com</text>
      </svg>
    </div>
  );
} 