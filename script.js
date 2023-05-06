// console.log("hellow world");
/* jsofpjdpopofm */

//variable
//var,let,conts

// var name = "Sam newthon";
// let age = 55;
// const dateofbirth = "10-11-2000";
// let old = age;
// name = "Andrew Phan Puspo";
// age = 23;
// console.log(name);
// console.log(age);
// console.log(dateofbirth);
// console.log(dateofbirth, name);
// console.log(old);

//operators
// let a = 5;
// const b = 6;

// let ans = a % b;

// a++;
// console.log(++a);
// console.log(a);

//----- comparison

let v1 = "19";
let v2 = 19;
console.log(v1);
v1 = 1;
console.log(v1);
// // const result = v1 === v2;
// const result = v1 >= v2;

// console.log(result);

const gj = 33;
const hj = undefined;
const ad = null;

console.log(typeof ad);

// reference type
// objects/
const obj = {
  name: "Andrew",
};

const obj2 = obj;
obj.name = "Ruth";
console.log(obj.name, obj2.name);

//function
function addTwoNumbers(num1, num2) {
  //   let a = 2;
  //   let b = 3;
  //   console.log(a + b);
  console.log(num1 + num2);
}
addTwoNumbers(12, 14);
// math
console.log(Math.PI);
//round
console.log(Math.round(4.4));
console.log(Math.pow(2, 3));
console.log(Math.sqrt(64));
console.log(Math.ceil(3.4));
console.log(Math.floor(7.9));
console.log(Math.min(1, 3, 56, 7, 8, -4));
console.log(Math.max(1, 3, 56, 7, 8, -4));
console.log(Math.round(Math.random() * 20));

// switch
let a = 3;
switch (a) {
  case 2:
    console.log("noansjna");
  case 3:
    console.log("bdsajbkda");
}

// error handling
try {
  const s = 1;
  s = 7;
  console.log(x);
} catch (e) {
  console.log(e.message);
} finally {
  console.log("I am inside the finally");
}

setTimeout;
function hello() {
  console.log("something");
}
let output = setTimeout(hello, 5000);

clearTimeout(output);

//time interval
// let i = 0;
// const timeinterval = setInterval(function addName() {
//   console.log(" inside the interval " + i++);
//   if (i == 10) {
//     clearInterval(timeinterval);
//   }
// }, 1000);

// arrow function

// const addTwoNumber = (num1, num2) => console.log(num1 + num2);

// addTwoNumber(5, 5);
// function addTwoNumbersss(num1, num2) {
//   sum = num1 + num2;
//   return sum;
// }
// console.log(addTwoNumbersss(2, 4));

// // forloop

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// while loop
// let i = 1;
// while (i < 10) {
//   console.log(i);
//   i++;
// }
// do while loop
let i = 1;
do {
  i++;
  console.log(i);
} while (i < 10);
