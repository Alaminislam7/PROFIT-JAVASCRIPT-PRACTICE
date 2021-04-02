///////////////////////////////////////adding number
// function addNumber(a, b) {
//     return a + b;
// }

// console.log(addNumber(2, 3));
// console.log(addNumber(91, 9));

///////////////////////////////////////convert minute into second
// function cMTS(minute) {
//     return minute * 60;
// }

// console.log(cMTS(2));
// console.log(cMTS(10));


///////////////////////////////////////convert age into second

// function cATS(age) {
//     return age * 12 * 30 * 24 * 60 * 60;
// }

// console.log(cATS(25));

// let fruits = [
//     'apple', 'banana', 'kamranga', 'kathal'
// ]

// function getSecondItem(item){
//     return item[1]
// }

// console.log(getSecondItem(fruits));


// let moviewResuilt;

// function banOrGoodMovie(movies) {
//     if(movies >= 7 ) {
//         moviewResuilt = 'Good movies'
//     } else {
//         moviewResuilt = 'Bad movies'
//     }

//     return moviewResuilt;
// }

// console.log(banOrGoodMovie(6));
// console.log(banOrGoodMovie(12));


///////////////////////////////////////// if string is empty

// function isEmptyString(string_text) {
//     if(string_text === ''){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(isEmptyString(''));



///////////////////////////////////////// min and max


// const numbers = [5, 4, 23, 7, 8, 45];

// function minNum(numbers){
//     return Math.min.apply(Math, numbers)

// }
// console.log(minNum(numbers));

// function findMin(numbers) {
//     let miniNum = numbers[0];

//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] < miniNum) { 
//             miniNum = numbers[i]
//         }
//     }

//     return miniNum
// }

// console.log(findMin([1, 9, 1, 3, 4, 5, 8]));


///////////////////////////////////////// sort movie ratings

// function sortBRF(numbers) {
//     //find max
//     max_num = numbers[0];
//     max_location = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         if(numbers[i] > max_num) {
//             max_num = numbers[i]
//             max_location = i
//         }
//     }

//     //swap the first and last
//     numbers[max_location] = numbers[0]
//     numbers[0] = max_num

//     return numbers
// }

// console.log(sortBRF(4, 2, 2, 4, 9, 10));


//  let promise = new Promise((resolve, reject) => {
//     setTimeout( () => {
//         resolve({
//             first: 'Alamin',
//             last: 'Islam'
//         });
//         reject('Something went wrong')
//     }, 2000)
// })

// const aPromiseRejection = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (true) {
//             reject('No! It is an error!');
//         } else {
//             resolve('I am here!');
//         }
//     }, 5000)
// })

//PROMISE HANDLE KORA

// const handleMultiplePromise = async () => {
//     const data = await Promise.all([promise, aPromiseRejection]);
//     console.log(data);
// }

// const promiseWithErrorHandle = async () => {
//     try {
//         const data = await promise;
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }

// promise.then((response) => {
//     console.log('Here is the response after 2s');
//     console.log(response);
// }).catch((error) => {
//     console.log(error);
// })
