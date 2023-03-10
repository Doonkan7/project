// Readable - чтение
// Writable - запись
// Duplex - для  чтения и записи Readable + Writable
// Transform - такой же как Duplex, но может изменить  данные по мере чтения

const fs = require('fs');
const path = require('path');

// fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data);
// });

const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'));

// Один чанк по дефолту 64кб
// stream.on('data', (chunk) =>  {
//     console.log(chunk);
// });
//
// stream.on('end', () => console.log('Закончили читать'));
// stream.on('open', () => console.log('Начали читать'));
// stream.on('error', () => console.log('Error'));

// const writableStream = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'));
// for (let i = 0; i < 20; i++) {
//     writableStream.write(i + '\n');
// }
// writableStream.end();
// writableStream.close();
// writableStream.destroy();
// writableStream.on('error');

// const http = require('http');
//
// http.createServer((req, res) => {
//     //req - readable stream
//     //res - writable stream
//     res.on('')
//     const stream = fs.createReadStream(path.resolve(__dirname, 'test2.txt'))
//     // Стрим закончит читать раньше чем пользователь скачает
//     //stream.on('data', chunk => res.write(chunk))
//     //stream.on('close', chunk => res.end(chunk))
//     //stream.pipe(res);
// })