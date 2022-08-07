// JavaScript Array map()

// a. Roll a die and find the number between 1 to 6
let Dice;
Dice = Math.floor(Math.random() * 6)+1;
console.log("After rolling dice number = "+Dice);

// const DiceNum = []

// for(i =0; i<=6;i++)
// {
//     DiceNum.push(i);
// }
// console.log(DiceNum);
const d = new Date();

console.log(d);
// Creating Date Objects
// Date objects are created with the new Date() constructor.
// There are 4 ways to create a new date object:

const d1 = new Date(2018, 10, 24 , 10, 33, 30, 0);
console.log(d1);

const d3 = new Date(2018, 11, 24)
console.log(d3);

// Previous Century
// One and two digit years will be interpreted as 19xx:
const d4 = new Date(99, 11, 24);
console.log(d4);
// new Date(dateString) creates a new date object from a date string:
const d5 = new Date("October 13, 2014 11:13:00");
console.log(d5);

const d6 = new Date("2015-03");
console.log(d6);

const d7 = new Date("2015");
console.log(d7);

const d8 = new Date();
d8.getMonth();
console.log(d8.getMonth());

let keyString = 'a string'
 let keyobj ={}
 let keyFunc = function(){}

 let myMap = new Map()
 myMap.set(keyString, "value associated with a string");
 myMap.set(keyobj, "value associated with keyobj");
 myMap.set(keyFunc,"value associated with keyFunc");

//  geeting value 

