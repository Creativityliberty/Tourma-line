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
        pulse: {
          '50%': { transform: 'scale(1.02)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(-4px)' },
          '50%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out forwards',
        pulse: 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bob: 'bob 3s ease-in-out infinite',
      }
    }
  },
  plugins: [],
}
