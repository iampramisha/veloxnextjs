const { NextConfig } = require('next');

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "images.pexels.com"
            }
        ]
    }
};

module.exports = nextConfig;
