import { NextResponse } from "next/server";

const AUTH_DISABLED = true;

export async function middleware() {
  if (AUTH_DISABLED) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/menu/:path*", "/propose/:path*"],
};
