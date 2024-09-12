/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#191B1F",
        darkBlack: "#363C43",
        textColor: "#A3ADB2",
        button: "#4A4E54",
        font: "#969696",
      },
    },
  },
  plugins: [],
};
