const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')  // this is an string object

// console.log(gameName[0]);
// console.log(gameName.__proto__); // the __proto__ property is used to access the prototype of an object


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)  // it exclude the last index
// console.log(newString);

const anotherString = gameName.slice(-8, 4) // it includes the last index and it can take negative values as well
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());  // it removes the extra spaces from the start and end of the string
console.log(newStringOne.trimLeft());  // it removes the extra spaces from the start of the string

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))  // gives false in boolean

console.log(gameName.split('-')); // it splits the string into an array of strings using the specified separator