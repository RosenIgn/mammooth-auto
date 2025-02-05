/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bone-white': '#E0E1DD',
        'main-white': '#E9EAE5',
        'main-blue': '#1B67C9',
        'light-blue': '#E9F0FA',
        'dark-blue': '#172152',
        'wrong-red': '#ff3333',
      },
      fontFamily: {
        'main': ['Poppins', 'sans-serif'],
      }
    },
  },
};
