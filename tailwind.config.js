/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { 
    extend: {
      fontFamily: {
        zentry: ['Zentury', 'sans-serif'],
        general: ['General Sans', 'sans-serif'],
        'circular-web': ['Circular Web', 'sans-serif'],
        'robert-medium': ['Robert Medium', 'sans-serif'],
        'robert-regular': ['Robert Regular', 'sans-serif'],
      }
      colors: {
        blue:{
          50: '#DFDFF0',
          75: '#BDFDFF2',
          100:'#FOF2FA',
          200:'#010101',
          300: '#4FB7DD',
        },
        violet:{
          300: '#5724FF',
        },
        yellow:{
          100:'#8E983F',
          300:'#EDFF66',
        }
      }


    }
  },
  plugins: [],
}
