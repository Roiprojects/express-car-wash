// vite.config.js - Configuration for Vite servers & preview proxies
// Allowed hosts and port are managed strictly via environment variables (.env)

import fs from 'fs';
import path from 'path';

// Helper to read .env synchronously without external dependencies
function loadEnvFile() {
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

const env = loadEnvFile();

// Extract port strictly from .env (fallback 3000)
const port = parseInt(env.PORT || '3000', 10);
const host = env.HOST || '0.0.0.0';

// Configured allowed hosts to prevent "Blocked request. This host is not allowed" errors
const envHosts = env.ALLOWED_HOSTS
  ? env.ALLOWED_HOSTS.split(',').map((h) => h.trim()).filter(Boolean)
  : [];

const defaultHosts = [
  'expresscarfoamwash.com',
  '.expresscarfoamwash.com',
  'www.expresscarfoamwash.com',
  'localhost',
  '127.0.0.1',
  '0.0.0.0',
];

const allowedHosts = Array.from(new Set([...defaultHosts, ...envHosts]));
const allowAll =
  env.ALLOWED_HOSTS === '*' ||
  env.ALLOWED_HOSTS === 'all' ||
  env.ALLOWED_HOSTS === 'true';

/** @type {import('vite').UserConfig} */
export default {
  server: {
    port,
    host,
    // Allows expresscarfoamwash.com and custom domain names from .env
    allowedHosts: allowAll ? true : allowedHosts,
  },
  preview: {
    port,
    host,
    allowedHosts: allowAll ? true : allowedHosts,
  },
};
