/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js}',
    './src/**/*.{html,js,mdx}',
    './src/**/*.{html,js,mdx,ts,tsx}',
    './src/**/*.{html,js,mdx,ts,tsx,css}',
    './src/**/*.{html,js,mdx,ts,tsx,css,scss,json}',
    // Usado para renderizar dangerouslySetInnerHTML em componentes
    // Não é recomendado remover, pois pode quebrar a renderização de componentes
    './utility/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#ffffff',
      'foreground': '#616161'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}