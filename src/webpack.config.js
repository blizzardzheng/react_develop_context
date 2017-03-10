// IMPORTANT
// ---------
// This is an auto generated file with React CDK.
// Do not modify this file.
// Use `.storybook/user/modify_webpack_config.js instead`.

const path = require('path');
require('dotenv').config()
const baseDir = process.env.BASEDIR
const baseDirPath = path.resolve(__dirname, baseDir);
console.log('current project', baseDirPath)
require('child_process').exec(`ln -s ${baseDirPath}/node_modules/* node_modules`)

const webpackConfig = process.env.WEBPACK_CONFIG
const webpackConfigPath = webpackConfig ? path.join(baseDirPath, webpackConfig) : ''

let projectWebpack = ''
if (webpackConfigPath) {
    projectWebpack = require(webpackConfigPath)
    console.log(projectWebpack)
}
const config = {
  module: {
    loaders: [{
            test: /\.(jsx?|json)$/,
            loaders: ['babel-loader'],
      },
      {
        test: /\.css?$/,
        loaders: ['style', 'raw'],
        include: baseDirPath
      },
      {
        test: /.scss$/,
        loaders: ["style", "css", "sass"],
        include: baseDirPath
      }
    ],
  },
  resolve: {
      extensions: ['', '.js', '.jsx'],
      alias: {
          apps: `${baseDirPath}/apps`,
          share: `${baseDirPath}/apps/share`
      }
  }
};

module.exports = config;
