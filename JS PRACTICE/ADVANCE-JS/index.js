// ////////////////////////////// LET AND CONST
// // LET -->   1. BLOCK SCOPING
// //           2. VALUE CAN CHANGE

// // CONST --> 1. BLOCK SCOPING
// //           2.VALUE CAN'T CHANGE

// // VAR  ---> 1. VALUE CAN CHANGE
// //           2. GLOBAL AND FUNCTION SCOPE

// //operation operations
// //const result = (0+10) * 3 / 2 - 1

// if (true) {
//   var firstName = "Alamin";

//   let lastName = "Islam"; //block scope
//   // lastName = 'ahmed'
// }

// console.log(firstName);
// console.log(lastName);

// //////////////////////////////////////////ARROW FUNCTION
// const nameSort = (a, b) => {
//   console.log(a + b);
// };
// nameSort(2, 4);

// const func = () => "hello";
// console.log(func());

// //////////////////////////////////////////DEFAULT PARAMETARS
// const fullName = (first, last) => {
//   console.log(`${first} it is a first name `);
// };

// fullName("alamin");

// ///////////////////////////////////////// ITERATION LOPPING ARRAY, OBJECT
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// //----------------VS------------------

// for (let value of myArray) {
//   console.log(value);
// }
// myArray.forEach((value) => {
//   console.log(value);
// });
// myArray.map((value) => {
//   console.log(value);
// });

// newArray = newArray
//   .map((value) => {
//     return value;
//   })
//   .filter((value) => {
//     if (value == "banana") {
//       return false;
//     } else {
//       return true;
//     }
//   });
// console.log(value);

// /////////////////////////////////////// DESTRUCTURING OBJECT

// let fullName = {
//   first: "alamin",
//   last: "islam",
// };
// let first = fullName.first;
// let last = fullName.last;

// //------------------------- VS -------------------------
// let { first, last } = fullName;

// let users = [
//   {
//     first: "alamin",
//     last: "islam",
//   },
//   (user) => {
//     console.log(user);
//   },
//   (name) => {
//     console.log(name);
//   },
// ];

// let [newUser, setUser, setName] = users;

// console.log(newUser);

// setUser({ first: "Adnan", last: "ahmed" });

// setName({ first: "Rohim", last: "ahmed" });

