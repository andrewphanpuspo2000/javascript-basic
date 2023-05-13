// // console.log("hellow world");
// /* jsofpjdpopofm */

// //variable
// //var,let,conts

// // var name = "Sam newthon";
// // let age = 55;
// // const dateofbirth = "10-11-2000";
// // let old = age;
// // name = "Andrew Phan Puspo";
// // age = 23;
// // console.log(name);
// // console.log(age);
// // console.log(dateofbirth);
// // console.log(dateofbirth, name);
// // console.log(old);

// //operators
// // let a = 5;
// // const b = 6;

// // let ans = a % b;

// // a++;
// // console.log(++a);
// // console.log(a);

// //----- comparison

// let v1 = "19";
// let v2 = 19;
// console.log(v1);
// v1 = 1;
// console.log(v1);
// // // const result = v1 === v2;
// // const result = v1 >= v2;

// // console.log(result);

// const gj = 33;
// const hj = undefined;
// const ad = null;

// console.log(typeof ad);

// // reference type
// // objects/
// const obj = {
//   name: "Andrew",
// };

// const obj2 = obj;
// obj.name = "Ruth";
// console.log(obj.name, obj2.name);

// //function
// function addTwoNumbers(num1, num2) {
//   //   let a = 2;
//   //   let b = 3;
//   //   console.log(a + b);
//   console.log(num1 + num2);
// }
// addTwoNumbers(12, 14);
// // math
// console.log(Math.PI);
// //round
// console.log(Math.round(4.4));
// console.log(Math.pow(2, 3));
// console.log(Math.sqrt(64));
// console.log(Math.ceil(3.4));
// console.log(Math.floor(7.9));
// console.log(Math.min(1, 3, 56, 7, 8, -4));
// console.log(Math.max(1, 3, 56, 7, 8, -4));
// console.log(Math.round(Math.random() * 20));

// // switch
// let a = 3;
// switch (a) {
//   case 2:
//     console.log("noansjna");
//   case 3:
//     console.log("bdsajbkda");
// }

// // error handling
// try {
//   const s = 1;
//   s = 7;
//   console.log(x);
// } catch (e) {
//   console.log(e.message);
// } finally {
//   console.log("I am inside the finally");
// }

// setTimeout;
// function hello() {
//   console.log("something");
// }
// let output = setTimeout(hello, 5000);

// clearTimeout(output);

// //time interval
// // let i = 0;
// // const timeinterval = setInterval(function addName() {
// //   console.log(" inside the interval " + i++);
// //   if (i == 10) {
// //     clearInterval(timeinterval);
// //   }
// // }, 1000);

// // arrow function

// // const addTwoNumber = (num1, num2) => console.log(num1 + num2);

// // addTwoNumber(5, 5);
// // function addTwoNumbersss(num1, num2) {
// //   sum = num1 + num2;
// //   return sum;
// // }
// // console.log(addTwoNumbersss(2, 4));

// // // forloop

// // for (let i = 0; i <= 10; i++) {
// //   console.log(i);
// // }

// // while loop
// // let i = 1;
// // while (i < 10) {
// //   console.log(i);
// //   i++;
// // }
// // do while loop
// let i = 1;
// do {
//   i++;
//   console.log(i);
// } while (i < 10);

// // string
// const str = "Name is good  ";
// console.log(typeof str);

// // length
// const str1 = str.length;
// console.log(str1);

// // uppercase
// const val = str.toUpperCase();
// console.log(val);

// const val1 = str.indexOf("d");
// console.log(val1);

// //replace
// const val2 = str.replaceAll("a", "good");
// console.log(val2);

// // substring
// const val3 = str.substring(1, 3);
// console.log(val3);

// //slice
// const val4 = str.slice(2, 5);
// console.log(val4);

// // includes
// const val5 = str.includes("good");
// console.log(val5);

// // split
// const val6 = str.split(" ");
// console.log(val6);

// // search
// // will return the index of first letter
// const val7 = str.search("Name");
// console.log(val7);

