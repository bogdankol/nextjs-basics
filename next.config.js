
const func1 = async (data) => {
    let one = true
    await console.log({data})
    if(one) {
        one=false
        return '/users/9'
    }
    // return one && '/qwerty' === data ? '/users/10' : '/users/9'
}

const securityHeaders = [
    {
      key: 'X-Frame-Options',
      value: 'SAMEORIGIN'
    },
    {
      key: 'X-DNS-Prefetch-Control',
      value: 'on'
    },
    {
      key: 'Strict-Transport-Security',
      value: 'max-age=31536000; includeSubDomains; preload'
    },
    {
      key: 'Permissions-Policy',
      value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
    },
    {
      key: 'Referrer-Policy',
      value: 'same-origin'
    },
    {
        key: 'X-XSS-Protection',
        value: '1; mode=block'
    },
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
      }
  ]

// суть - мы будем проверять все маршруты и сравнивать их со списком правильных маршрутов - 
//  если ок и маршрут есть - оно редиректнет на этот же маршрут, если нету - на другой

// проблема - надо таймер который бы ограничивал кол-во переадресаций в секунду

module.exports = {
    // async redirects() {
    //     return [
    //         {
    //             source: '/:qwerty',
    //             destination: await func1(),
    //             permanent: false
    //         },
    //         // {
    //         //     source: '/errorPage',
    //         //     destination: '/users/1',
    //         //     permanent: false
    //         // }
    //     ]
    // },
    async headers() {
        return [
          {
            // Apply these headers to all routes in your application.
            source: '/:path*',
            headers: securityHeaders,
          },
        ]
      },
}