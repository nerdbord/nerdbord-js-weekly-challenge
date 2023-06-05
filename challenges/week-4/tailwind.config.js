/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				main: "#FAFAFA",
				shadow: "#D9D9D9",
			},
			gridTemplateColumns: {
				new1: "repeat(1, minmax(0, calc(300px - 40px)))",
			},
			keyframes: {
				appearanceTop: {
					"0%": { transform: "translateY(-1rem)" },
					"100%": { transform: "translateY(0)" },
				},
			},
			animation: {
				appearanceTop: "appearanceTop 0.5s ease-in-out",
			},
		},
	},
};
