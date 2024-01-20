import {
  StatePlugin,
  PartPlugin,
} from "tailwindcss-plugin-custom-elements"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    StatePlugin(),
    PartPlugin()
  ],
}

