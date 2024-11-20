const { defineConfig } = require("@vue/cli-service");
const serveOringin = "http://localhost:3000";
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "^/api": {
        target: serveOringin,
        changeOrigin: true,
        ws: false, //websocket
        pathRewrite: { "^/api": "/" },
      },
    },
  },
});
