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
                idara: {
                    orange: '#f37335',
                    navy: '#031249',
                    cyan: '#00bcd4',
                    teal: '#074b54',
                    yellow: '#FFB300',
                },
            },
            fontFamily: {
                montserrat: ['Montserrat', 'Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;
