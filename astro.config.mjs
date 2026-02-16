// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://rouge95.github.io",
  base: '/IT-Ops',  // <--- this ensures all built assets use the correct subpath

  vite: {
    plugins: [tailwindcss()],
  },
})