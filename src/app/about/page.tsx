'use client';

export default function AboutPage() {
  const members = [
    { name: 'Đinh Ngọc Quý', code: 'SE170548', role: 'Leader - Executive', img: '' },
    { name: 'Nguyễn Hữu Hậu', code: 'SE170437', role: 'Security Engineer (Researcher)', img: '' },
    { name: 'Trần Huỳnh Xuân An', code: 'SE170550', role: 'Security Engineer (Pentester)', img: '' },
    { name: 'Trần Tiến Dũng', code: 'SE170535', role: 'Sales - Pr', img: '' },
    { name: 'Đào Đặng Hoàng Kim', code: 'SE171094', role: 'Designer - marketing', img: '' },
    { name: 'Phạm Đình Vinh', code: 'SE170634', role: 'Security Engineer (Pentester)', img: '' },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181924] to-[#23242e] text-white">
      {/* Team Grid */}
      <section className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {members.map((m, i) => (
            <div key={i} className="flex flex-col items-center bg-gradient-to-br from-[#23242e] to-[#23242e99] rounded-2xl shadow-xl p-6 border-2 border-[#00fff7] relative">
              {/* Avatar placeholder */}
              <div className="w-32 h-32 rounded-2xl bg-[#23242e] border-4 border-[#ffd600] flex items-center justify-center mb-4 overflow-hidden">
                {/* Thêm ảnh vào đây: <img src={m.img} ... /> */}
                <span className="text-5xl text-[#ffd600]">🖼️</span>
              </div>
              <div className="text-lg font-bold text-center leading-tight">{m.name} - {m.code}</div>
              <div className="text-base font-semibold text-center text-[#ffd600]">{m.role}</div>
            </div>
          ))}
        </div>
      </section>
      {/* Company Facts */}
      <section className="container mx-auto py-12 px-4 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 min-w-[220px] mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Company facts</h2>
          <p className="text-gray-300 mb-2">ShieldWave, headquartered in Viet Nam, makes services about offensive, cyber security utility tools and proprietary vulnerability scanner for SMEs. Peer to peer and enterprise.</p>
        </div>
        <div className="flex-[2] w-full flex flex-col md:flex-row gap-6 items-center justify-center">
          <div className="bg-[#23242e] rounded-xl border border-[#353646] p-6 flex flex-col items-center justify-center shadow-lg min-w-[180px] max-w-[220px] w-full">
            <div className="text-3xl mb-2">🛡️</div>
            <div className="font-semibold text-lg mb-1">Founded</div>
            <div className="text-gray-300">2023</div>
          </div>
          <div className="bg-[#23242e] rounded-xl border border-[#353646] p-6 flex flex-col items-center justify-center shadow-lg min-w-[180px] max-w-[220px] w-full">
            <div className="text-3xl mb-2">🌐</div>
            <div className="font-semibold text-lg mb-1">Headquarters</div>
            <div className="text-gray-300">Ho Chi Minh, Viet Nam</div>
          </div>
          <div className="bg-[#23242e] rounded-xl border border-[#353646] p-6 flex flex-col items-center justify-center shadow-lg min-w-[180px] max-w-[220px] w-full">
            <div className="text-3xl mb-2">👥</div>
            <div className="font-semibold text-lg mb-1">Team</div>
            <div className="text-gray-300 text-center">4+ specialists with backgrounds in cybersecurity, software development, business operations, and communications.</div>
          </div>
        </div>
      </section>
    </div>
  );
} 