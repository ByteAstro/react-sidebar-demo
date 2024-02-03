/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cat_image': "url('./src/assets/catInAnime.png')",
      },
    },
  },
  plugins: [],
}

