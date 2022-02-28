import 'dotenv/config';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const pluginConfig = { plugins: [react()] };
  const baseConfig = { ...pluginConfig };
  const baseUrl = process.env.APP_BASE_URL;

  if (mode === 'staging') {
    return {
      ...baseConfig,
      base: baseUrl,
    };
  }

  return {
    ...baseConfig,
  };
});
