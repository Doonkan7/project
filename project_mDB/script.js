//console.log(document.body);

//console.log(document.documentElement);

//console.log(document.body.childNodes);

// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

//console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('#current').parentElement);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

// for (let node of document.body.childNodes) {
//     if (node.nodeName == '#text') {
//         continue;
//     }
//     console.log(node);
// };

pow(2, 1); //2
pow(2, 2); //4
pow(2, 3); //8
pow(2, 4); //16

function pow(x, y) {
    let result = 1;

    for (let i = 0; i < 0; i++) {
        result *= x;
    }

    return result;
}

function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}


