console.log(typeof(5 + ''));

const fontsize = 26 + 'px';

// To number

//2)
console.log(typeof(+'5'));

//3)
console.log(typeof(parseInt('15px', 10)));

//let answ = +prompt('Hello', '');

// To boolean
//0, '', null, undefined, NaN;

let switcher =  null;
if (switcher) {
    console.log('Working...');
}

switcher =  1;

if (switcher) {
    console.log('Working...');
}