// Array part 2

// 31) Join two array using the 'concat()' method
const arr1 = ["one", "two"];
const arr2 = ["three", "four"];
const joinArray = arr1.concat(arr2);
console.log(joinArray);

// 32) Find the index of a specific element in an array using 'indexOf()' method;
const findIndex = ["one", "two", "three", "four", "five"];
const result = findIndex.indexOf("four");
console.log(result);

// 33) remove a specific element from an array by its index using the 'splice()' method;
// array.splice(index, RemoveItemCount, (optional)item1Add, ....., itemX)

const removeElem = ["apple", "banana", "cherry", "dragonFruit"];
const store = removeElem.splice(1, 1);
console.log(store);
console.log(removeElem);

// 34) reverse the order of the element in an arry using the 'reverse()' method
const reverseElem = ["A", "B", "C", "D", "E"];
reverseElem.reverse();
console.log(reverseElem);

// 35) sort an array of number in ascendting order;
const ascOrder = [1, 5, 2, 4, 3];
const storAscenditing = ascOrder.sort((a, b) => {
  return a - b;
});
console.log(storAscenditing);

// 36) Filter the element of an array based on the condition using the 'filter()' method;

const filterProduct = ["hello", "hey", "GOOD"];
const storeResult = filterProduct.filter((word) => {
  if (word === word.toUpperCase()) {
    return word;
  }
});
console.log(storeResult);

// 37) Transform the element of an array using 'map()' method;

const names = ["John", "Mary", "Rose", "Linda"];
const usingMap = names.map((name) => {
  console.log(`Good Morning ${name}`);
});

// 38) check if all the element of an array pass a test using 'every()' method;
// check if the every element is even or not

// if any 1 number is odd(3 or 5) it will return false (every method want every number or array should pass the test to give u true output)
const numbers = [2, 4, 6, 8, 10];
const checkEven = numbers.every((num) => num % 2 === 0);
console.log(checkEven);

// 39) check if atleast one element of an array pass the test using 'some()' method;
// condition to check :=  Check if at least one element is greater than or equal to 18.
const ages = [15, 18, 21, 30];
const checkSome = ages.some((age) => {
  return age >= 18;
});
console.log(checkSome);

// 40) Reduce an array to a single value using the 'reduce()' method;
// Use .reduce() to find the sum of all elements in the array.
const number = [1, 2, 3, 4, 5];
const usignReduce = number.reduce((currVal, accu) => {
    return currVal += accu
})
console.log(usignReduce);
