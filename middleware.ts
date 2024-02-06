import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export default async function middleware(
  req: NextRequest,
  event: NextFetchEvent
) {
  const token = await getToken({ req });
  const isAuthenticated = !!token;

  if (req.nextUrl.pathname.startsWith("/api/auth/signin") && isAuthenticated) {
    return NextResponse.redirect(new URL("/panel", req.url));
  } else if (req.nextUrl.pathname.startsWith("/panel") && !isAuthenticated) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }
}

export const config = {
  matcher: ["/panel/:id*", "/api/auth/signin"],
};
