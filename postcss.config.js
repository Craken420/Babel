// Dar soporte a funciones nuevas de css en navegadores antiguos
const postcss = require('postcss-cssnext');

module.exports = {
  plugins: [postcss],
};
