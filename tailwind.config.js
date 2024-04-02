/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./src/routes/*.{lazy.tsx, tsx}",
    "./src/**/*.{js,ts,jsx,tsx,lazy.tsx}",
    "./index.html",
    "./dist/assets/*.{js, jsx,ts, tsx}",
    "./dist/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
