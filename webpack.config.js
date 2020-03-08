const path = require("path");

module.exports = {
  mode: "production",
  entry: "./public/commonJS/main.js",
  output: {
    path: path.resolve(__dirname, "public", "commonJSwebpack"),
    filename: "bundle.js"
  },
  optimization: {
    minimize: false
  }
};

//   switch (env.MD) {
//     case "amd":
//       return {
//         mode: "development",
//         entry: "./public/commonJS/main.js",
//         output: {
//           path: path.resolve(__dirname, "public", "commonJSwebpack"),
//           filename: "bundle.js",
//           library: "app",
//           libraryTarget: "amd"
//         },
//         mode: "production",
//         optimization: {
//           minimize: false
//         }
//       };

//     case "umd":
//       return {
//         mode: "development",
//         entry: "./public/commonJS/main.js",
//         output: {
//           path: path.resolve(__dirname, "public", "commonJSwebpack"),
//           filename: "bundle.js",
//           library: "app",
//           libraryTarget: "umd"
//         },
//         mode: "production",
//         optimization: {
//           minimize: false
//         }
//       };

//     case "system":
//       return {
//         mode: "development",
//         entry: "./public/commonJS/main.js",
//         output: {
//           path: path.resolve(__dirname, "public", "commonJSwebpack"),
//           filename: "bundle.js",
//           library: "app",
//           libraryTarget: "system"
//         },
//         mode: "production",
//         optimization: {
//           minimize: false
//         }
//       };

//     default:
//       return {
//         mode: "development",
//         entry: "public/commonJS/main.js",
//         output: {
//           path: path.resolve(__dirname, "public", "commonJSwebpack"),
//           filename: "bundle.js"
//         },
//         mode: "production",
//         optimization: {
//           minimize: false
//         }
//       };
//   }
// };
