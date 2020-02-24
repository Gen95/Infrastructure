module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-preset-env': {},
        'cssnano': {},
        'postcss-cssnext': {
            browsers: [
                "last 4 version",
                "iOS >= 9",
                "> 5%"
              ]
        }
    }
}