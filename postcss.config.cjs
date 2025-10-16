const isProduction = process.env.NODE_ENV === 'production';

const config = {
  plugins: [
    // Add vendor prefixes to CSS rules
    require('autoprefixer'),
  ],
};

if (isProduction) {
  config.plugins.push(
    // Minify and compress CSS for production
    require('cssnano')({
      preset: 'default', // You can specify a preset, like 'default' or 'advanced'
    })
  );
}

module.exports = config;