/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-blue': '#64ffda',
        'lightest-slate': '#ccd6f6',
        'lowest-slate': '#8892b0'
      },
      fontFamily: {
        'font-mono': ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace']
      }
    },
  },
  plugins: [],
}

