/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      animation: {
        flip: 'flip is cubic-bezier(0, 0, 0.2, 1) infinite'
      },
      keyframes:{
        flip: {
          'from': { transform:'rotateX(0deg)', transformOrigin: '50% bottom ',},
          'to':{transform:  'rotateX(180deg)', transformOrigin: '50% bottom ',}
        }
      },
      backgroundImage: {
        "aa-1": "url('/a1.png')",
        "aa-2": "url('/a2.png')"
      },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
}
