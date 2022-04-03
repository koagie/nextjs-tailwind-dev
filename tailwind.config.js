module.exports = {
  //jitモードを指定すると開発中のパフォーマンスがあがる
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js, ts, jsx, tsx}",
    "./src/components/**/*.{js, ts, jsx, tsx}",
  ],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
