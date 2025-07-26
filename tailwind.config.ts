import type { Config } from 'tailwindcss'
const config: Config = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx,vue}',
    ],
    theme: {
        colors: {
            green: {
                900: '#03231F',
                800: '#03201C',
                700: '#021C19',
                600: '#021916',
                500: '#021513',
                400: '#021210',
                300: '#010E0C',
                200: '#010A09',
                150: '#010706',
                100: '#000303',
                50: '#000000',
            },
            cream: {
                900: '#FAF6F3',
                800: '#E1DDDB',
                700: '#C8C5C2',
                600: '#AFACAA',
                500: '#969492',
                400: '#7D7B7A',
                300: '#646261',
                200: '#4B4A49',
                150: '#323131',
                100: '#191918',
                50: '#000000',
            },
        },
        fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        secondary: ['Orelega One', 'cursive'],
      },
        
    },
    plugins: [],
}

export default config