'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const wrapper = document.querySelector('.wrapper');
const hearts = wrapper.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
let num = '500';
box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = "100%";
circles[1].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// };

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
//const text = document.createTextNode('Тут был я');

div.classList.add('black');

wrapper.append(div);
//wrapper.prepend(div);
// hearts[0].before(div);
//hearts[0].after(div);
//circles[0].remove(div);
hearts[0].replaceWith(circles[1]);

div.innerHTML = '<h1>Hello World</h1>';

//div.textContent = 'Hello';

div.insertAdjacentHTML("afterbegin", "<h2>Hello</h2>");