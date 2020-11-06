const image = require('@rollup/plugin-image');
const sass = require('rollup-plugin-sass');

module.exports = {
  rollup(config, options) {
    config.plugins = [
      image({ include: ['**/*.svg'] }),
      sass(),
      ...config.plugins];

    return config;
  },
};
