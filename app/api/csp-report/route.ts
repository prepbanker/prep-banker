// PATH: app/api/csp-report/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type');
    let report: any = null;

    if (contentType === 'application/csp-report') {
      const text = await request.text();
      report = JSON.parse(text);
    } else {
      report = await request.json();
    }

    console.warn('CSP Violation Report:', JSON.stringify(report, null, 2));

    return new NextResponse(null, { status: 204 });
  } catch (err: any) {
    console.error('Error parsing CSP report:', err.message);
    return NextResponse.json({ error: 'Invalid CSP report' }, { status: 400 });
  }
}

// Support OPTIONS for browser preflight checks
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
