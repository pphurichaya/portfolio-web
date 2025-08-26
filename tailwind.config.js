/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Sora: [`var(--font-sora)`, `sans-serif`],
        reenie: ['"Reenie Beanie"', 'sans-serif'],
      },
      colors: {
        "muted-foreground": "var(--muted-foreground)", 
        "foreground":"var(--foreground)",
        "primary":"var(--primary)", 
        "primary-foreground":"var(--primary-foreground)", 
      },
    },
  },
  plugins: [],
}