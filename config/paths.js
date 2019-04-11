'use strict';

const path = require('path');
const fs = require('fs');

const resolveOwn = relativePath => path.resolve(process.cwd(), relativePath);
const systemDirectory = resolveOwn('wp-content/mu-plugins/covenant-core/');
const resolveSystem = relativePath =>
  path.resolve(systemDirectory, relativePath);

const resolveEntry = ext => p =>
  fs
    .readdirSync(p)
    .filter(file => path.extname(file) === ext)
    .reduce((acc, file) => {
      const entry = { [ path.basename(file, ext) ]: `${ p }/${ file }` };
      return Object.assign(acc, entry);
    }, {});

const resolveEntryJs = resolveEntry('.js');

module.exports = {
  root: resolveOwn('.'),
  system: resolveSystem('.'),
  build: resolveSystem('build'),
  buildImages: resolveSystem('build/images'),
  public: resolveSystem('public'),
  entry: resolveEntryJs(resolveSystem('src/js')),
  js: resolveSystem('src/js'),
  src: resolveSystem('src'),
  styles: resolveSystem('src/scss'),
  images: resolveSystem('src/images'),
  eslint: resolveOwn('config/.eslintrc'),
  stylelint: resolveOwn('config/.stylelintrc'),
  tailwind: resolveOwn('config/tailwind.config.js'),
};
