// 1)
function solution(str){
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}

console.log(solution('world'));

// 2)

function solution(str){
    return str.split('').reverse().join('');
}