/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        textBlockHeight: "25rem",
      },
      width: {
        textBlockWidth: "40rem",
      },
    },
  },
  plugins: [],
}
