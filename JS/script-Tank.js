"use strict"

let x = 'Mozilla';
let empty = '';

console.log('Слово «Mozilla» занимает ' + x.length + ' кодовых значений');
/* "Слово «Mozilla» занимает 7 кодовых значений" */

console.log('Пустая строка имеет длину, равную ' + empty.length);
/* "Пустая строка имеет длину, равную 0" */


const str = "test";

console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit")); // поиск подстроки

const logg = "Hello world";

console.log(logg.slice(3, 7));

console.log(logg.substring(3, 7));