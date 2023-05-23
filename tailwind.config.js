/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightRed: "hsl(12,88%,59%)",
        brightRedLight: "hsl(12,88%,69%)",
        brightRedSupLight: "hsl(12,88%,95%)",
        darkBlue: "hsl(228,39%,23%)",
        darkGrayishBlue: "hsl(227,12%,61%)",
        veryDarkBlue: "hsl(223,12%,13%)",
        brightPaleRed: "hsl(13,100%,96%)",
        brightLightGray: "hsl(0,0,98%)",
        navBarColor: "#E89C92",
        orderNow: "#F3E3E3",
        orderNowText: "#231F20",
        hoursLocation: "#D55F5B",
        aboutUs: "#D55F5B",
        menuNavBar: "#E89C92",
        button1: "#F3E3E3",
        weirdPinkColor: "#B86280",
      },
    },
    backgroundImage: {
      menu: "url('/images/wave-haikei.svg')",
      landingBG: "url('/images/landingBG.jpg')",
      pageBG: "url('/images/pageBG.png')",
      orderPickup: "url('/images/orderPickup.png')",
      orderDelivery: "url('/images/orderDelivery.png')",
      logo: "url('/images/BakeBitesLogo.png')",
      clickHere: "url('/images/clickHere.png')",
      bakery: "url('/images/Bakery.png')",
      cakes: "url('/images/Cakes.png')",
      cupcakes: "url('/images/Cupcakes.png')",
      message: "url('/images/message.png')",
      cart: "url('/images/cart.png')",
      cake1: "url('/images/cake1.png')",
      cake2: "url('/images/cake2.png')",
      cake3: "url('/images/cake3.png')",
      cake4: "url('/images/cake4.png')",
      biteme: "url('/images/biteme.png')",
    },

    fontFamily: {
      poppins: ['var(--font-poppins)'],
      bebasNeue: ['var(--font-bebas-neue)'],
    },
  },
  plugins: [
    require("daisyui"),
    function({ addUtilities }) {
      const newUtilities = {
        '.text-outline': {
          textShadow: 
            '0.5px 0.5px 0 #000, -0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000',
        },
      }
      addUtilities(newUtilities)
    }
],
  daisyui: {
    styled: false,
    themes: false,
    base: false,
  },
  
};
