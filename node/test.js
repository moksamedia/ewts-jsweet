//const EwtsConverter = require('./EwtsConverterCombined.min.js');
//const converter = new EwtsConverter();
const EwtsConverter = require('./bundle');
const converter = new EwtsConverter();

console.log(converter.toUnicode('bum pa mi rtags pa yin/'));
console.log(converter.toWylie('བུམ་པ་མི་རྟགས་པ་'));
