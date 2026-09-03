import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const BYPASS_COOKIE = "exito_preview";

export function proxy(request: NextRequest) {
  if (process.env.MAINTENANCE_MODE !== "true") {
    return NextResponse.next();
  }

  const secret = process.env.MAINTENANCE_BYPASS_SECRET;
  const { searchParams } = request.nextUrl;
  const previewParam = searchParams.get("preview");

  if (secret && previewParam === secret) {
    const url = request.nextUrl.clone();
    url.searchParams.delete("preview");
    const response = NextResponse.redirect(url);
    response.cookies.set(BYPASS_COOKIE, secret, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });
    return response;
  }

  const hasBypass = Boolean(secret) && request.cookies.get(BYPASS_COOKIE)?.value === secret;
  if (hasBypass) {
    return NextResponse.next();
  }

  return NextResponse.rewrite(new URL("/em-breve", request.url));
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|api|em-breve|opengraph-image|.*\\..*).*)",
  ],
};
