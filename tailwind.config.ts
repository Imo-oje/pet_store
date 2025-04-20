// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontSize: {
        // Headings
        h1: ["46px", { lineHeight: "60px" }],
        h2: ["36px", { lineHeight: "54px" }],
        h3: ["28px", { lineHeight: "38px" }],
        h4: ["24px", { lineHeight: "36px" }],
        // Text sizes
        "20": ["20px", { lineHeight: "28px" }],
        "16": ["16px", { lineHeight: "24px" }],
        "14": ["14px", { lineHeight: "20px" }],
        "12": ["12px", { lineHeight: "18px" }],
        "10": ["10px", { lineHeight: "16px" }],
        "8": ["8px", { lineHeight: "12px" }],
      },
      fontWeight: {
        "400": "400",
        "500": "500",
        "600": "600",
        "700": "700",
      },
    },
  },
  plugins: [],
};

export default config;
