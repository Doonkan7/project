const fs =  require('fs');
const path = require('path');

//fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir2' , 'dir3'), {recursive: true});

// console.log('START');
// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log('Папка создана');
// });
//
// console.log('END');

// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//     if(err) {
//       throw err;
//     }
// });

fs.writeFile(path.resolve(__dirname, 'test.txt'), 'fdoijnvoidfnvndofinv', (err) => {
    if(err) {
        throw err;
    }
    console.log('Файл записан');
});

fs.appendFile(path.resolve(__dirname, 'test.txt'), '  Добавить в конец файла', (err) => {
    if(err) {
        throw err;
    }
    console.log('Файл записан');
});