const image = require('@rollup/plugin-image');
const sass = require('rollup-plugin-sass');

module.exports = {
  rollup(config, options) {
    config.plugins = [image({ incude: ['**/*.svg'] }), ...config.plugins];
    config.plugins = [sass(), ...config.plugins];

    return config;
  },
};
