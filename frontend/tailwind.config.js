/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        serif: ['Times New Roman', 'Times', 'serif'],
        monospace: ['Lucida Console', 'Courier New', 'monospace'],
        tahoma: ['Tahoma', 'Verdana', 'sans-serif'],
        cursive: ['Brush Script MT', 'cursive'],
        fantasy: ['Copperplate', 'Papyrus', 'fantasy'],
    },
  },
  plugins: [],
}
}
