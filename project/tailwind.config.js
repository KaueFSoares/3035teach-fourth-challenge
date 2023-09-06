/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#05478A",
        "light-blue": "#0070E0",
        "orange": "#FC8621",
        "gray": "#BDBDBD",
      },
      screens: {
        xsm: "380px",
      },
    },
  },
  plugins: [],
}
