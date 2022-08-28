/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      dropShadow: {
        'custom': '0 20px 13px rgba(245, 56, 56, 0.35)',
      }
    },
  },
  plugins: [],
}
