"use strict";

// alert('Hello');

// const result = confirm("Are you here?");
// console.log

// const answer = +prompt("Вам есть 18?", "");
// console.log(typeof(answer));

const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваше фамилия?', '');
// answers[2] = prompt('Сколько  вам лет?', '');

console.log(typeof(answers));

let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}

let num = 50;

do {
    console.log(num);
    num++;    
}
while (num <= 55)

let num = 50;

for (let i = 1; i <8; i++) {
    if (i == 6) {
        //break;
        continue;
    }
    console.log(i);
}

let str = '';

loop1:
for (let i = 0; i < 5; i++) {
  if (i === 1) {
    continue loop1;
  }
  str = str + i;
}

console.log(str);
// expected output: "0234"

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}

// Пирамидка из звездочек *****

let result = '';
const lenght = 7;

for (let i = 1; i < lenght; i++) {
    
    for (let j = 0; j < i; j++) {
        result += '*';
    }

    result += '\n';
}

console.log(result);

first: for (let i = 0; i < 3; i++) {
    console.log(`first level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k == 2) continue first;
            console.log(`third level: ${k}`);
        }
    }
}

for (let i = 5; i < 11; i++) {
    console.log(i);
}

for (let i = 20; i > 9; i--) {
    console.log(i);
    if (i === 13) break;
}

for (let i = 20; i >= 10; i--) {
    if (i === 14) break;
    console.log(i)
}


for (let i = 2; i < 11; i++) {
    if (i % 2 === 0) {
    console.log(i);
    }
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 2

do {
    i++;
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}
while (i < 16)


const arr = []
let m = 0;
for (let i  = 5; i < 11; i++){
    arr[m] = i;
    m++;
}
console.log(arr);

const arrayOfNumbers = [];

for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
}

console.log(arrayOfNumbers);

let i = 2;

while (i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++;
}

//*) Продвинутые задания на использование циклов и условий

// 1 первая задача
// Значения массива менять нельзя, тут он проверяется автоматически
// именно на эти значения.
// Заполните новый массив (result) числами из старого (arr).
// Количество элементов в массиве можно получить как arr.length,
// а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив.

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

// Пишем решение вот тут
//console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
}

console.log(result);

// Вторая задача
// Измените данный массив так, чтобы все числа были увеличены в 2 раза,
// а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === 'string') {
            data[i] = `${data[i]} - done`;
    }   else {
        data[i] *= 2;
    }
}

console.log(data);

const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for (let i = 20; i >= 10; i--) {
    if (i === 14) break;
    console.log(i)
}

// третья задача
// Разверните массив data наоборот при помощи цикла и запишите данные
// в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for (let i = data.length - 1; i >= 0; i--) {
    result[i] = data[(data.length - 1) - i];
}
console.log(result);
return data;

// (**) Задача на формирование фигуры
// Это одна из классических задач в программировании на формирование самых разных фигур
// при помощи кода. Вы спросите, а зачем это вообще нужно? Ответов несколько:

// Существуют реальные задачи, когда вы кодом строите геометрию, символы и другие нужные
//вещи. Вспомните простые электронные табло на улицах, например

// Это хорошо прокачивает логику и разминает мозг

// Позволяет запомнить нюансы работы языка

// Иногда можно встретить просто нереальные вещи, построенные только при помощи кода.
//Но мы с вами займемся базовой фигурой. Сейчас вам необходимо написать код,
//который при помощи звездочек (*) в консоли нарисует вот такую фигуру:

//      *
//     ***
//    *****
//   *******
//  *********
// ***********
// (Подсказка: в конце фигуры есть перенос строки \n, который тоже учитывается в тестах.
//В КОНЦЕ КАЖДОЙ СТРОКИ НЕТ ПРОБЕЛОВ, ТОЛЬКО ПЕРЕНОС)

// Это похоже на то, что было в одном из уроков недавно, но сложнее.
//Задача непростая для новичков, так что с первого раза может не получится.

// Учтите, что проверка кода в таких заданиях осуществляется автоматически, через программу.


const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);

console(Math.e);
console(Math.PI);
console(Math.sqrt(4));
console(Math.max(42,12,23,23,434,54,1));
console(Math.min(42,12,23,23,434,54,1));
console(Math.floor(42,12,23,23,434,54,1));
console(Math.ceil(42,12,23,23,434,54,1));
console(Math.round(42,12,23,23,434,54,1));
console(Math.random());

function getRandom(min, max) {
    return Math.random() * (max - min) + min
}

console.log(getRandom(10, 42));
console.log(getRandom(10, 42));


