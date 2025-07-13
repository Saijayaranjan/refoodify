import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  // Temporarily disable middleware to debug auth issues
  // Let the client-side handle all authentication
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*']
}
