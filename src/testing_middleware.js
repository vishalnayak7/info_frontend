// middleware.ts (root of project)
import { NextResponse } from 'next/server';

export async function middleware(request) {

  console.log('Middleware is running'); 
  const token = window.localStorage.getItem('PruthatekINFO_token')

  const semiProtected = ['/login', '/register'];

  const pathname = request.nextUrl.pathname;
  
  if (semiProtected.includes(pathname) && !token) {
    NextResponse.next();
  } else if (semiProtected.includes(pathname) && token) {
    // check token expirey 
    const decoded = jwt.decode(token);
    
    if (!decoded) {
      console.log('Token is invalid');
    }

    const currentTime = Math.floor(Date.now() / 1000); // in seconds

    if (decoded.exp && decoded.exp < currentTime) {
      console.log('Token is expired');
      NextResponse.next();

    } else {

      console.log('Token is valid');
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }

  }
   
}

// Optional: apply only to certain routes
// export const config = {
//   matcher: ['/dashboard', '/profile'],
// };

/* 
if i am not logged in then i can able to see login page and register page and Not dashboard page
if i am  logged in then i can able to see dashboard page But not login and register page 

*/