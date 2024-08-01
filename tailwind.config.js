/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff6347", // Tomato color for a vibrant look
        secondary: {
          100: "#fff7f0", // Light peach for backgrounds
          200: "#ffdab9", // Peach for highlights
          300: "#ff8c00", // Dark orange for accents
        },
        accent: "#ffc107", // Amber for buttons and call to action
        neutral: {
          100: "#f5f5f5", // Light grey for backgrounds
          200: "#e0e0e0", // Grey for borders and dividers
          300: "#9e9e9e", // Dark grey for text
        },
      },
      fontFamily: {
        primary: ["Nunito", "sans-serif"], // Using a modern sans-serif font
        secondary: ["Roboto", "sans-serif"], // Adding another option
      },
    },
  },
  plugins: [],
}
