/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		outputStandalone: true,
	},
	eslint: { ignoreDuringBuilds: true },
};

module.exports = nextConfig;
