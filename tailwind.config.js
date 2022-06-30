module.exports = {
  content: [
    "./layouts/*.vue",
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'sm': '800px',
        // => @media (min-width: 640px) { ... }
  
        'md': '1024px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1440px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1920px',
        // => @media (min-width: 1280px) { ... }
      },
      backgroundImage: theme => ({
        'intro-img': "url('@/assets/media/intro/background.jpg')",
      }),
      colors: {
        'blur': 'hsla(0,0%,100%,.1)',
        'border-color' : '#a1a2a4',
        'button' : '#3ee9b3'
      },
      fontFamily: {
        'gotham': 'Gotham Pro'
      },
      gridTemplateColumns: {
        'search':'1fr 1fr 1fr 70px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
