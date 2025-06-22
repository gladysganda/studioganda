import { NextResponse } from 'next/server'

export function middleware(request) {
  const auth = request.headers.get('authorization')
  const basicAuth = 'Basic ' + Buffer.from('studioganda:GandaStudio88!').toString('base64')

  if (auth === basicAuth) {
    return NextResponse.next()
  }

  return new Response('Unauthorized', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  })
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
