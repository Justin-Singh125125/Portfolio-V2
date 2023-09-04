import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      green: '#0bceaf',
      gray: 'rgba(0,0,0,.08)',
      'gray-light': 'rgba(0,0,0,.05)',
    },
  },
  plugins: [],
};
export default config;
