module.exports = {
    content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"], // Adjust paths
    theme: {
      extend: {
        colors: {
            'theme-blue': '#5515ef',
            'theme-pink': '#3c01ca',
            'theme-blue': '#eb58pe',
        },
        theme: {
          'shadow-3xl': '0 35px 35px rgba(0, 0, 0, 0.25)', 
        },
        fontFamily :{
          cursive: ["CedarvilleCursive"],
      },
    },
    plugins: [],
  },
};