//react has built in webpack 5 but doesnt include polyfills need to manually add it
// from this https://www.youtube.com/watch?v=u1PPNIBvQjk&ab_channel=CodeLikePro
module.exports = {
    resolve: {
        fallback: {
            "crypto": require.resolve("crypto-browserify"),
            "path": require.resolve("path-browserify"),
            "stream": require.resolve("stream-browserify"),
            "http": require.resolve("stream-http"),
            "util": require.resolve("util"),
            "querystring": require.resolve("querystring-es3")
        }
    },
}