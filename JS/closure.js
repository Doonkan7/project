// let number = 5; debugger
//
// function logNumber() {
//     let number = 4; debugger
//     console.log(number);
// }
//
// number = 6;
//
// logNumber(); debugger

function createCounter() { debugger
    let counter = 0; debugger

    const myFunction = function () { debugger
        counter = counter + 1; debugger
        return counter; debugger
    }

    return myFunction;  debugger
}
debugger
const increment = createCounter(); debugger
const c1 = increment(); debugger
const c2 = increment(); debugger
const c3 = increment(); debugger

console.log(c1, c2, c3);
