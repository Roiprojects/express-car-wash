/** @type {import('next').NextConfig} */
import fs from 'fs';
import path from 'path';

// Helper to safely load .env variables if not already present in process.env
function loadEnvVariables() {
  const env = { ...process.env };
  const envPath = path.resolve(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf8').split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx !== -1) {
        const key = trimmed.slice(0, eqIdx).trim();
        const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
        if (!env[key]) env[key] = val;
      }
    }
  }
  return env;
}

const env = loadEnvVariables();

// Extract allowed hosts from .env, mapping domain names to prevent host rejection
const rawHosts =
  env.ALLOWED_HOSTS ||
  'expresscarfoamwash.com,www.expresscarfoamwash.com,localhost,127.0.0.1,0.0.0.0';

const parsedHosts = rawHosts
  .split(',')
  .map((h) => h.trim())
  .filter(Boolean);

// Format origins for Next.js Server Actions and reverse proxy verification
const allowedOrigins = Array.from(
  new Set([
    ...parsedHosts,
    ...parsedHosts.map((h) => `http://${h}`),
    ...parsedHosts.map((h) => `https://${h}`),
  ])
);

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.openai.com',
      },
      {
        protocol: 'https',
        hostname: 'expresscarfoamwash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.expresscarfoamwash.com',
      },
    ],
  },
  experimental: {
    cpus: 1,
    workerThreads: false,
    serverActions: {
      allowedOrigins,
    },
  },
};

export default nextConfig;
