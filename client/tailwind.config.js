import flowbite from "flowbite-react/tailwind";
import tailwindScrollbar from 'tailwind-scrollbar';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [ flowbite.plugin(),flowbite,tailwindScrollbar,require('daisyui'),],
}
