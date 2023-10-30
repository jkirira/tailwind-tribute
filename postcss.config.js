const tailwindcss = require("tailwindcss"),
    autoprefixer = require("autoprefixer");

module.exports = {

    plugins: [
        'postcss-preset-env',
        tailwindcss,
        autoprefixer,
    ],

}