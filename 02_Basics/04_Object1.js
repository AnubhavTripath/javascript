// singleton
// Object.create

// object literals

const mySym = Symbol("key1")  // this is how we can create a Symbol variable , symbol is always unique


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary", // the key is also a string either we wrap it into " " or not
    [mySym]: "mykey1", // to make the key as symbol we have to put it into []
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])  

//we can access the object by using [] brackets but there is some rules
// with [] we don't need to add '.' to access the variable
// we have to pass the variable name in double quotes " "

// console.log(JsUser["full name"])
console.log(JsUser[mySym]) // to access the symbol we have to put it into []

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){  // function will be stored in the variable of Object
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  // by adding 'this' in this function we can access all the elements of that Object which is present
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());