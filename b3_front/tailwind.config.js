/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'azul-b3': '#002C63',
        'azul-b3-claro': '#194172',
        'cinza-b3': '#00000040',
        'amarelo-b3': '#FFE8A1',
        'azul-form' : '#001B74',
        'amarelo-landing': '#F5AA1E',
      },
    },
  },
  plugins: [],
}

