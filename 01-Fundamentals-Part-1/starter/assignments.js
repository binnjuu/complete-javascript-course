// Part 1 作業
// https://codingheroes.io/assignments/javascript-fundamentals-part-1
////////////////////////////////////////////////////////
// 01 數值與變數
// https://codingheroes.io/assignments/values-and-variables

let country = "Taiwan";
let continent = "Taipei";
let population = 2.495;

// let message = `國家: ${country}, 縣市: ${continent}, 人口數(百萬): ${population}`;
// console.log(message);

////////////////////////////////////////////////////////
// 02 資料類型
// https://codingheroes.io/assignments/data-types
let isIsland = true;
let language = "Mandarin";

// console.log(typeof isIsland);
// console.log(typeof language);

////////////////////////////////////////////////////////
// 03 let、const、var
// https://codingheroes.io/assignments/let-const-and-var
// let num = 1; // let是可更改的變數
// num = 2;
// const PORT = 3000; // const是不可更改的變數
// PORT = 5000;
// var old = ""; // var是過時的宣告方式
// dontdothis = ""; // 建議避免這種宣告方式

////////////////////////////////////////////////////////
// 04 基礎運算符 + 05 字串模板
// https://codingheroes.io/assignments/basic-operators
// https://codingheroes.io/assignments/strings-and-template-literals
// let half = population / 2;
// let add1 = population + 1;
// console.log(population > 6);
// console.log(population < 33);

// let description = `${continent} is in ${country}, and its ${population} million people speak ${language}`;
// console.log(description);

////////////////////////////////////////////////////////
// 06 if/else
// https://codingheroes.io/assignments/taking-decisions-if-else-statements
// let description = "";
// if (population < 33) {
//   description = `${continent} is in ${country}, and its ${
//     33 - population
//   } million below average`;
// } else {
//   description = `${continent} is in ${country}, and is above average`;
// }
// console.log(description);

////////////////////////////////////////////////////////
// 07 數值轉換與強制轉換
// https://codingheroes.io/assignments/type-conversion-and-coercion
console.log("9" - "5"); // -> 4 兩個字串做減法運算會被強制轉為數字
console.log("19" - "13" + "17"); // -> '617' 兩個字串相加不會被強制轉換
console.log("19" - "13" + 17); // -> 23 字串加上數字會被強制轉換為數字處理
console.log("123" < 57); // -> false 字串與數字比較大小時會被強制轉換為數字
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> 1143

// 布林值轉換
// 只有以下五種數值會被視為false
// 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

// 也可以自己進行數值轉換
let user_input = Number("1234");

console.log(typeof user_input);
console.log(typeof String(user_input));
