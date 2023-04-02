// 1)
function sumMix(x){
    let res = 0;
    for (i = 0; i<x.length; i++) {
        res += Number(x[i]);
    }
    return res;
}

// 2)
function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
}

// 3)
const sumMix = x => x.reduce((a,b)=>+b+a,0);