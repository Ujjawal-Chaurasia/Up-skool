import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  // site: 'https://astronaut.github.io',
  // base: '/my-repo',
  output: "static",
  integrations: [tailwind(), react()],
  adapter: node({
    mode: "standalone"
  })
});