import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bright-blue': 'hsl(220, 98%, 61%)',
        'check-background': 'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))',

        // Neutral
        'very-light-gray': 'hsl(0, 0%, 98%)',
        'very-light-grayish-blue': 'hsl(236, 33%, 92%)',
        'light-grayish-blue': 'hsl(233, 11%, 84%)',
        'dark-grayish-blue': 'hsl(236, 9%, 61%)',
        'very-dark-grayish-blue': 'hsl(235, 19%, 35%)',

        // Light Theme
        'light-theme-very-light-gray': 'hsl(0, 0%, 98%)',
        'light-theme-very-light-grayish-blue': 'hsl(236, 33%, 92%)',
        'light-theme-light-grayish-blue': 'hsl(233, 11%, 84%)',
        'light-theme-dark-grayish-blue': 'hsl(236, 9%, 61%)',
        'light-theme-very-dark-grayish-blue': 'hsl(235, 19%, 35%)',

        // Dark Theme
        'dark-theme-very-dark-blue': 'hsl(235, 21%, 11%)',
        'dark-theme-very-dark-desaturated-blue': 'hsl(235, 24%, 19%)',
        'dark-theme-light-grayish-blue': 'hsl(234, 39%, 85%)',
        'dark-theme-light-grayish-blue-hover': 'hsl(236, 33%, 92%)',
        'dark-theme-dark-grayish-blue': 'hsl(234, 11%, 52%)',
        'dark-theme-very-dark-grayish-blue-1': 'hsl(233, 14%, 35%)',
        'dark-theme-very-dark-grayish-blue-2': 'hsl(237, 14%, 26%)'
      },
    },
  },
  plugins: [],
};
export default config;
