function grow(x){
    let res = 1;
    for (i = 0; i<x.length; i++) {
        res *= x[i];
    }
    return res;
}


// 2)
const grow = x => x.reduce((a,b) => a*b);


console.log(grow([1, 2, 3, 4]));