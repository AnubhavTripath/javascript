// two types of data types
//  Primitive and non primitive


//Primitive
//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// primmitive data types are call by value it means when we call it anywhere then its origional 
// memory location is not shared , it is copied and what ever we do the changes it done in the copy

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') // symbol can contain even a container or a button anything

console.log(id === anotherId);  // it print false because symbol can have same value but it will always be unique

// const bigNumber = 3456543576654356754n  // adding 'n' at end will make it big integer



// Reference (Non primitive)
// when we call it to use then its memory location is shared and if we do changes then it done in origional

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3