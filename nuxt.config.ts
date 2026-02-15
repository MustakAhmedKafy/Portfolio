// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  // modules: ["@nuxtjs/tailwindcss"],
  // modules: ["@nuxtjs/tailwindcss"],
  plugins: [{ src: "~/plugins/flowbite.js", mode: "client" }],
  css: ["~/assets/main.css"],
  tailwindcss: {
    configPath: "~/tailwind.config.js", // Explicit path to your config
  },
  vite: {
    plugins: [tailwindcss()],
  },
  alias: {
    "@": resolve(__dirname, ""),
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Mustak Ahmed Kafy - Frontend Web Developer",
      meta: [
        {
          name: "description",
          content:
            "Welcome to the portfolio of Mustak Ahmed Kafy, a frontend web developer specializing in creating interactive and user-friendly websites. Explore my projects and skills.",
        },
        {
          name: "keywords",
          content:
            "Mustak Ahmed Kafy, frontend developer, web developer, portfolio, HTML, CSS, JavaScript, hire frontend developer, web designer, freelancer, freelance frontend developer, Bootstrap freelancer, Responsive web design specialist, Freelance web developer, HTML/CSS expert for hire, Front-end developer for hire, vue js developer hire, Vue.js developer seeking freelance opportunities, Pixel-perfect front-end developer, Experienced front-end coder for hire",
        },
        { name: "author", content: "Mustak Ahmed Kafy" },
        { name: "robots", content: "index, follow" },
        { name: "theme-color", content: "#6366f1" },
        // Open Graph / Facebook
        {
          property: "og:title",
          content: "Mustak Ahmed Kafy - Frontend Web Developer Portfolio",
        },
        {
          property: "og:description",
          content:
            "Welcome to the portfolio of Mustak Ahmed Kafy, a frontend web developer specializing in creating interactive and user-friendly websites. Explore my projects and skills.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://mustakkafy.vercel.app" },
        {
          property: "og:image",
          content: "https://mustakkafy.vercel.app/Mutsak.png",
        },
        { property: "og:site_name", content: "Mustak Ahmed Kafy" },
        { property: "og:locale", content: "en_US" },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:site",
          content: "@Mustak_Kafy",
        },
        {
          name: "twitter:creator",
          content: "@Mustak_Kafy",
        },
        {
          name: "twitter:title",
          content: "Mustak Ahmed Kafy - Frontend Web Developer Portfolio",
        },
        {
          name: "twitter:description",
          content:
            "Welcome to the portfolio of Mustak Ahmed Kafy, a frontend web developer specializing in creating interactive and user-friendly websites. Explore my projects and skills.",
        },
        {
          name: "twitter:image",
          content: "https://mustakkafy.vercel.app/Mutsak.png",
        },
      ],
    },
  },
});
