/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF1DE",
        surf: "#9FD3E9",
        sky: "#BEE7F3",
        sand: "#F7D59B",
        sunset: "#FF8A3D",
        coral: "#EF6C57",
        forest: "#0F766E",
        ink: "#1F2937",
        ruby: "#C0152A"
      },
      fontFamily: { display: ["'Shrikhand'", "cursive"], body: ["Inter", "system-ui", "sans-serif"] },
      boxShadow: { dpd: "0 10px 25px rgba(0,0,0,0.12)" },
      borderRadius: { '2xl': '1rem' }
    },
  },
  plugins: [],
};
