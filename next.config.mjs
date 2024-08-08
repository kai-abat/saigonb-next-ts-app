/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://localhost:3001/:path*'
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'swmrqqjavbgslarhgyvc.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/saigon/**'
      },
      {
        protocol: 'https',
        hostname: 'swmrqqjavbgslarhgyvc.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/hero/**'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/menu',
        destination: '/menu/all',
        permanent: true
      },
      {
        source: '/admin',
        destination: '/admin/login',
        permanent: true
      }
    ];
  }
};

export default nextConfig;

// swmrqqjavbgslarhgyvc.supabase.co
