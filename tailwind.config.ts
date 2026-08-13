import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // aapki baaki theme colors/settings
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // <-- YE YAHAN AAYEGA
  ],
};

export default config;