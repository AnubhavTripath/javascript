//  doing this in browser console

const hero = ['anubhav' , 'anurag']

// hero  // by calling the name of array in the browser console we will get the array 
// values with their index and the length property whhich tells the actual count of array length

// along with that we get the prototype in which we get more functionality , inside the protype we will get another prototype

// javascript have prototypal nature , it means if we are applying any property or method to the object then it will go to the prototype and check if it is present there or not
// if it is not present there then it will go to the parent prototype and check if it is present there or not 
//  javascript haar nhi manti , woh upar upar jati rehti hai agar use koi cheej nhi milti toh , layer (parent) to layer upar jati h jabtak use null na mill jaye


// the 'new' , 'this' and 'inheritance' these features comes with the protype


// in javascript almost everything is object
// Array -> Object -> null (object does not have any parent)
// string -> Object -> null
// function -> object 'function is also a object'

//  in javascript everything is a object , they have the functionality of object , like the function have the functionality of the object 
//  but generally we don't use it

function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = function (){
    console.log(`the  num is ${this.num}`)
} // adding a property to the function , just like we add property to the object

// we can only create new instance of the method , which can be inside a function or inside a object and a method is a function inside a object

// console.log(multiplyBy5(5)); // working as usual function
// console.log(multiplyBy5.power); 
console.log(new multiplyBy5.power); 
// console.log(multiplyBy5.prototype); // accesssing the prototype and this will give {} because we are in node

// object is the last parent in the javascript and the js is having protypal behavior means yeh upar upar jati rehti h until unless use mill na jaye jo hamne manga
// after object there is no parent so it is null 


// in javascript everything is a object , even the function is a object
// so we can add properties to the function as well


function createUser(name, age) {
    // const name = name; // SyntaxError: Identifier 'name' has already been declared
    // const age = age;
    this.name = name; // 'this' refers to the current execution context
    this.age = (age);
    // return this  if we are not using the new keyword then return this will send the entire function 
}

// when the function is internally an object then we can add method to it just like we add properties to the object by using . notation
// the method we are adding to the function will be available to all the instances of the function

// the method we are adding in function is just like the method which is available in the prototype

createUser.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
const user2 = new createUser('anu', 25)
const user = new createUser('Anubhav', 25) // creating a new instance of the createUser function
// without the new keyword if we try to use the property which we injected inside the function then it will give error that this property is not avialable
// user is now an object with properties name and age, and it has access to the greet method from the prototype


// user.greet()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
