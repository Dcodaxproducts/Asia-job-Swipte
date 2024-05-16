import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "3rem",
      screens: {
        "2xl": "1400px",
      },
    },
    
    extend: {
      spacing: {
        'mobcontainer': '2rem',
      },
      colors: {
        blue: '#0772FF', 
        darkGrey: '#202A4F', 
        lightgrey: '#2C3863', 
        darkBlue: '#060E29', 
        offWhite: '#B6B6B6', 
        offWhiteLight: '#D2D2D2', 
        lightPink: '#F3F1FF', 
        paragraphBlue: '#3D589B', 
        inputGrey: '#9199A3', 
        newGrey:"#B7C3D2",
        lightWhite:"#FAFAFA",
        blackish:"#18191C",
        darktext:"#5E6670",
     
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        // Keyframes for animations
      },
      animation: {
        // Animation configurations
      },
      fontFamily: {
        'custom': ['YourFontName', 'sans-serif'], // Ensure the font name matches your @font-face
      },
      fontWeight: {
        'thin': '100',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Make sure the plugin is installed
};

export default config;
