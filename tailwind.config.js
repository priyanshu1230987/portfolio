/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'orbitron': ['Orbitron', 'monospace'],
      },
      colors: {
        'cyber-dark': '#0f0f0f',
        'neon-cyan': '#00ffd5',
        'neon-pink': '#ff0080',
        'cyber-purple': '#8b5cf6',
        'cyber-blue': '#0ea5e9',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slide-up 0.8s ease-out',
        'fade-in': 'fade-in 1s ease-out',
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'hologram': 'hologram 3s ease-in-out infinite',
        'cyber-glitch': 'cyber-glitch 0.3s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%': {
            'box-shadow': '0 0 5px #00ffd5, 0 0 10px #00ffd5, 0 0 15px #00ffd5',
          },
          '100%': {
            'box-shadow': '0 0 10px #00ffd5, 0 0 20px #00ffd5, 0 0 30px #00ffd5',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(5px) rotate(-1deg)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'hologram': {
          '0%, 100%': { opacity: '1', transform: 'translateZ(0)' },
          '50%': { opacity: '0.8', transform: 'translateZ(10px)' },
        },
        'cyber-glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};