/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('https://www.esaspaceshop.com/pub/media/wysiwyg/slider/Banner_ESS_ESA_X_LOQI_1.webp')",
      },
      backgroundColor: {
        "esa-blue": "#003247",
      },
      textColor: {
        "esa-blue": "#003247",
      },
      borderColor: {
        "esa-blue": "#003247",
      },
    },
  },
  plugins: [],
};
