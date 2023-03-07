const _ = require('lodash');
const moment = require('moment');

// const number = [1,2,3,4,5];
// const genap = _.filter(number, n => n % 2 ===0);
// const ganjil = _.filter(number, n => n % 2 !==0);
// console.log(ganjil);
// console.log(genap);


// const person = {
//     name : "irfan",
//     age : 23,
//     email : "irfan@polinela.ac.id"
// }

// const personWithoutEmail = _.omit(person, "email");

// console.log(personWithoutEmail);



// const message = "hello aku";
// const result = _.upperFirst(message);
// const result2 = _.upperCase(message);
// console.log(result);
// console.log(result2);

// const number = [1,2,3,4,5,10];
// const sum = _.sum(number);

// console.log(sum);



// const today = moment();
// console.log(today);

// const todayFormated = moment().format('YYYY-MM-DD');
// console.log(todayFormated);

// const nextWeek = moment().add(1, 'week');
// console.log(nextWeek);


const date1 = moment('2023-12-31');
const date2 = moment('2024-01-29');
const diffInDay = date2.diff(date1, 'days');
console.log(diffInDay);
