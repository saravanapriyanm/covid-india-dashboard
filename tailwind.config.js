module.exports = {
  prefix: "",
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontSize: {
      big: "1.875rem",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
