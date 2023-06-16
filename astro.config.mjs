import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import svelte from "@astrojs/svelte";
// import vercel from '@astrojs/vercel/edge';



// https://astro.build/config
export default defineConfig({
  site: "https://legalease.nz",
  integrations: [
    tailwind(), 
    image({
      serviceEntryPoint: "@astrojs/image/sharp"
    }), 
    mdx(), 
    sitemap(), 
    svelte()],
  output: "server",
  adapter: vercel()
});