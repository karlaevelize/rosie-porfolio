/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      beige: "#EEE2DE",
      blue: {
        50: "#f3f4fb",
        100: "#e4e7f5",
        200: "#cfd5ee",
        300: "#adb8e3",
        400: "#8695d4",
        500: "#6974c8",
        600: "#565bba",
        700: "#4b4baa",
        800: "#44428b",
        900: "#39396f",
        950: "#2b2a4c",
      },
      gray: {
        50: "#f5f5f6",
        100: "#e6e6e7",
        200: "#d0d0d1",
        300: "#aeaeb2",
        400: "#86878a",
        500: "#6b6c6f",
        600: "#5b5b5f",
        700: "#4e4e50",
        800: "#444446",
        900: "#3c3c3d",
        950: "#262527",
      },
      orange: {
        50: "#fdf4ef",
        100: "#fae5da",
        200: "#f4c8b4",
        300: "#ea906c",
        400: "#e57352",
        500: "#df5130",
        600: "#d13925",
        700: "#ad2a21",
        800: "#8a2522",
        900: "#70211e",
        950: "#3c0e0e",
      },
      red: {
        50: "#fff1f1",
        100: "#ffe0e0",
        200: "#ffc7c7",
        300: "#ffa1a0",
        400: "#ff6b6a",
        500: "#f83c3b",
        600: "#e61d1c",
        700: "#b31312",
        800: "#a01514",
        900: "#841918",
        950: "#480707",
      },
    },
  },
  plugins: [],
};
