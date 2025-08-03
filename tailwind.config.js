/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    screens: {
      sm: "640px", // الشاشات الصغيرة
      md: "768px", // الشاشات المتوسطة
      lg: "1024px", // الشاشات الكبيرة
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "",
        secondary: "#307BC4",
         text_color: "#274760",
        bac_bg: "#8349DB0D",
        Paragraph:"#5f5f5f"
      },
      
    },
  },
  plugins: [],
}

