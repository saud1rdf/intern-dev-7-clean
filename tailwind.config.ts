import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        'arabic': ['Cairo', 'Arial', 'sans-serif'],
        'english': ['Inter', 'system-ui', 'sans-serif'],
      },
      // La propiedad 'direction' no es una propiedad estándar de Tailwind CSS para aplicar directamente en la configuración.
      // Si necesitas RTL/LTR, deberías aplicarlo a través de clases CSS o lógica de componentes.
      // direction: {
      //   'rtl': 'rtl',
      //   'ltr': 'ltr',
      // },
    },
  },
  plugins: [],
}
export default config
