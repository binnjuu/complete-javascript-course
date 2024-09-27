"use strict"; // 啟用嚴格模式

////////////////////////////////////////////////////////
// 01 function
// https://codingheroes.io/assignments/functions
// function describeCountry(country, population, capitaCity) {
//   return `${country} has ${population} million people and its capital city is ${capitaCity}`;
// }

// const me = describeCountry("Taiwan", 2.5, "Taipei");
// const you = describeCountry("YourCounty", 5.4, "You!");
// const he = describeCountry("He's County", 5.4, "He!");
// console.log(me);
// console.log(you);
// console.log(he);

////////////////////////////////////////////////////////
// 02 函式聲明與表達式
// https://codingheroes.io/assignments/function-declarations-vs-expressions.html
console.log("函式聲明");
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
console.log(`${percentageOfWorld1(2.4)}%`);
console.log(`${percentageOfWorld1(54)}%`);
console.log(`${percentageOfWorld1(222)}%`);

console.log("---");
console.log("函式表達式");
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
console.log(`${percentageOfWorld2(2.4)}%`);
console.log(`${percentageOfWorld2(54)}%`);
console.log(`${percentageOfWorld2(222)}%`);

////////////////////////////////////////////////////////
// 03 箭頭函式
// https://codingheroes.io/assignments/arrow-functions
console.log("---");
console.log("箭頭函式");
const percentageOfWorld3 = (population) => (population / 7900) * 100;
console.log(`${percentageOfWorld3(2.4)}%`);
console.log(`${percentageOfWorld3(54)}%`);
console.log(`${percentageOfWorld3(222)}%`);
