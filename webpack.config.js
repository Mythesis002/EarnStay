const path = require("path");

module.exports = {
    // Other webpack configurations...
    resolve: {
        fallback: {
            "path": require.resolve("path-browserify"),
            "http": require.resolve("stream-http")
            // Add more fallbacks if needed
        }
    }
};
