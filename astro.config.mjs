import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
// import node from "@astrojs/node";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https:/Ujjawal-Chaurasia/.github.io",
  base: "/Up-skool",
  output: "server",
  integrations: [tailwind(), react()],
  adapter: netlify({
    edgeMiddleware: true,
  }),
});
