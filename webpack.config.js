const path = require("path");

module.exports = {
  mode: "production", // hoặc 'development' tùy vào môi trường
  entry: "./src/index.tsx", // File đầu vào
  output: {
    path: path.resolve("dist"), // Thư mục xuất file sau build
    filename: "index.js",
    libraryTarget: "commonjs2", // Định dạng cho npm
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // Đuôi file được webpack hiểu
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Áp dụng cho các file .css
        use: ["style-loader", "css-loader"], // Sử dụng style-loader và css-loader
      },
      {
        test: /\.(ts|tsx)$/, // Xử lý các file TypeScript
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
};
