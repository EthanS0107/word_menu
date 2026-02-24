import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Paths that require subscription
  const protectedPaths = ["/menu", "/propose"];

  // Check if current path starts with any protected path
  const isProtected = protectedPaths.some((path) => pathname.startsWith(path));

  // If path is protected
  if (isProtected) {
    if (!token) {
      // Not logged in -> Redirect to login
      return NextResponse.redirect(new URL("/auth/signin", req.url));
    }

    // Check subscription status from token
    // The token contains user info from the JWT callback
    // Users without active subscription or admin status are redirected
    if (!token.isActive && !token.isAdmin) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/menu/:path*", "/propose/:path*"],
};
