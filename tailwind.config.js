const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xxs': '400px',
      'xs': '475px',
      ...defaultTheme.screens,
    },

    extend: {
      fontFamily: {
        'red-hat': ['Red Hat Display', 'sans-serif']
      },

      colors: {
        'pale-blue': '#e0e8ff',
        'bright-blue': '#3829e0',
        'very-pale-blue': '#f5f7ff',
        'desaturated-blue': '#7280a7',
        'dark-blue': '#1f2f56',
      },

      backgroundImage: {
        'desktop': "url('/src/images/pattern-background-desktop.svg')",
        'mobile': "url('/src/images/pattern-background-mobile.svg')"
      },
    },
  },
  plugins: [],
}
