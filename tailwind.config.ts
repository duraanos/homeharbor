import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#1D1D1D',
          500: '#676E73',
          100: '#F6F6F6',
          50: '#FAFAFA',
        },
      },
      fontSize: {
        xs: '0.688rem',
        sm: '0.688rem',
        base: '1rem',
        lg: '1.188rem',
        xl: '1.438rem',
        '2xl': '1.750rem',
        '3xl': '2.062rem',
        ' 4xl': '2.5rem',
        '5xl': '3rem',
        '6xl': '3.562rem',
      },
    },
  },
  plugins: [],
};
export default config;
