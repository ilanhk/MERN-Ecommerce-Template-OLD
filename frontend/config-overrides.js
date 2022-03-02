//This file is to overide webpack 5 because no polyfills
//this are the instructions i followed: https://stackoverflow.com/questions/70398678/i-tried-to-polyfill-modules-in-webpack-5-but-not-working-reactjs

module.exports = function override (config, env) {
    console.log('override')
    let loaders = config.resolve
    loaders.fallback = {
        "crypto": require.resolve("crypto-browserify"),
        "path": require.resolve("path-browserify"),
        "stream": require.resolve("stream-browserify"),
        "http": require.resolve("stream-http"),
        "util": require.resolve("util"),
        "querystring": require.resolve("querystring-es3"),
        "url": require.resolve("url/"),
        "fs": false,
    };
    
    return config;
};