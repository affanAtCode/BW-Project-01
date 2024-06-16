/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'mainBg':'	#f3e6d8',
        'DarkRaspberry':'hsl(332, 51%, 32%)',
        'DarkCharcoal':'#302d2c',
        'WengeBrown': 'hsl(30, 10%, 34%)',
        'RoseWhite':'hsl(330, 100%, 98%)',
        'LightGrey': 'hsl(30, 18%, 87%)',
        'Nutmeg': 'hsl(14, 45%, 36%)',
        'Link':'hsl(228, 45%, 44%)'
      },
      fontFamily: {
        outfit: [ "Outfit", "sans-serif" ],
        young:['"Young Serif"', "serif"],
      },
    },
  },
  plugins: [],
}

