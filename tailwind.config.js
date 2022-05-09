module.exports = {
  content: ["./layout/**/*.{ejs,js,jsx,md,mdx,html}"],
  theme: {
    extend: {},
  },
  // add daisyUI plugin
  plugins: [require("daisyui")],
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "aqua",
  },
}