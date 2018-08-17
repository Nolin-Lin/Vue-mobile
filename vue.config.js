module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    open: true,
    https: false,
    hotOnly: false,
    proxy: null // 设置代理
  },
  chainWebpack: (config) => {
    config.resolve.symlinks(true);
    return config;
  }
};
