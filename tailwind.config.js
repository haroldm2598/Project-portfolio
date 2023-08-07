/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			bgwhite: '#ffffff',
			bgcolor100: '#6f1d1b',
			bgcolor200: '#bb9457',
			bgcolor300: '#432818',
			bgcolor400: '#b96d38',
			bgcolor500: '#ffe6a7'
		},
		extend: {
			keyframes: {
				wiggle: {
					// '0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'translate(-500px, 0px)' }
				}
			},
			animation: {
				wiggle: 'wiggle 1.5s ease-in-out'
			}
		}
	},
	plugins: []
};
