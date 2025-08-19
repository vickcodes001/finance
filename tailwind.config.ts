import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}", // ensures all TSX/JSX files scanned
  ],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ['"DM Sans"', "sans-serif"],  // font name exactly as Google Fonts
      },
      colors: {
        cardStyling: 'rgb(32,31,36)',
      }
    },
  },
  plugins: [],
};

export default config;
