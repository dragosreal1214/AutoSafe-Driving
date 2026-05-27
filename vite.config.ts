import { defineConfig } from "vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import viteReact from "@vitejs/plugin-react";

const isBuild = process.env.NODE_ENV === "production";

export default defineConfig({
  resolve: {
    dedupe: [
      "react",
      "react-dom",
      "@tanstack/react-router",
      "@tanstack/react-start",
      "@tanstack/react-query",
    ],
  },
  server: {
    host: true,
    port: 5173,
    strictPort: false,
  },
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
    }),
    viteReact(),
    ...(isBuild ? [cloudflare()] : []),
  ],
});
