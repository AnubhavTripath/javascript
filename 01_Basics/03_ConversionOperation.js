let score = "hitesh"

// console.log(typeof score); //both console print the type string
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber); // it shows the sring is converted in number type`
// console.log(valueInNumber); // but if we print the string in number then is show NaN not a number because it is not possible


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn); // it prints true because string is not empty

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber); // i prints normal 33 bu i was converted it into string
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // exponentiation operator ** is used for power 2^3 =8
// console.log(2/3);
// console.log(2%3); // remainder operator % is used for remainder 2%3 = 2 because 3 is not divided by 2

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3); // prints helo hitesh because + operator is used for string concatenation

// console.log("1" + 2); // string + number = string
// console.log(1 + "2"); // number + string = string
// console.log("1" + 2 + 2); // string + number + number = string
// console.log(1 + 2 + "2");  // it first add 1 and 2 then when it check 3 is in string then convert itself into string and concatenate with 2

// console.log( (3 + 4) * 5 % 3);

// console.log(+true); // it prints 1 because true is converted into number 1
// console.log(+""); // it prints 0 because empty string is converted into number 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

console.log(num3) // num1 2 and 3 all print 4

let gameCounter = 100
++gameCounter;
console.log(gameCounter); // it print 101 because it is having pre increment operator

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion