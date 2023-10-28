/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
        './components/**/*.{js,jsx,ts,tsx,md,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,jsx,ts,tsx,md,mdx}'
    ],
    plugins: [
        require("daisyui")
    ],
}
