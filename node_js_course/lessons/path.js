const path = require('path');

console.log('Склеить участки пути', path.join(__dirname, '..', '..'));
console.log('Получить абсолютный путь', path.resolve('1', '2', '3'));
const fullpath = path.resolve(__dirname,'1', '2', '3.js');
console.log('Парсинг пути', path.parse(fullpath));
console.log('Разделить в ОС', path.sep);
console.log('Проверка на абсолютный путь', path.isAbsolute('1/2'));
console.log('Название файла', path.basename(fullpath));
console.log('Расширение файла', path.extname(fullpath));

// ------------------------------------

const siteURL = 'http://localhost:8080/users?id=5123';

const url = new URL(siteURL);

console.log(url);
