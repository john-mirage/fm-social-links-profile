/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

const pxToRem = (px) => {
  if (typeof px === "number") {
    return `${String(px / 16)}rem`;
  }
  throw new Error("The pixels value must be a number");
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "sm": "432px",
      "hover-device": { "raw": "(hover: hover)" },
    },
    colors: {
      "transparent": "transparent",
      "black": "#141414",
      "dark-grey": "#1F1F1F",
      "grey": "#333333",
      "white": "#FFFFFF",
      "neon-green": "#C4F82A",
    },
    spacing: {
      "0": "0px",
      "1": pxToRem(1),
      "4": pxToRem(4),
      "12": pxToRem(12),
      "14": pxToRem(14),
      "16": pxToRem(16),
      "21": pxToRem(21),
      "24": pxToRem(24),
      "36": pxToRem(36),
      "40": pxToRem(40),
      "48": pxToRem(48),
      "88": pxToRem(88),
    },
    fontSize: ({ theme }) => ({
      "heading": [theme("spacing[24]"), {
        lineHeight: theme("spacing[36]"),
        letterSpacing: "0",
        fontWeight: "600",
      }],
      "body-bold": [theme("spacing[14]"), {
        lineHeight: theme("spacing[21]"),
        letterSpacing: "0",
        fontWeight: "700",
      }],
      "body-regular": [theme("spacing[14]"), {
        lineHeight: theme("spacing[21]"),
        letterSpacing: "0",
        fontWeight: "400",
      }],
    }),
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

