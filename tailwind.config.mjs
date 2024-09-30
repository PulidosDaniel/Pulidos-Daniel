import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xs: "560px",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#FF9F00",
        primaryDark: "#CC7E00",
        secondary: "#DA011B",
        background: "#FFFFFF",
        accent: "#002147",
        ebony: "#2d2d2f",
        lightGray: "#bebfc5",
      },
      backgroundImage: {
        pattern: "url('./src/images/pattern.svg')",
      },
    },
  },
  plugins: [],
};
