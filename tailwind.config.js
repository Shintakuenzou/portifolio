/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#1F2937",
      },
      fontFamily: {
        lato: "Lato, sans-serif",
        Merriweather: "Merriweather,sans-serif"
      },
    },
  },
};
