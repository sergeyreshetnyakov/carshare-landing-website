/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            scale: {
                "-100": "-1",
            },
            fontFamily: {
                serif: ["Spectral SC", "serif"],
                sans: ["Raleway", "sans-serif"],
            },
        },
    },
    plugins: [],
};
