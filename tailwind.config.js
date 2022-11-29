/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#00bcd4',
                'secondary': '#ff9800',
                'theme': '#0c8fb0',
                'badge': '#3f3f51',
                'text-primary': '#fff', 
                'text-secondary': '#6b7280', 
            },
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif', 'Nunito'],
            },
            backgroundImage: {
                'bg': 'url("../assets/bg.jpg")',
                'servicemain': 'url("../assets/servicemain.jpg")',
                'servicebr2': 'url("../assets/servicebr2.jpg")',
                'servicesq': 'url("../assets/servicesq.jpg")',
            },
        }
    },
    plugins: [],
  }
