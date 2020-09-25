////////////////////////////// LET AND CONST
// LET -->   1. BLOCK SCOPING
//           2. VALUE CAN CHANGE

// CONST --> 1. BLOCK SCOPING
//           2.VALUE CAN'T CHANGE

// VAR  ---> 1. VALUE CAN CHANGE 
//           2. GLOBAL AND FUNCTION SCOPE

// if(true) {
//     var firstName = 'Alamin';

//     let lastName = 'Islam' //block scope
// }

// console.log(firstName);
// console.log(lastName);

//////////////////////////////////////////ARROW FUNCTION
// const nameSort = (a, b) => {
//     console.log(a + b);
// }
// nameSort(2, 4);

// const func = () => 'hello'
// console.log(func());


//////////////////////////////////////////DEFAULT PARAMETARS
// const fullName = (first, last) => {
//     console.log(`${first} it is a first name `)
// }

// fullName('alamin');


///////////////////////////////////////// ITERATION LOPPING ARRAY, OBJECT
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

//----------------VS------------------

// for(let value of myArray) {
//     console.log(value);
// }
// myArray.forEach((value) => {
//     console.log(value);
// })
// myArray.map((value) => {
//     console.log(value);
// })


// newArray = newArray.map((value) =>{
//     return value;
// }).filter((value) => {
//     if(value == 'banana') {
//         return false;
//     } else {
//         return true
//     }
// })
// console.log(value);



/////////////////////////////////////// DESTRUCTURING OBJECT

// let fullName = {
//     first: 'alamin',
//     last: 'islam'
// }
// let first = fullName.first;
// let last = fullName.last;

//------------------------- VS -------------------------
// let { first, last } = fullName;

// let users = [
//     {
//         first: 'alamin',
//         last: 'islam'
//     },
//     (user) => {
//         console.log(user);
//     },
//     (name) => {
//         console.log(name);
//     }
// ]

// let [newUser, setUser, setName ] = users;

// console.log(newUser);

// setUser({first: 'Adnan', last: 'ahmed'})

// setName({first: 'Rohim', last: 'ahmed'})



/////////////////////////////////////// PROMISE
// let promise = new Promise((resolve, reject) => {
//     setTimeout( () => {
//         resolve({
//             first: 'Alamin',
//             last: 'Islam'
//         });
//         // reject('Something went wrong')
//     }, 2000)
// })

// promise.then((response) => {
//     console.log('Here is the response after 2s');
//     console.log(response);
// }).catch((error) => {
//     console.log(error);
// })



////////////////////////////////////////FETCH DATA FROM API
// let userPromise = fetch('https://randomuser.me/api/');
// console.log(userPromise);

// userPromise.then((response) => {
//     return response.json();
// })
// .then((resData) => {
//     console.log(resData.results[0].name.first);
// })
// .catch((error) => {
//     console.log(error);
// })


////////////////////////////////////////////// OOP PROGRAMING

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.fullName = function() {
        console.log(`${this.firstName} - ${this.lastName}`);
    }
}

Person.prototype.fullNameProto = function() {
    console.log(`${this.firstName} - ${this.lastName} with prototype`);
}

const name = new Person('alamin', 'islam');
console.log(name.fullName());
console.log(name.fullNameProto());
































