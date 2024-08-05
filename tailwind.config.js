/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        pastelBlue: '#a4c4e4',
        lightBlue: '#8bb0d4',
        darkBlue: '#7a9fc0',
        pastelPink: '#f8d7da',
        pastelGreen: '#d4edda',
        pastelYellow: '#fff3cd',
        'teal-500': '#38B2AC',
        'teal-600': '#319795',
        'blue-600': '#3182CE',
      },
      boxShadow: {
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'lg': '0.5rem',
      },
    },
  },
  plugins: [],
}
