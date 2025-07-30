import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const ua = request.headers.get("user-agent") || "";
  const isMobile = /Android|iPhone|iPad|iPod/i.test(ua);

  const url = request.nextUrl.clone();

  // Skip if already under /mobile or /desktop
  if (
    url.pathname.startsWith("/mobile") ||
    url.pathname.startsWith("/desktop")
  ) {
    return NextResponse.next();
  }

  // Rewrite to /mobile or /desktop
  url.pathname = `/${isMobile ? "mobile" : "desktop"}${url.pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    // Match all routes that don't contain:
    //  - _next
    //  - static file extensions like .jpg, .webp, .png
    //  - API routes
    "/((?!_next/|api/|.*\\.(?:jpg|jpeg|png|webp|svg|gif|ico|txt|json|xml|js|css|ttf|woff|woff2)).*)",
  ],
};
