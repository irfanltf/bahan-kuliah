const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.resolve(__dirname, 'items.json'));
const items = JSON.parse(data);

function getTotalPriceCategory(category){
    let totalPrice = 0;
    items.forEach(items => {
        if(items.category === category){
            totalPrice += items.price;
        }
    });

    return totalPrice;
}
module.exports = {
    getTotalPriceCategory
};