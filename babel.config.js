module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        "babel-preset-expo",
        {
          jsxImportSource: "nativewind",
        },
      ],
      "nativewind/babel",
    ],

    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],

          alias: {
            "@": "./",
            "@unitools/image": "@unitools/image-expo",
            "@unitools/router": "@unitools/router-expo",
            "@unitools/link": "@unitools/link-expo",
          },
        },
      ],
    ],
  };
};
