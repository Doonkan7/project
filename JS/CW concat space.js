// 1)

function smash (words) {
    let res = "";
    for (i = 0; i < words.length; i++) {
        if (i < words.length - 1) {
            res += `${words[i]} `;
        }
        else {
            res += words[i];
        }
    }
    return res;
}

// 2)
smash = function (words) {
    return words.join(" ");
};

console.log(smash (['hello', 'world', 'this', 'is', 'great']));