//////////////////////////////// VARIABLE AND DOM BASICS /////////////////

// var name = prompt('What is your name?');
// document.getElementById('innerText').innerHTML = name;

////////////////////////////// FUNCITONS  ////////////////////////////////
/*
// simple function
function fistFn(){
    var name = prompt('What is your name?');
    var FnConsole = 'Hello' + ' ' + name;
    console.log(FnConsole);
}
fistFn();

// argumant function
function secondFn(name, age){
    var bio = 'My name is ' + name + ' and i am a ' + age + ' years old';
    console.log(bio);
}
secondFn('Alamin', 22);
*/


//////////////////////////// WHILE LOOP AND FOR LOOP ///////////////////////
/*
var num = 0;
while (num < 100) {
    num += 1;
    console.log(num);
}
while(name<10){
    name += 1;
}

for (let i = 90; i <= 100; i++) {
    console.log(i);
}
*/


//////////////////////////// STRINGS ///////////////////////



/*
let fruit = "How-are-you-doing-today?";
let fruits = "How are you doing everyday?";

name = fruit.length
name = fruit.indexOf('ou');
name = fruit.slice(1, 4);
name = fruit.replace('are', 'am');
name = fruit.toUpperCase();
name = fruit.toLowerCase();
name = fruit[3];
console.log(fruit.split('')); //SPLIT BY CARECTORS
console.log(fruit.split(" "));
console.log(fruit.split('-'));
console.log(fruits.split(' '));
*/




//////////////////////////// ARRAY ///////////////////////

/*
let fruits = ['banana', 'apple', 'juice', 'pinaapple', 'mango'];

console.log(fruits[1]); //acces value at index

fruits[4] = 'mula' //index value change

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

//Array common methods
console.log(fruits.toString()); //create string

console.log(fruits.join(' & ')); //join other element

console.log(fruits.pop(), fruits); //delete last element

console.log(fruits.push('cocacola'), fruits); //create new one last element

fruits[fruits.length] = 'new one'; //some as a push last element

console.log(fruits);

fruits.shift(); //delete first element
console.log(fruits);

fruits.unshift('peara'); // create new one first element
console.log(fruits); 

let vegatable = ['tomato', 'bagun', 'kolmishak'];
let allVegatable = fruits.concat(vegatable);
console.log(allVegatable); // many array joint

console.log(allVegatable.slice(1, 5)); //array slice

console.log(allVegatable.reverse()); //array reverse

console.log(allVegatable.sort()); //array sort

let emptyArray = [];
for (let i = 0; i < 14; i++) {
    emptyArray.push(i);
}
console.log(emptyArray);

let someNumbers = [2, 3, 32, 32, 1, 34, 1, 34, 65, 1, 0];
console.log(someNumbers);
console.log(someNumbers.sort(function(a, b) {return a-b})); //sorting in accendig
console.log(someNumbers.sort(function(a, b) {return b-a})); //sorting in decending

*/
// var guess = 'alamin'
// console.log(guess.length);


//////////////////////////// OBJECT ///////////////////////

//console.log(JSON.parse(studant)); //String to Json data




























