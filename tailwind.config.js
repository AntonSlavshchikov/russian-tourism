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
        'error-img': "linear-gradient(180deg,rgba(36,39,48,.8) 4.34%,rgba(36,39,48,.2) 95.07%),url('@/assets/media/error/error404.jpg')",
      }),
      colors: {
        'blur': 'hsla(0,0%,100%,.1)',
        'border-color' : '#a1a2a4',
        'button' : '#3ee9b3',
        'button-hover': '#bc5942',
        '404':'hsla(0,0%,100%,.4)'
      },
      fontFamily: {
        'gotham': 'Gotham Pro',
        'gotham-sans': 'GothamPro,sans-serif'
      },
      fontSize: {
        '38': '38px',
        '40': '40px',
        '50': '50px',
        '140': '140px',
        '180': '180px',
        '270': '270px',
      },
      lineHeight: {
        '140':'140px',
        '180':'180px',
        '220':'220px'
      },
      gridTemplateColumns: {
        'search':'1fr 1fr 1fr 70px'
      },
      spacing: {
        '60': '60px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
