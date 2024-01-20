import {TailwindCssPluginPart} from "./exports/index.js"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    TailwindCssPluginPart()
  ],
}

