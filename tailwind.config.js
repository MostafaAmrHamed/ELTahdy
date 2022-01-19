module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8faff",
        component: "#e1e8fe",
        color: {
          1: "#ffffff",
          2: "#eef3ff",
          3: "#a9a7c9",
          4: "#6159e6",
        },
        cancel: "#f96879",
        true: "#008000",
      },
      fontFamily: {
        body: ["Markazi"],
      },
    },
  },
  plugins: [],
};
