/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'apple_green': {
          DEFAULT: '#a3bf42',
          100: '#21260d',
          200: '#414c1a',
          300: '#627227',
          400: '#829834',
          500: '#a3bf42',
          600: '#b5cb67',
          700: '#c8d88d',
          800: '#dae5b3',
          900: '#edf2d9'
        },
        'ultra_violet': {
          DEFAULT: '#5f5ea3',
          100: '#131320',
          200: '#262541',
          300: '#393861',
          400: '#4b4a82',
          500: '#5f5ea3',
          600: '#7e7db5',
          700: '#9f9ec7',
          800: '#bfbeda',
          900: '#dfdfec'
        },
        'tea_green': {
          DEFAULT: '#ccdb94',
          100: '#2f3712',
          200: '#5e6e25',
          300: '#8da537',
          400: '#b2c95d',
          500: '#ccdb94',
          600: '#d6e2a9',
          700: '#e0eabf',
          800: '#ebf1d4',
          900: '#f5f8ea'
        },
        'fire_brick': {
          DEFAULT: '#b33424',
          100: '#240a07',
          200: '#48150e',
          300: '#6b1f15',
          400: '#8f2a1c',
          500: '#b33424',
          600: '#d84c39',
          700: '#e2796b',
          800: '#eba59c',
          900: '#f5d2ce'
        },
        'amber': {
          DEFAULT: '#f2b705',
          100: '#302401',
          200: '#604802',
          300: '#906d03',
          400: '#c09104',
          500: '#f2b705',
          600: '#fbc82f',
          700: '#fcd663',
          800: '#fde397',
          900: '#fef1cb'
        },
        'picton_blue': {
          DEFAULT: '#5bb8e3',
          100: '#092836',
          200: '#12506c',
          300: '#1c78a2',
          400: '#259fd8',
          500: '#5bb8e3',
          600: '#7ac6e9',
          700: '#9cd4ee',
          800: '#bde2f4',
          900: '#def1f9'
        },
        'white': {
          DEFAULT: '#ffffff',
          100: '#333333',
          200: '#666666',
          300: '#999999',
          400: '#cccccc',
          500: '#ffffff',
          600: '#ffffff',
          700: '#ffffff',
          800: '#ffffff',
          900: '#ffffff'
        },
        'jet': {
          DEFAULT: '#373737',
          100: '#0b0b0b',
          200: '#161616',
          300: '#222222',
          400: '#2d2d2d',
          500: '#373737',
          600: '#606060',
          700: '#888888',
          800: '#afafaf',
          900: '#d7d7d7'
        }
      },
    },
  },
  plugins: [],
};