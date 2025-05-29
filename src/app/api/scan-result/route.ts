import { NextRequest, NextResponse } from 'next/server';

const globalAny = global as any;
if (!globalAny._scanResults) globalAny._scanResults = {};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const scanId = searchParams.get('scanId');
  if (!scanId) return NextResponse.json({ error: 'Missing scanId' }, { status: 400 });
  const result = globalAny._scanResults[scanId];
  if (!result) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(result);
} 