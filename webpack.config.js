const path = require("path");

module.exports = {
    // Other webpack configurations...
    resolve: {
  fallback: {
    zlib: require.resolve('browserify-zlib'),
    querystring: require.resolve('querystring-es3'),
    stream: require.resolve('stream-browserify')
  }
}

};