// // trim
// const val8 = str.trim();
// console.log(val8.length);
// console.log(str.length);

// // concatination
// const concat = (name) => {
//   return `My name is ${name}`;
// };

// var username = concat("Andrew");
// console.log(username);
// var name1 = concat("APP");
// console.log(name1);

// // Array
// const fruits = ["Apple", "Banana", "Orange", "mango", 23, 313];
// console.log(fruits);

// // add item to the end of list
// fruits.push("Water melon");
// console.log(fruits);
// // add item to the beginning of list

// fruits.unshift("Water melon");
// console.log(fruits);

// // remove item

// const remove = fruits.pop();
// console.log(remove);

// const remove1 = fruits.shift();
// console.log(remove1);
// console.log(fruits);

// // const data = fruits.splice(2, 3);

// // console.log(data);
// //only work for number
// const data2 = fruits.sort((a, b) => b - a);

// console.log(data2);

// //loop
// const fruit2 = ["sadm.", "nsda"];

// fruit2.forEach((item, i) => {
//   console.log(i, item);
// });

// const f = fruit2.map((item, i) => {
//   return "item-" + item;
// });

// console.log(f);

// const fr = fruit2.filter((item, i) => {
//   return item.includes("n");
// });

// console.log(fr);

// // challenge
// // 1
// console.log("Challenge 1");
// let arr = [];

// let number = 0;

// for (let i = number; i < 50; i++) {
//   let num = Math.round(Math.random() * 100);
//   arr.push(num);
// }
// console.log(arr);

// // Challenge2
// const sort = arr.sort((a, b) => b - a);
// console.log(sort);

// // challenge 3
// const total = arr.reduce((subtotal, num) => subtotal + num);

// console.log(total);

// // challenge 4
// let odd = [];
// let even = [];
// arr.forEach((itm, i) => {
//   if (itm % 2 == 0) {
//     even.push(itm);
//   } else {
//     odd.push(itm);
//   }
// });

// console.log(odd, even);

// // challenge 5
// const temparr = [];
// const nonduplicate = arr.map((itm) => {
//   if (temparr.includes(itm)) {
//     return false;
//   } else {
//     temparr.push(itm);
//   }
// });

// console.log(temparr);

// // object
// const person = {
//   name: "sam",
//   age: 22,
// };

// const p2 = { ...person }; //spread
// console.log(person.name);
// person.city = "Sydney";

// console.log(person);
// // delete person.age;
// console.log(person, p2);

// const { name, ...rest } = person; //destructuring

// console.log(name);
// console.log(rest);

// const paraph = (obj) => {
//   return `
//  My name is ${name} and add is
//  `;
// };

// let tt = paraph({ name });

// console.log(tt);

// // date
// const date = Date();
// const date2 = new Date("2020-11-02");
// const date1 = Date.now();

// var dateminute = date2.getMinutes();
// console.log(date1);

// let product = {
//   nameProduct: "Lays",
//   exp: "2025-08-01",
// };
// const products = (name) => {
//   const nowdate = new Date("2023-03-09");
//   // let getYear = exp.getFullYear() - nowdate.getFullYear();
//   // let getMinutes= exp.getMonth()- nowdate.getMonth();
//   // console.log(typeof nowdate.getFullYear());
//   //  if(){

//   // }
//   // return `${nameProduct} is not exprired. ${getYear} years left until expired`;
// };

// const { nameProduct, exp } = product;

// console.log(products(nameProduct, exp));

// const newapp = {
//   name: "flooter",
//   founder: "Andrew",
//   value: 2000000,
//   HQ: "Shanghai",
// };

// const { ...restapp } = newapp;

// const trackfunct = ({ name, founder, value, HQ = "US" }) => {
//   return `${name} is a tech company that established by ${founder} and
//   now has been valued more than ${value}. It is located in ${HQ}`;
// };

// const person1 = trackfunct(restapp);

// console.log(person1);

// let sentence = "new manager";

