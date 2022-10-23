/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        comfort: ['Comfortaa', 'cursive'],
        code: ['Source Code Pro', 'monospace'],
      },
    },
  },
  plugins: [import('@tailwindcss/typography')],
};
