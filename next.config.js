module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "swmrqqjavbgslarhgyvc.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/saigon/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/menu",
        destination: "/menu/all",
        permanent: true,
      },
      {
        source: "/admin",
        destination: "/admin/login",
        permanent: true,
      },
    ];
  },
};
