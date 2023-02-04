const name = 'Вася';
const age = '5';

const output = "Привет, меня зовут " + name + " и мне " + age + " лет.";
const output1 = `Привет, меня зовут ${name} и мне ${age} лет.`;
const output2 = `Привет, меня зовут ${name} и мне ${age < 30 ?  'A' : 'B'} лет.`;
console.log(output);

const output3 = `
    <div>This is div</div>
    <p>this is o</p>
    `

const name1 = `Василийй`
console.log(name1.length)
console.log(name1.toUpperCase())
console.log(name1.toLowerCase())
console.log(name1.charAt(2))  //с
console.log(name1.indexOf('ъ'))  //-1
console.log(name1.indexOf('и'))  //3
console.log(name1.startsWith('Вас'))  //true
console.log(name1.startsWith('вас'))  //false
console.log(name1.endsWith('йй')) //true
console.log(name1.repeat('3')) //ВасилиййВасилиййВасилийй
const string = '           password   '
console.log(string.trim())
console.log(string)
console.log(string.trimLeft())
console.log(string.trimRight())

function logPerson(s, name2, age2) {
    //console.log(s, name2, age2)
    if (age2 < 0) {
        age2 = 'Еще не родился'
    }
    return `${s[0]}${name2}${s[1]}${age2}${s[2]}`
}

const personName = 'Владилен'
const personName2 = 'Максим'
const personAge = 26
const personAge2 = -10

const output4 = logPerson`Имя: ${personName}, Возраст: ${personAge}!`

console.log(output4)