/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F65F2E",
        accent: "#c82791",
        lightest: "#EFEAE4",
        light: "#F7E8D8",
        midtone: "#7FC3BF",
        dark: "#0B2240",
        text: "#333",
        page: "#F0EDE4",
      },
      fontFamily: {
        display: ["Roboto", "Helvetica", "Arial", "sans-serif"],
        body: ["Outfit", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
