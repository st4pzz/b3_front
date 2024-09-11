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
        'azul-loren': '#505F98',
        'azul-login-landing': '#111B47',
        'azul-sem-login-landing': '#091133',
        'azul-claro-landing': '#E7ECFF',
        'azul-fontes-landing': '#222F65',
        'azul-loren-2' : '#6F7CB2',
      },
    },
  },
  plugins: [],
}

