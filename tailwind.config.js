/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,css,jsx}"],
  theme: {
    extend: {
      backgroundImage:{
        bgHeader:"url('/media/wave2.svg'), url('/media/wave1.svg'), linear-gradient(rgb(0,0,0),rgba(255, 255, 255, 0)), url('/media/header.jpg')",
        bg1: "linear-gradient(0deg, rgba(29,29,29,0.8323704481792717) 25%, rgba(0,0,0,0.2049194677871149) 51%, rgba(43,43,43,0.8463760504201681) 75%), url('/media/1.png')",
        bg2: "linear-gradient(0deg, rgba(29,29,29,0.8323704481792717) 25%, rgba(0,0,0,0.2049194677871149) 51%, rgba(43,43,43,0.8463760504201681) 75%), url('/media/2.png')",
        bg3: "linear-gradient(0deg, rgba(29,29,29,0.8323704481792717) 25%, rgba(0,0,0,0.2049194677871149) 51%, rgba(43,43,43,0.8463760504201681) 75%), url('/media/3.png')",
        bg4: "linear-gradient(0deg, rgba(29,29,29,0.8323704481792717) 25%, rgba(0,0,0,0.2049194677871149) 51%, rgba(43,43,43,0.8463760504201681) 75%), url('/media/4.png')",
      },
      backgroundPosition:{
        bgHeader: "0px 104%, bottom, top"
      },
      colors:{
        primary: "#1566C0"
      }
    },
  },
  plugins: [],
}

