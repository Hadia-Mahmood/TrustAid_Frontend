/** @type {import('tailwindcss').Config} */
// module.exports = {
	
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         paralucent: "var(--font-paralucent)",
//         poppins: "var(--font-poppins)",
//       },

//       backgroundImage: {
//         hero__slider__1: "url('/home/hero__slider1.jpg')",
//       },
//     },
//   },
//   plugins: [],
// };



export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx,js,jsx}",
		"./components/**/*.{ts,tsx,js,jsx}",
		"./app/**/*.{ts,tsx,js,jsx}",
		"./src/**/*.{ts,tsx,js,jsx}",
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

        "./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// ... keep existing code (color configuration)
				leaderboard: {
					bg: '#FFA726',
					border: '#8D6E63',
					item: 'rgba(255, 167, 38, 0.7)',
					score: 'rgba(255, 193, 7, 0.6)',
					rank1: '#FFD700',
					rank2: '#C0C0C0',
					rank3: '#CD7F32',
					rank4: '#E57373'
				}
			},
			borderRadius: {
				// ... keep existing code (border radius configuration)
			},
			keyframes: {
				// ... keep existing code (keyframes configuration)
				'pulse-subtle': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' },
				},
				'bounce-subtle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'shine': {
					'0%': { boxShadow: '0 0 5px 0px rgba(255, 255, 255, 0.5)' },
					'50%': { boxShadow: '0 0 20px 5px rgba(255, 255, 255, 0.8)' },
					'100%': { boxShadow: '0 0 5px 0px rgba(255, 255, 255, 0.5)' },
				},
			},
			animation: {
				// ... keep existing code (animation configuration)
				'pulse-subtle': 'pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'bounce-subtle': 'bounce-subtle 3s ease-in-out infinite',
				'fade-in': 'fade-in 0.5s ease-out',
				'shine': 'shine 3s infinite',
			},
			fontFamily: {
				paralucent: "var(--font-paralucent)",
				poppins: "var(--font-poppins)",
				'game': ['Impact', 'Haettenschweiler', 'Arial Narrow Bold', 'sans-serif']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} ;
  