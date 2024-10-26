// Arrays:-

// 21) Create an array with 3 elements: string, number, boolean;

const declareArray = ["Aditi", 22, true];
console.log(declareArray);

// 22) create an array with 5 element;

const declareArray5 = ["Mango", "Banana", "Apple", "Chicko", "Watermelon"];
console.log(declareArray5);

// 23) access the first element from an array.

const element1 = ["Mumbai", "Delhi", "Chennai", "Hydrabad"];
const getFirstElem = element1[0];
console.log(getFirstElem);
// array start counting from 0 so the first element is [mumbai]

// 24) access the last element from an array.

const elementLast = ["JavaScript", "Java", "Python"];
const getLastElem = elementLast[2];
console.log(getLastElem);

// 25) Find the length of the array ;

const elementLength = ["hello", "helo", "namaskar", "namaste"];
const getLength = elementLength.length;
console.log(getLength);

// 26) iterate over an array using a 'for' loop and print each element;

const loopArray = ["mango", "apple", "banana", "cherry"];
for (let i = 0; i < loopArray.length; i++) {
  console.log(loopArray[i]);
}

// 27) iterate over an array using 'forEach()' method and print each element

const loopAll = ["Japan", "China", "Paris", "HongKong", "India"];
loopAll.forEach(loopArrayFun);

function loopArrayFun(item, index) {
  console.log(index + ":" + item);
}

// 28) Add an element to the end of an array using the 'push()' method;
const usingPush = ['one', 'two', 'three', 'four'];
usingPush.push('five');
console.log('this is push element:', usingPush);

// 29) Remove an last element from an arry using 'pop()' method;

const removeLast = ['one','two', 'three', 'four', 'five'];
removeLast.pop();
console.log('this is pop element:', removeLast);

// 30) add the element to the beginning of an array using the 'unshift()' method;

const addFirst = ['two', 'three', 'four'];
addFirst.unshift('one');
console.log('this is unshift element:', addFirst);

// extra

// remove the first element from an array using 'shift()' method.

const removeFirstElem = ['one', 'two', 'three', 'four'];
removeFirstElem.shift();
console.log('this is shift element', removeFirstElem);
