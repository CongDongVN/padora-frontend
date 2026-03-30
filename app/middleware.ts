// // middleware.ts
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   // 1. Lấy token hoặc role từ Cookie (Bạn nên lưu role vào cookie khi login thành công)
//   const token = request.cookies.get('token')?.value;
//   const userRole = request.cookies.get('userRole')?.value;

//   const { pathname } = request.nextUrl;

//   // 2. Kiểm tra nếu người dùng truy cập vào các trang /admin
//   if (pathname.startsWith('/admin')) {
//     // Nếu không có token hoặc role không phải Admin
//     if (!token || userRole !== 'Admin') {
//       // Chuyển hướng về trang login hoặc trang 403 (Không có quyền)
//       return NextResponse.redirect(new URL('/login', request.url));
//     }
//   }

//   return NextResponse.next();
// }

// // Chỉ chạy middleware cho các route trong admin
// export const config = {
//   matcher: ['/admin/:path*'],
// };