// /////////////////////////////////////// PROMISE
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({
//       first: "Alamin",
//       last: "Islam",
//     });
//     // reject('Something went wrong')
//   }, 2000);
// });

// promise
//   .then((response) => {
//     console.log("Here is the response after 2s");
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ////////////////////////////////////////FETCH DATA FROM API
// let userPromise = fetch("https://randomuser.me/api/");
// console.log(userPromise);

// userPromise
//   .then((response) => {
//     return response.json();
//   })
//   .then((resData) => {
//     console.log(resData.results[0].name.first);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ////////////////////////////////////////////// OOP PROGRAMING

// // CLASS==============================================2

// function name() {
//   return (name = "alamin");
//   console.log(name);
// }
// name.lastName = "Islam";
// name.funllName = "alaminislam";
// // console.log(name());
// console.dir(name);

// // CLASS==============================================3

// function person() {
//   this.firstName = "alamin";
//   this.lastName = "islam";
//   console.log(this);
// }
// const alamin = new person();
// console.log(typeof alamin);

// // CLASS==============================================4

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.fullName = function () {
//     console.log(`${this.firstName} ${this.lastName}`);
//   };
//   console.log(this);
// }
// console.dir(Person);
// Person.prototype.fullNameProto = function () {
//   console.log(`${this.firstName} ${this.lastName}`);
// };
// const alamin = new Person("alamin", "islam");
// const adnan = new Person("adman", "suzon");
// console.log(alamin.fullName());
// console.log(adnan.fullName);

// // CLASS==============================================5
// //INHERITANCE

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.fullName = function () {
//     console.log(`${this.firstName} ${this.lastName}`);
//   };
//   console.log(this);
// }
// console.dir(Person);
// Person.prototype.fullNameProto = function () {
//   console.log(`${this.firstName} ${this.lastName}`);
// };

// function Profession(firstName, lastName, profession) {
//   Person.call(this, firstName, lastName);
//   this.profession = profession;
// }

// const alamin = new Profession("adnan", "islam", "developer");
// const adnan = new Person("adman", "suzon");
// console.log(alamin.fullName());
// console.log(alamin.fullName());

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;

//   this.fullName = function () {
//     console.log(`${this.firstName} - ${this.lastName}`);
//   };
// }

// Person.prototype.fullNameProto = function () {
//   console.log(`${this.firstName} - ${this.lastName} with prototype`);
// };

// const name = new Person("alamin", "islam");
// console.log(name.fullName());
// console.log(name.fullNameProto());












// //************************************************************************************************************************************************************* LEARN WITH SUMIT */

//------------------------------------------FAT ARROW FUNCTION
// //ES6 fat arrow function
// var javascript = {
//   name: "Javascript",
//   libraries: ["React", "Angular", "Vue"],
//   printLibraries: function () {
//     // var self = this; //for this work
//     this.libraries.forEach(function (a) {
//       // console.log(`${self.name} loves ${a}`); //for this work
//       console.log(`${name} loves ${a}`);
//     });
//   },
// };

// javascript.printLibraries();
// //     ||
// //     ||
// //     ||
// // -----------

// var javascript = {
//   name: "Javascript",
//   libraries: ["React", "Angular", "Vue"],
//   printLibraries: function () {
//     this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`))
//   },
// };


//------------------------------------------TRUTHY AND FALSY VALUE

// //ALWASE FALSE VALUE
// //FALSE, 0, "", NULL, UNDEFINED, NAN

//------------------------------------------TURNARY OPERATIOR
// var a = 5;
// var result = (a <= 4) ? "chield" : "young"
// var result = (a <= 4) ? "chield" : (a >= 5) ? "poor" : "young"


//------------------------------------------ARRAY FIND()
// numbers = [2, 4, 5, 10];
// var result = numbers.find(function (currentValue) {
//     return currentValue > 5
// })
// console.log(result());


//------------------------------------------FIND INDEX
//  var numbers = [2, 4, 5, 10];
// var result = numbers.findIndex((currentValue, index, arr) {
//     return currentValue > 2;
// })
// console.log(result);


//------------------------------------------ARRAY FILTERS
// var numbers = [1, 2, 4, 5, 10];
// var result = numbers.filter((currentValue, index, arr) {
//     return currentValue > 2;
// })
// console.log(result);

//------------------------------------------ARRAY SPLICE
// var numbers = [1, 2, 4, 5, 10];
// var result = numbers.splice(1, 2, 23, 43, 6)
// console.log(result);
// console.log(numbers);



//------------------------------------------ARRAY REDUCE
// var numbers = [1, 2, 4, 5, 10];

// var sum = numbers.reduce((prevValue, currentValue, currentIndex, arr) => {
//     return prevValue + currentValue
// }, 0)

// console.log(sum);

//------------------------------------------FOR LOOP FOR IN= array index, FOR OF=array value
// const myObj = {
//     name: 'Javascript',
//     estd: '2020',
//     founder: 'Brendan Eich'
// }
// for(property in myObj) {
//     console.log(property);
// }

// var keys = Object.keys(myObj);
// var values = Object.values(myObj)
// var keysValues = Object.entries(myObj)



//------------------------------------------SPREED OPERATOR
// // [...numbers, 1, 3, 4]


//------------------------------------------REST OPERATOR
// function myFunc(a, ...params) {
//     console.log(a);
//     console.log(params);
// }
// myFunc(3, 4, 5, 2, 6);


//------------------------------------------DESTRUCTING
// const user = {
//     id: 232,
//     name: "sakib",
//     age: 32,
//     // edication: {
//     //     dagree: "master"
//     // }
// };

// const {age, name} = user;
// console.log(title);


// const { education: {degree} = {} } = user;
// console.log(degree);

//------------------------------------------array
// var numbers = [1, 3, 4, 3, [23, 53, 232], 45];
// var [, , [, a, b ]] = numbers;

// var a = 1;
// var b = 2;

// [b, a] = [a, b]
// console.log(a, b);



// ES6 GENERATORS WHAT | WHY | HOW

//------------------------------------------ITERATOR 

// let numbers = [1, 2, 3];
// let iterator = numbers[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());




//------------------------------------------GENERATORS
//HINTS: GENERATOR AKTA AKTA KORA VALUE GENERATE KORE !

// function *generator() {
//     yield 1
//     yield 2
//     return 'I\'m finished'
//     yield 3
//     yield 4
//     yield 5
// }

// let iterator = generator();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());



//------------------------------------------OBJECT ITERATORS


// let object = {
//     value1: 1,
//     value2: 2,
//     value3: 3,
//     value4: 4
// };

// function *generator(obj){
//     const entires = Onject.entires(obj);
//     for(let element of entires) {
//         yield element[1];
//     }
// }

// const iterator = generator(object);
// for(let element of iterator) {
//     console.log(element);
// }

//------------------------------------------ITERATOR RANGE
// function *range(start, end, step){
//     let current = start;

//     while(current < end){
//         yield current;
//         current +=step;
//     }
// }
// var iterator = range(1, 1000, 5);
// console.log(iterator.next());
// console.log(iterator.next());

