/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: 0,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1305px',
      },
    },
    extend: {
      colors: {
        primary: "#F9B200",
        secondary: "#E1E4EA"
      },
      fontSize: {
        "3.25xl": "2rem"
      }
    },
  },
  plugins: [],
}
