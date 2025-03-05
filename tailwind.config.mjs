/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'card': "url('/assets/cardimg.png')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "thr":"#333333",
        "for":"#4F4F4F",
        "blueish":"#473939",
        "yellow":"#41532e",
        // "yellow":"#FDCF09",
        // "red":"#DE1F26",
        "blue":"#2B345B",
        "brown":"#855B60",


      },
    },
  },
  plugins: [],
};
