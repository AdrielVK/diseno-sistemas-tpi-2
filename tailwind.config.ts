import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#112D4E",
        lgblue: "#3F72AF",
        gray: "#DBE2EF",
        white: "#F9F7F7"
      },
    },
  },
  plugins: [],
} satisfies Config;
