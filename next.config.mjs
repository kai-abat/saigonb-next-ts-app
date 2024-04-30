/** @type {import('next').NextConfig} */
const nextConfig = {
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
