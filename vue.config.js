const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: (config) => {
    // 添加别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("store", resolve("src/store"))
      .set("components", resolve("src/components"))
      .set("views", resolve("src/views"))
      .set("api", resolve("src/api"))
      .set("utils", resolve("src/utils"));
    if (process.env.NODE_ENV !== "production") {
      config.output.chunkFilename(`[name].[chunkhash:8].js`);
      config.output.filename(`[name].[hash].js`);
    }
  },
};
