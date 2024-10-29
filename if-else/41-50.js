// if-else conditions

// 41) write an if statement that check if a variable named 'age' is less than 18. if true print 'you are too young;

let age = 15;
if (age <= 18) {
  console.log("You are too young..");
}

// 42) write an if-else statement that checks if a variable name 'score' is greater than or equal to 60. if true, print 'you passed..' or print 'you failed';

let score = "90%";
if (score <= "50%") {
  console.log("you failed");
} else {
  console.log("you Passed..");
}

// 43) write if-else statement that check if a variable name 'temperature' is less than 32. if true print 'its freezing' or print 'it's not freezing';

let temperature = 22;
if (temperature >= 32) {
  console.log("its freezing");
} else {
  console.log("its not freezing..");
}

// 44) write if-else that check if a variable named 'number' is postive, negative, or zero print the corresponding message for each case.

let number = 0;
if (number > 0) {
  console.log("its an POSITIVE NUMBER");
} else if (number >= 0) {
  console.log("its an ZERO");
} else {
  console.log("its an NEGATIVE NUMBER");
}

// 45) write if-else statement that check if a variable named 'speed' is greater than 65. if true print 'You are speeding..' else print 'You are not speeding..';

const speed = 65;
if (speed >= 65) {
  console.log("You are speeding...");
} else {
  console.log("You are not speeding..");
}

// 46) write an if-else statement that check if a variable 'checkAge' is less than 13 or between 13-19 or greater than 19 and print the message accordingly ex:- child, teenager, adult

const checkAge = 20;
if (checkAge <= 13) {
  console.log("hello my Child");
} else if (checkAge <= 19) {
  console.log("hello My Grown teenager");
} else {
  console.log("adult");
}

// 47) write a if-else statement that check if variable name 'x' is divisible by both '3 and 5' if true print 'x' is divisible by 3 and 5 or print 'x is not divisible by 3 and 5'
const x = 10;
if (x % 3 === 0 && x % 5 === 0) {
  console.log("X is divisible by 3 and 5");
} else {
  console.log("X is not divisible by 3 and 5");
}

// 48) write an if-else statement that check if the variable named 'year' is a leap year. if true print 'its leap year' or print 'its not an leap year';
// how to find:- if its divisible by 4 its an leap year

const year = 2012;
if (year % 4 === 0) {
  console.log("its an leap year");
} else {
  console.log("its not an leap year");
}

// 49) write an if-else statement that check if a variable named 'weather' is  'sunny' if true print 'wear sunscreen' or print 'no need of sunscreen'
const weather = "sunny";
if (weather === "sunny") {
  console.log("Wear sunscreen");
} else {
  console.log("no need of sunscreen");
}

// 50) write if-else statement that check if a variable name 'time' is less than or equal to 12. if true print 'good moring' or print 'good afternoon';
const time = new Date().getHours();
if (time <= 12) {
  console.log("Good Morning");
} else if (time >= 7) {
  console.log("Good Evening");
} else {
  console.log("Good Night");
}
