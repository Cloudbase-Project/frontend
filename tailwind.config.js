module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			sm: '480px',
			md: '779px',
			lg: '1035px',
			xl: '1440px',
		},
		extend: {
			colors: {
				'brand-green': '#278575',
				'brand-green-hover': '#207365',
				// "brand-blue": "#091f77",
				'brand-orange': '#FB5410',
				'brand-gray': '#313131',
				'brand-white': '#F7F7F7',
			},
		},
	},
	plugins: [],
};
