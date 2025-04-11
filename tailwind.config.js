/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF7F7',
          100: '#FFEFEF',
          200: '#FFE5E5',
          300: '#FFDAD9',
          400: '#F18D8F',
          500: '#AE1913',
          600: '#9E1511',
          700: '#8E130F',
        },
        secondary: {
          400: '#AE191366',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      screens: {
        'lg960': '960px',
      },
    },
  },
  plugins: [],
};