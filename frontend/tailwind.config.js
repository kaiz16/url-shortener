module.exports = {
    mode: "jit",
    content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
    options: {
      safelist: [/data-theme$/],
    },
    theme: {
      extend: {
        screens: {
          "2xs": "128px",
          "1.5xs": "256px",
          "1xs": "384px",
          "0.5xs": "512px",
        },
      },
    },
  };
  