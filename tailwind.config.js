/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // primary
        softRed : 'hsl(10, 79%, 65%)',
        cyan : 'hsl(186, 34%, 60%)',

        //neutral
        darkBrown : 'hsl(25, 47%, 15%)',
        mediumBrown : 'hsl(28, 10%, 53%)',
        cream : 'hsl(27, 66%, 92%)',
        paleOrange : 'hsl(33, 100%, 98%)'
      }
    },
    screens: {      
      'xs': '350px',
      // => @media (min-width: 475px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}

