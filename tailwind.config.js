/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ["var(--font-clash-display)"],
        jakarta: ["var(--font-plus-jakarta)", "clash"],
        inter: ["var(--font-Inter)"],
        poppins: ["var(--font-poppins)"],
        monsterrat: ["var(--font-monsterrat)"],
      },

      colors: {
        backgroundImage: {
          "gana-gradient": "linear-gradient(90deg, #E268BE 0%, #FDC62F 100%)",
          "gana-gradient-vertical":
            "linear-gradient(180deg, #E268BE 0%, #FDC62F 100%)",
          "gana-background":
            "linear-gradient(90deg, rgba(226, 104, 190, 1) 2%, rgba(253, 198, 47, 1) 100%)",
        },
      },
      backgroundImage: {
        "gana-gradient": "linear-gradient(90deg, #E268BE 0%, #FDC62F 100%)",
        "gana-gradient-vertical":
          "linear-gradient(180deg, #E268BE 0%, #FDC62F 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
