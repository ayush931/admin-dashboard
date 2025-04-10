/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2c8790",
      },
      backgroundColor: {
        primary: "#dee9e8",
      },
    },
  },
  plugins: [],
};
