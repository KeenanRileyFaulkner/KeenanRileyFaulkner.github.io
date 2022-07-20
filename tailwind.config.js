/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "profilePic": "url('/src/images/Profile Pic 2022.jpg')",
      }
    },

    screens: {
      'sm': '400px',
      'md': '561px',
      'lg': '718px',
      'xl': '1603px',
      '2xl': '1674px',
    }
  },
  plugins: [],
}
