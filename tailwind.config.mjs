/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					'50': '#fef9ec',
					'100': '#faefcb',
					'200': '#f5dd92',
					'300': '#eec048',
					'400': '#ecb033',
					'500': '#e4911c',
					'600': '#ca6e15',
					'700': '#a84f15',
					'800': '#893d17',
					'900': '#713316',
					'950': '#401908',
				},

				'light-black': "#1E1E1E",
				'light-gray': "#B5B5B5",
				'black-border': "#3d3d3d"
			}
		},
	},
	plugins: [],
}
