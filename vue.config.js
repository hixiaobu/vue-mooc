module.exports = {
  publicPath: './',
  outputDir: 'dist',
  devServer: {
    proxy: {
      '/mock': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true
      }
    }
  },
  lintOnSave: true
}