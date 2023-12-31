/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			bgwhite: '#ffffff',
			bgcolor100: '#6f1d1b',
			bgcolor200: '#bb9457',
			bgcolor300: '#432818',
			bgcolor400: '#b96d38',
			bgcolor500: '#ffe6a7',
			bgcolor600: '#F6F1F1'
		},
		extend: {
			width: {
				100: '28rem',
				101: '30rem',
				102: '32rem',
				103: '34rem',
				104: '36rem',
				150: '50rem',
				151: '52rem',
				152: '54rem',
				153: '56rem',
				154: '58rem',
				155: '60rem'
			},
			height: {
				100: '28rem',
				101: '30rem',
				102: '32rem',
				103: '34rem',
				104: '36rem'
			},
			lineHeight: {
				11: '2.75rem',
				12: '3rem',
				13: '3.25rem',
				14: '12rem'
			},
			fontFamily: {
				poppins: "'Poppins', sans-serif",
				inter: "'Inter', sans-serif"
			},
			fontSize: { '10xl': '10rem', '11xl': '12rem', '12xl': '14rem' },
			keyframes: {
				wiggle: {
					'0%': { transform: 'translateX(500px)' },
					// '50%': { transform: 'translate(500px, 0px)' },
					'100%': { transform: 'translateX(0px)' }
				},
				toRight: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0%)' }
				},
				toLeft: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0%)' }
				},
				toTop: {
					'0%': { transform: 'translateY(500px)' },
					'100%': { transform: 'translateY(0%)' }
				}
			},
			animation: {
				wiggle: 'wiggle 1s ease-in-out',
				toRight: 'toRight 1.2s ease-in forwards',
				toLeft: 'toLeft 1.2s ease-in forwards',
				toTop: 'toTop 1s ease-in forwards'
			}
		}
	},
	plugins: [
		plugin(function ({ addVariant }) {
			addVariant('childOdd', '&>*:nth-child(odd)');
			addVariant('childEven', '&>*:nth-child(even)');
		})
	]
};
