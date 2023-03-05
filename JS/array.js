const arr = [1, 22, 93, 6, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
};

// // arr[99] = 0;
// // console.log(arr.length);
// // console.log(arr);
//
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });


//arr.pop();
//arr.push(10);
//arr.push(10);

// console.log(arr);
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//
// for (let k of arr) {
//     console.log(k);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));

// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
//
// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
//
// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily() {
    if (family === undefined || family.length == 0) {
        console.log(`Семья пуста`);
    }
    else {
        console.log(`Семья состоит из: ${family}`);
    }
}

showFamily(family);

// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить
// в консоль эти строки в нижнем регистре.

/const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings() {
     favoriteCities.map(element => {
         return element.toLowerCase();
     }
 }

console.log(standardizeStrings(favoriteCities));

arr.forEach(function(item, i, arr) {
     console.log(`${i}: ${item} внутри массива ${arr}`);
 });