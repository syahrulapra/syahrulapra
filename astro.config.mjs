import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "http://portfolio.syahrulap.my.id/",
  integrations: [react(), tailwind()],
});
