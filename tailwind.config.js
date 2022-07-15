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
  },
  plugins: [],
}
