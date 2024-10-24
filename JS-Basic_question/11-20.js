// 11) concatenate 2 string using + operator;

const str1 = "Aditi you can";
const str2 = " just do it, baby...";

const concatStr = str1.concat(str2);
console.log(concatStr);

// 12) Convert a NUMBER to STRING using = String() function

const Num = 42;
const convertStr = String(Num);
console.log(convertStr);
console.log(typeof convertStr);

// 13) Convert a STRING to NUMBER using = Number() function

const strLetter = "Hello";
console.log(Number(strLetter));
//: The string "Hello" cannot be directly converted to a number because it's not a numeric string. Hence, the result is NaN.
const str = "123";
const convertNum = Number(str);
console.log(convertNum);
console.log(typeof convertNum);

// 14) parse a floating-point number from a string using parseFloat();

const checkParse1 = "33.3300";
console.log(parseFloat(checkParse1));
//JavaScript displays numbers in their most concise form without trailing zeros.
const checkParse2 = "33.33";
console.log(`this is parse2 `, parseFloat(checkParse2));
// Here, 33.33 is already in its concise form, so it remains 33.33 after parsing.

// 15) parsing a INTEGER NUMBER from a STRING using parseInt();
const checkInt = '22.35';
console.log(parseInt(checkInt));
// returns 22 because it only reads the integer part before the decimal point.

// 16) Check if a number is NaN using isNaN() function;
const checkNan = "hell";
console.log(isNaN(checkNan));
const checkNan1 = '123';
console.log(isNaN(checkNan1));

// 17) check if the number is finite using isFinite() function;
const checkFinite = '123';
console.log(isFinite(checkFinite));
const checkFinite1 = 'ehl';
console.log(isFinite(checkFinite1));

// 18) Round a floating-point number to the nearest integer using Math.round();

const checkRound = 12.50;
// If the decimal part is 0.5 or greater, it rounds up. example: 12.50 = 13
// If the decimal part is less than 0.5, it rounds down. example: 12.40 = 12
console.log(Math.round(checkRound));


// 19) Truncate a floating-point number to the integer using the Math.trunc();  => remove the decimal or floating point

const removeTruncate = 12.55;
console.log(Math.trunc(removeTruncate))
// it remove the decimal or floating point 

// 20) Round th floating point number to nearest integer using Math.floor();

const checkFloor = 4.1;
console.log(Math.floor(checkFloor));
