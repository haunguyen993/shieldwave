import { NextRequest, NextResponse } from 'next/server';

const globalAny = global as any;
if (!globalAny._scanResults) globalAny._scanResults = {};

export async function POST(req: NextRequest) {
  const { target, type } = await req.json();
  // Giả lập scan, tạo scanId và kết quả mẫu
  const scanId = Math.random().toString(36).slice(2, 10);
  const openPorts = [
    { port: 22, status: 'open', name: 'ssh', service: 'OpenSSH 8.2' },
    { port: 80, status: 'open', name: 'http', service: 'nginx 1.18' },
    { port: 443, status: 'open', name: 'https', service: 'nginx 1.18' },
    { port: 3306, status: 'closed', name: 'mysql', service: '' },
    { port: 8080, status: 'open', name: 'http-alt', service: 'Apache Tomcat' },
  ];
  globalAny._scanResults[scanId] = {
    ip: target,
    host: target,
    openPorts,
    type,
    created: Date.now(),
  };
  await new Promise(r => setTimeout(r, 1200));
  return NextResponse.json({ scanId });
} 