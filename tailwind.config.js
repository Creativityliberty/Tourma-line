/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://storage.googleapis.com/aai-web-samples/mediapipe/cosmic_galaxy.jpeg')",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['"Momo Trust Display"', 'sans-serif'],
      },
      colors: {
        'brand-lilas': '#E6E0F8',
        'brand-purple': '#A491D3',
        'brand-dark': '#4A4063',
        'brand-green': '#D1E7DD',
        'brand-gold': '#F0E68C',
      },
      keyframes: {
        fadeInUp: {
          'from': { opacity: 0, transform: 'translateY(20px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInLeft: {
          'from': { opacity: 0, transform: 'translateX(-30px)' },
          'to': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInRight: {
          'from': { opacity: 0, transform: 'translateX(30px)' },
          'to': { opacity: 1, transform: 'translateX(0)' },
        },
        slideInDown: {
          'from': { opacity: 0, transform: 'translateY(-40px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
        scaleIn: {
          'from': { opacity: 0, transform: 'scale(0.95)' },
          'to': { opacity: 1, transform: 'scale(1)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8, transform: 'scale(1.02)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(-4px)' },
          '50%': { transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(164, 145, 211, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(164, 145, 211, 0.8)' },
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        fadeInLeft: 'fadeInLeft 0.8s ease-out forwards',
        fadeInRight: 'fadeInRight 0.8s ease-out forwards',
        slideInDown: 'slideInDown 0.8s ease-out forwards',
        scaleIn: 'scaleIn 0.8s ease-out forwards',
        pulse: 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bob: 'bob 3s ease-in-out infinite',
        shimmer: 'shimmer 2s infinite',
        float: 'float 3s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
      }
    }
  },
  plugins: [],
}
