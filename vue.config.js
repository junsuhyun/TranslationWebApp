module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://jhiparkcaptionapi.azurewebsites.net'
      }
    }
  }
}