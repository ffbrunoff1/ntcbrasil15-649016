/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5BB7E5', // Azul claro da logo
        secondary: '#0D3D56', // Um azul mais escuro para contraste
        accent: '#F7931E', // Um laranja para CTAs e destaques
        light: '#F0F8FF', // Um fundo quase branco, tipo "AliceBlue"
        dark: '#2c3e50', // Texto escuro
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        lifted: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        backgroundShine: {
          from: { backgroundPosition: '0% 0%' },
          to: { backgroundPosition: '-200% 0%' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'background-shine': 'backgroundShine 2s linear infinite',
      },
    },
  },
  plugins: [],
};
