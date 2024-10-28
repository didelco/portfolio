/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        myLight: {
          primary: "#3cc2da",
          secondary: "#19e89f",
          accent: "#a950cf",
          neutral: "#101010",
          "neutral-content": "#101010",
          "base-100": "#fefefe",
          info: "#3CC2DA",
          success: "#19e89f",
          warning: "#FBBD23",
          error: "#fa0067",
        },
      },
      {
        myDark: {
          primary: "#3cc2da",
          secondary: "#19e89f",
          accent: "#a950cf",
          neutral: "#fefefe",
          "neutral-content": "#fefefe",
          "base-100": "#101010",
          info: "#3CC2DA",
          success: "#19e89f",
          warning: "#FBBD23",
          error: "#fa0067",
        },
      },
    ],
  },
};
