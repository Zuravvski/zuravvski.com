if (!URL.canParse(process.env.NEXT_PUBLIC_API_URL)) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables NEXT_PUBLIC_API_URL.
  `);
}

const { protocol, hostname, port } = new URL(
  process.env.NEXT_PUBLIC_API_URL
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: protocol.slice(0, -1),
        hostname,
        port,
        pathname: `/**`,
      },
    ],
  },
};

module.exports = nextConfig;
