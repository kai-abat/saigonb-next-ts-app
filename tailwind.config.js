/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              50: "#fef3c7",
              100: "#fde68a",
              200: "#fcd34d",
              300: "#fbbf24",
              400: "#f59e0b",
              500: "#d97706",
              600: "#b45309",
              700: "#92400e",
              800: "#78350f",
              900: "#451a03",
              DEFAULT: "#fbbf24",
            },
            secondary: {
              50: "#F1E8F7",
              100: "#E0CEEE",
              200: "#C3A0DF",
              300: "#A46ECE",
              400: "#853FBA",
              500: "#622F8A",
              600: "#4F266E",
              700: "#3C1C54",
              800: "#291339",
              900: "#13091B",
              DEFAULT: "#622F8A",
            },
            // ... rest of the colors
          },
        },
        dark: {
          colors: {
            primary: {
              900: "#fef3c7",
              800: "#fde68a",
              700: "#fcd34d",
              600: "#fbbf24",
              500: "#f59e0b",
              400: "#d97706",
              300: "#b45309",
              200: "#92400e",
              100: "#78350f",
              50: "#451a03",
              DEFAULT: "#d97706",
            },
            secondary: {
              900: "#F1E8F7",
              800: "#E0CEEE",
              700: "#C3A0DF",
              600: "#A46ECE",
              500: "#853FBA",
              400: "#622F8A",
              300: "#4F266E",
              200: "#3C1C54",
              100: "#291339",
              50: "#13091B",
              DEFAULT: "#622F8A",
            },
          },
          // ... rest of the colors
        },
      },
    }),
  ],
};
