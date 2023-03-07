const calculator = require('./calculator.js');

const totalPriceElectronics = calculator.getTotalPriceCategory('Electronics');
console.log(`Total price for Electronics: ${totalPriceElectronics}`);

const totalPriceBooks = calculator.getTotalPriceCategory('Books');
console.log(`Total price for Books: ${totalPriceBooks}`);

const totalPriceClothing = calculator.getTotalPriceCategory('Clothing');
console.log(`Total price for Clothing: ${totalPriceClothing}`);