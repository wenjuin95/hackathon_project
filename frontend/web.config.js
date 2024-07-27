module.exports = {
    /*
    rest of config...
    */
    output: {
        filename: "index.js",
        pathinfo: false,
        libraryTarget: 'umd', // In my case, I use libraryTarget as 'umd'. Not sure if relevant
    },
    externals: {
        // Use external version of React
        "react": {
            "commonjs": "react",
            "commonjs2": "react",
            "amd": "react",
            "root": "React"
        },
        "react-dom": {
            "commonjs": "react-dom",
            "commonjs2": "react-dom",
            "amd": "react-dom",
            "root": "ReactDOM"
        }
    },
};
