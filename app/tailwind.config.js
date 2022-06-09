module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"] },
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('pattern-bg.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
