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
// console.log("函式聲明");
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// console.log(`${percentageOfWorld1(2.4)}%`);
// console.log(`${percentageOfWorld1(54)}%`);
// console.log(`${percentageOfWorld1(222)}%`);

// console.log("---");
// console.log("函式表達式");
// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };
// console.log(`${percentageOfWorld2(2.4)}%`);
// console.log(`${percentageOfWorld2(54)}%`);
// console.log(`${percentageOfWorld2(222)}%`);

////////////////////////////////////////////////////////
// 03 箭頭函式
// https://codingheroes.io/assignments/arrow-functions
// console.log("---");
// console.log("箭頭函式");
const percentageOfWorld3 = (population) => (population / 7900) * 100;
// console.log(`${percentageOfWorld3(2.4)}%`);
// console.log(`${percentageOfWorld3(54)}%`);
// console.log(`${percentageOfWorld3(222)}%`);

////////////////////////////////////////////////////////
// 04 函式呼叫其他函式
// https://codingheroes.io/assignments/functions-calling-other-functions
// const describePopulation = (country, population) => {
//   return `${country} has ${population} million people, which is about ${percentageOfWorld3(
//     population
//   )}% of the world`;
// };
// console.log(describePopulation("Meme", 2.4));
// console.log(describePopulation("Youyou", 222));
// console.log(describePopulation("Hehe", 2722));

////////////////////////////////////////////////////////
// 05 陣列
// https://codingheroes.io/assignments/introduction-to-arrays
// const describePopulation = (population) => {
//   return percentageOfWorld3(population);
// };
const populations = [2.24, 231, 42.5, 33.2];
// console.log(populations.length === 4);
// const percentage = new Array(
//   describePopulation(populations[0]),
//   describePopulation(populations[1]),
//   describePopulation(populations[2]),
//   describePopulation(populations[3])
// );
// console.log(percentage);

////////////////////////////////////////////////////////
// 06 陣列基礎操作
// https://codingheroes.io/assignments/basic-array-operations-methods
// const neighbours = ["neighbour1", "neighbour2", "neighbour3"];

// // 在陣列結尾插入元素
// neighbours.push("neighbour4");
// console.log(neighbours);

// // 移除陣列最後一個元素
// console.log(neighbours.pop()); // 會回傳移除了什麼
// console.log(neighbours);

// // 檢查陣列是否包含某個值，使用===判定
// if (neighbours.includes("Germany")) {
//   console.log("Probably not a central european country :D");
// }

// // 修改元素
// neighbours[neighbours.indexOf("neighbour2")] = "new_neighbour2";
// console.log(neighbours);

// // 在陣列開頭插入元素
// neighbours.unshift("test1");
// console.log(neighbours);

// // 移除開頭第一個元素
// console.log(neighbours.shift("test1")); // 會回傳移除了什麼
// console.log(neighbours);

// // 檢查陣列長度
// console.log(neighbours.length);

// // 在插入資料的同時檢查陣列長度
// console.log(neighbours.push("test1")); // 在結尾插入資料
// console.log(neighbours.unshift("test1")); // 在開頭插入元素

////////////////////////////////////////////////////////
// 07 物件
// https://codingheroes.io/assignments/introduction-to-objects
// const myCountry = {
//   country: "Taiwan",
//   capital: "Taipei",
//   language: "Mandarin",
//   population: 2.45,
//   neighbours: [],

//   describe: function () {
//     console.log(this);
//   },

//   checkIsland: function () {
//     this.isIsland = this.neighbours.length > 0 ? true : false;
//   },
// };

////////////////////////////////////////////////////////
// 08 物件的點vs中括號
// https://codingheroes.io/assignments/dot-vs-bracket-notation

// // 有兩種訪問物件內容的方式
// console.log(myCountry.country);
// console.log(myCountry["country"]);

// // 也可以用於新增內容或修改內容
// myCountry["country"] = "mymymy";
// myCountry.new = "hihihi";
// console.log(myCountry.country);
// console.log(myCountry["new"]);

////////////////////////////////////////////////////////
// 09 物件函式與this
// https://codingheroes.io/assignments/object-methods
// myCountry.describe();
// myCountry.checkIsland();
// console.log(`is Island: ${myCountry.isIsland}`);

////////////////////////////////////////////////////////
// 10 For迴圈
// https://codingheroes.io/assignments/iteration-the-for-loop
// for (let i = 1; i <= 50; i++) {
//   console.log(`Voter number ${i} is currently voting`);
// }

////////////////////////////////////////////////////////
// 11 在陣列使用迴圈，中斷與繼續
// https://codingheroes.io/assignments/looping-arrays-breaking-and-continuing
let percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld3(populations[i]));

  // break; 中斷迴圈執行
  // continue; 跳過以下程式碼並執行下一次迴圈
}
console.log(percentages2);
