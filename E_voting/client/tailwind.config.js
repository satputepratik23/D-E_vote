module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        purplebg: "url('pbg.jpg')",
        purplebgg: "url('pbgg.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
