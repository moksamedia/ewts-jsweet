const EwtsConverter = require('./EwtsConverterCombined.min.js');
const converter = new EwtsConverter();
console.log(converter.toUnicode('bum'));
console.log(converter.toWylie('བུམ་པ་མི་རྟགས་པ་'));
