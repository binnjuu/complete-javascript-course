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
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
console.log(`${percentageOfWorld1(2.4)}%`);
console.log(`${percentageOfWorld1(54)}%`);
console.log(`${percentageOfWorld1(222)}%`);

console.log("---");

const percentageOfWorld2 = (population) => (population / 7900) * 100;
console.log(`${percentageOfWorld2(2.4)}%`);
console.log(`${percentageOfWorld2(54)}%`);
console.log(`${percentageOfWorld2(222)}%`);
