'use strict';

const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const paths = require('./paths');

// Options for PostCSS as we reference these options twice
// Adds vendor prefixing based on your specified browser support in
// package.json
const postcssOptions = isProduction => {
  const defaultOptions = [
    require('tailwindcss')(paths.tailwind),
    require('postcss-flexbugs-fixes'),
    autoprefixer({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ],
      flexbox: 'no-2009',
    }),
  ];

  return {
    // Necessary for external CSS imports to work
    ident: 'postcss',
    plugins: [...defaultOptions, ...(isProduction ? [require('cssnano')] : [])],
  };
};

const extractCSS = new ExtractTextPlugin({
  filename: 'css/[name].css',
});

const extractBlockStyle = new ExtractTextPlugin({
  filename: 'css/block-styles.css',
});

const extractBlockEditor = new ExtractTextPlugin({
  filename: 'css/block-editors.css',
});

const styleLintConfig = {
  configFile: paths.stylelint,
  context: paths.styles,
};

// This is the production configuration.
// It compiles slowly and is focused on producing a fast and minimal bundle.
// The development configuration is different and lives in a separate file.
module.exports = (_, { mode }) => {
  const isProduction = mode === 'production';
  const extractConfig = {
    use: [
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 2,
          url: false,
        },
      },
      {
        loader: require.resolve('postcss-loader'),
        options: postcssOptions(isProduction),
      },
      require.resolve('sass-loader'),
    ],
  };
  return {
    // Don't attempt to continue if there are any errors.
    bail: isProduction,
    // In production, we only want to load the polyfills and the app code.
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: 'js/[name].js',
    },
    devtool: isProduction ? false : 'inline-source-map',
    module: {
      strictExportPresence: true,
      rules: [
        // Disable require.ensure as it's not a standard language feature.
        {
          parser: {
            requireEnsure: false,
          },
        },
        {
          test: /\.(js|jsx|mjs)$/,
          enforce: 'pre',
          use: [
            {
              options: {
                eslintPath: require.resolve('eslint'),
                configFile: paths.eslint,
                ignore: false,
                useEslintrc: false,
              },
              loader: require.resolve('eslint-loader'),
            },
          ],
          include: paths.src,
          exclude: [/[/\\\\]node_modules[/\\\\]/],
        },
        {
          // "oneOf" will traverse all following loaders until one will
          // match the requirements. When no loader matches it will fall
          // back to the "file" loader at the end of the loader list.
          oneOf: [
            {
              test: /\.js$/,
              include: paths.js,
              exclude: /node_modules/,
              use: [
                {
                  loader: require.resolve('babel-loader'),
                  options: {
                    babelrc: false,
                    presets: [require.resolve('babel-preset-cgb')],
                    plugins: ['lodash'],
                    cacheDirectory: true,
                  },
                },
              ],
            },
            {
              test: /styles\.s?css$/,
              include: paths.styles,
              use: extractBlockStyle.extract(extractConfig),
            },
            {
              test: /editors\.s?css$/,
              include: paths.styles,
              use: extractBlockEditor.extract(extractConfig),
            },
            {
              test: /\.scss$/,
              include: paths.styles,
              use: extractCSS.extract(extractConfig),
            },
            {
              test: /\.(gif|png|jpe?g|svg)$/i,
              use: [
                {
                  loader: require.resolve('file-loader'),
                  options: { name: 'images/[name].[ext]' },
                },
                {
                  loader: require.resolve('image-webpack-loader'),
                  options: {
                    disable: isProduction === false,
                  },
                },
              ],
            },
            {
              test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
              use: [
                {
                  loader: require.resolve('file-loader'),
                  options: { name: 'fonts/[name].[ext]' },
                },
              ],
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new StyleLintPlugin(styleLintConfig),
      extractBlockStyle,
      extractBlockEditor,
      extractCSS,
      // Moment.js is an extremely popular library that bundles large locale files
      // by default due to how Webpack interprets its code. This is a practical
      // solution that requires the user to opt into importing specific locales.
      // https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
      // You can remove this if you don't use Moment.js:
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
    // Some libraries import Node modules but don't use them in the browser.
    // Tell Webpack to provide empty mocks for them so importing them works.
    node: {
      dgram: 'empty',
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      child_process: 'empty',
    },
  };
};
