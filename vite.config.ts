import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import "dotenv/config";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const pluginConfig = { plugins: [react()] };
  const baseConfig = { ...pluginConfig };
  const baseUrl = process.env.APP_BASE_URL;

  if (mode === "staging") {
    return {
      ...baseConfig,
      base: baseUrl,
    };
  }

  return {
    ...baseConfig,
  };
});
