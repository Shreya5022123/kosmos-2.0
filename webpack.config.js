module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
      path: __dirname + '/public',
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
      ],
    },
  };