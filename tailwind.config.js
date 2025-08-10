/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625rem",
        },
      },

      keyframes: {
        dropdown: {
          "0%": {
            opacity: "0",
            transform: "translateX(-50%) translateY(10px)",
          },
          "100%": { opacity: "1", transform: "translateX(-50%) translateY(0)" },
        },
      },
      animation: {
        dropdown: "dropdown 0.25s ease-out forwards",
      },

      backgroundColor: {
        "line-span": "#E0E0E2",
        "bg-border": "#d1d1d1",
        "bg-webBlue": "#007bff",
        "bg-webOr": "#ff6f00",
        "bg-roots": "#edf2f5",
        "bg-input": "#f2f3f5",
        "bg-btn-basket": "#3ed1a44",
        "bg-blue-sky" : "#3b82f6"
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
