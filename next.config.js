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
        source: "/menu/all",
        destination: "/menu",
        permanent: true,
      },
    ];
  },
};