// let num = 0;
// const decsentence = (sen) => {
//   let sent = sen;
//   do {
//     let tempstr = sent.substr(num, sent.length);
//     console.log(tempstr);
//     num++;
//   } while (num < sent.length);
// };

// const example = decsentence(sentence);

// const slice = sentence.slice(0, 3);
// console.log(sentence.length);

// const arr4 = [2, 3, 14, 10, 12, 11];

// function filtering(num) {
//   if (num > 6 && num <= 11) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const filterbetween = arr4.filter((itm) => {
//   if (itm > 2) return true;
//   else return false;
// });

// console.log(filterbetween);

// const printNew = () => {
//   let date = new Date();
//   console.log(date.toLocaleTimeString());
// };

// // const intervalTest = setInterval(printNew, 1000);

// const arrobj = [
//   {
//     name: "Eric",
//     Age: 23,
//   },
//   {
//     name: "Todd",
//     Age: 25,
//   },
// ];

// let checkfunc = (age) => {
//   arrobj.forEach((item) => {
//     if (item.Age < age) console.log(`My name is ${item.name}`);
//   });
// };

// const trying = checkfunc(24);

// // console.log(trying);

// const divider = {
//   array: [20, 21, 34, 33, 45, 60, 40],
// };

// const { array } = divider;

// const checkevennumber = (check) => {
//   check.forEach((it) => {
//     let cEven = it % 2;
//     if (cEven === 0) {
//       console.log(it);
//     }
//   });
// };

// const evenFunction = checkevennumber(array);

// // 1,3,4,6,5,2

// const person6 = () => {
//   const bio = () => {
//     return "has a height";
//   };
//   return bio;
// };

// let tempper = person6();

// console.log(tempper());

// //class

// class Fruit {
//   constructor() {
//     console.log("constructor");
//   }
// }

// const fruit = new Fruit();

// //this keyword
// // this keyword is an object that the fuction is a property of

// // pure fuction
// let names = "John";
// const sayHello = (greeting) => {
//   return `${greeting} from ${names}`;
// };

// console.log(sayHello("Hola"));

// // higher order fucntion
// function greet(name, callback) {
//   console.log("Hello", name);
//   callback();
// }

// function sayhello() {
//   console.log("hi there");
// }

// greet("Max", sayhello);

// // recurssion
// let sum = 0;
// let myArray = [3, 4, 5, 6, 7];

// const calculateSum = () => {
//   if (myArray.length) {
//     sum += myArray.pop();
//     calculateSum(myArray);
//   }
// };

// const documents = document.getElementById("first");
// console.log(documents);

// const document1 = document.getElementsByClassName("message");
// console.log(document1);

// // const changeback = documents.getElementById("first");

// documents.style.background = "red";
// setTimeout(() => {
//   documents.style.background = "green";
// }, 3000);

// const elem = document.getElementById("info1");
// console.log(elem.innerText);

// const secondParagraph = document.querySelectorAll("ul > li:last-child");
// console.log(secondParagraph.length);

// for (let i = 0; i < secondParagraph.length; i++) {
//   console.log(secondParagraph[i].innerText);
// }

// for (let item of secondParagraph) {
//   console.log(item.innerHTML);
// }

// //single point selector
// elem = document.querySelector(".message");
// elem.innerHTML = "<strong>Hello from the empty div</strong>";
// console.log(elem.innerHTML);

// function myFunction() {
//   alert("you are clicking");
// }

// const eleme = document.querySelector("#demo");

// eleme.addEventListener("click", () => {
//   eleme.innerHTML = "Text is changed";
// });

// const element1 = document.querySelector("body");
// element1.addEventListener("load", () => {
//   element1.style.background = "blue";
// });
// if there are more than 1 same element must use loop
let element2 = document.querySelector("ul");
element2.addEventListener("mouseover", () => {
  element2.style.background = "blue";
});

// let studentdata = `students:[{"name":"paul","age":23},{"name":"Chris","Age":23}]`;

// // console.log(JSON.parse(studentdata));

// let stud = '{"name":"Andrew","age":12}';

// console.log(JSON.parse(stud));
