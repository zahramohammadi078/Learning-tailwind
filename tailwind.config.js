/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./allhtml/*.html"],
  theme: {
    extend: {
      colors:{
        "primery":{
          100:"#F7418F",
          200:"#FC819E"
        }
      }
    },

    container:{
      "center":true,
    }
  },
  plugins: [],
}

