// JavaScript ES6 

// const and let-----------------------------------------

let age = 20; // can be reassigned
age = age + 1;
console.log(age);

const name = 'John' // cannot be reassigned
// name = 'Jane';
// console.log(name);

// arrow functions-----------------------------------------
function add(a, b) {
    console.log(a + b);
}
add(2, 3);

const arrowfunc = (a, b) => {
    console.log(a + b);
}
arrowfunc(2, 1);

const array = [1, 2, 3];

array.map((n) => {
    console.log(n)
});

// template string-------------------------------------------
const greeting = (name) => {

    const string = 'hello, ' + name + '!';
    const templateString = `hello, ${name}!`; //backticks for templateStrings, ${} for variable

    console.log(string);
    console.log(templateString);
}

greeting('John');

// default parameters-----------------------------------------
const hello = (a = 2, b = 2) => console.log(a + b);

hello(2 + 2);

// array destructuring--------------------------------------
const array1 = [1, 2, 3];

// const first = array1[0];
// const third = array1[2];

const [first, second, third] = array1;

console.log(first, second, third);


// object destructuring------------------------------------------
const object = {
    channelName: 'Hunterbiu',
    views: 1500,
}
// const channelName = object.channelName;
// const views = object.views;
const { channelName, views } = object;

console.log(channelName, views);

// rest operator-------------------------------------------------
const add2 = (...numbers) => console.log(numbers.reduce((a, b) => a + b, 0));

add2(1, 2, 3, 4, 5)  //6  1+2=3 3+3=6

//spread operator-------------------------------------------------
const array2 = [1, 2, 3];
console.log(...array2);








//ES7_ES8---------------------------------------------------------

// string.prototype.padStart.padEnd
const string = '12345';
console.log(string.padStart(10, '.'));
console.log(string.padEnd(10, '.'));

//Obejct.values----------------------------------------------------
const object1 = {
    name: 'John',
    age: 20,
    books: ['Harry Potter1, Harry Potter2'],
}

console.log(Object.values(object1));
// Object.entries
console.log(Object.entries(object1));

// Exponentiation---------------------------------------------------
console.log(Math.pow(2, 3));
console.log(2 ** 3);

//Trailing commas---------------------------------------------------
const anotherObject = {
    first: 1,
    second: 2,
    third: 3, //comma wont get error
}

console.log(anotherObject);