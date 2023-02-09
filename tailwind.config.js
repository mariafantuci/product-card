/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/js/*.js"],
  theme: {
    extend: {
      colors: {
				"purple-800": "#271A45",
        "purple-100": "#D9CDF7",

			},
			fontFamily: {
				crimson: ["Crimson Pro", "serif"],
				lato: ["Lato", "serif"],
			},
      fontSize: {
        "2sm": '0.625rem',
        "text-32": "2rem"
      },
      lineHeight: {
        '2small': '0.625rem',
        "32": "2rem"
      }
    },
  },
  plugins: [],
}
