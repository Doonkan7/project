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

