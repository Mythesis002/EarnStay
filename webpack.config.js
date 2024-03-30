const path = require('path');

module.exports = {
  entry: './src/index.js', // Adjust the entry point based on your project structure
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public') // Adjust the output path as needed
  },
  resolve: {
    extensions: ['.js', '.json'],
    fallback: {
      assert: require.resolve('assert'),
      vm: require.resolve('vm-browserify'),
      crypto: require.resolve('crypto-browserify'),
      fs: false, // Avoid resolving fs, as it's not supported in webpack for the browser environment
      http: require.resolve('stream-http'),
      path: require.resolve('path-browserify'),
      net: require.resolve('net-browserify'),
      zlib: require.resolve('browserify-zlib'),
      querystring: require.resolve('querystring-es3'),
      stream: require.resolve('stream-browserify')
    }
  }
};
