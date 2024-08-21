/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'stone-700': '#44403c',
        'slate-400': '#94a3b8',
        'sky-200': '#bae6fd',
        'zinc-700': '#3f3f46',
        'sky-950': '#082f49',
        'gray-dark-1':'#343d46',
        'gray-dark-2':'#4f5b66',
        'gray-dark-3':'#65737e',
        'gray-dark-4':'#a7adba',
        'gray-dark-5':'#c0c5ce'

      },
      fontFamily: {
        wixDisplay: ['Wix Madefor Display', 'sans - serif'],
        wixText:['Wix Madefor Display'],
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }
};
