/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/*"],
  theme: {
    extend: {},
  },
  plugins: [],
}

// npx tailwindcss -i ./static/src/style/input.css -o ./static/src/style/output.css --watch