/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./"],
  theme: {

    fontSize:{
      "80":"80px",
      "64":"64px"
    },

    fontFamily:{
      'DMSans':['"DM Sans"'],
      'Playfair':['"Playfair Display"'],
    },
    extend: {
      colors:{
        black:"#141414",

        gray:{
          soft:"#F3F3F3",
          natural:"#D9D9D9",

            white: {
              button:'rgba(255, 255, 255, 0.40) 33.35%',
            },
      },

     
    },
  },
  plugins: [],
}
}
