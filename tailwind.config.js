/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layout/**/*.{html,js,ejs}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: ["winter", "dark", "garden"],
  },
}
