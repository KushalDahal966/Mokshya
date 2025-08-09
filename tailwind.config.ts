import type { Config } from 'tailwindcss'
const config: Config = {
    content: [
        './index.html',
        './src/pages/menu.html',
        './src/pages/booking.html',
        './src/pages/ktaHaru.html',
        './src/pages/directions.html',
        './src/**/*.{js,ts,jsx,tsx,vue}',
    ],
    theme: {
        colors: {
            green: {
                50: '#E6E9E9',
                100: '#CDD3D2',
                200: '#B3BDBC',
                300: '#9AA7A5',
                400: '#81918F',
                500: '#687B79',
                600: '#4F6562',
                700: '#354F4C',
                800: '#1C3935',
                900: '#03231F',
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
            secondary: ['Orelega One'],
        },

    },
    plugins: [],
}

export default config 