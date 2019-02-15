const path = require('path');

module.exports = {
    entry: './src/js/start.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}