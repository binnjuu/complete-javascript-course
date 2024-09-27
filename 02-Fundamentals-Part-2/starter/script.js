"use strict"; // 啟用嚴格模式

////////////////////////////////////////////////////////
// 01 function
function describeCountry(country, population, capitaCity) {
  return `${country} has ${population} million people and its capital city is ${capitaCity}`;
}

const me = describeCountry("Taiwan", 2.5, "Taipei");
const you = describeCountry("YourCounty", 5.4, "You!");
const he = describeCountry("He's County", 5.4, "He!");
console.log(me);
console.log(you);
console.log(he);
