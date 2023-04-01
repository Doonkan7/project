function factorial(n) {
    if (n <= 0 ) {
        return 1;
    } if (n % 1 != 0 || isNaN(n)) {
        return 'Число не может быть дробным или содержать символы';

    } else {
        return n * factorial(n - 1);
    }
}

const resultFactorial = factorial(4.5);
console.log(resultFactorial);

// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120