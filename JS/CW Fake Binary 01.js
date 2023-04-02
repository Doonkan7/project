function fakeBin(x){
    let res = '';
    for (i = 0; i<x.length; i++) {
        if (x[i] < 5) {
            res += 0;
        } else {
            res += 1;
        }
    }
    return res;
}

console.log(fakeBin('45385593107843568'));

// 2)

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

// 3)

function fakeBin(x) {
    return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}