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
      },
      fontSize: {
        'clamp-xl': "clamp(1.5rem, 8vw, 4.5rem)",
        'clamp-lg': "clamp(1.45rem, 8vw, 2.25rem)",
        'clamp-sm': "clamp(1.25rem, 5vw, 2.25rem)"
      }
    },
  },
  plugins: [],
}

