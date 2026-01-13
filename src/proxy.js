// src/proxy.js
import { NextResponse } from 'next/server'

export default function proxy(request) {
  const isLoggedIn = request.cookies.get('isLoggedIn')?.value;
  const { pathname } = request.nextUrl;

  if (!isLoggedIn && pathname.startsWith('/products')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (isLoggedIn && pathname === '/login') {
    return NextResponse.redirect(new URL('/products', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/products/:path*','/add-product/:path*', '/login'],
};