let myName = "John Doe     ";

console.log(myName.length); // 13 , it counted the spaces as well

//  i want to create a method which will trim the spaces from the start and end of the string and give me the actual length of the string


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
};


//  some theory about prototype
// if i create any prototype method directly in the Object then it will be avialable in alll (array , object functions)
// because all of them are coming from the Object , and if i create any method or property in the parent then it will be available in all the child objects as well
// javascript is Object Oriented Programming Language

// But if i create a prototype method in the Array or in Function or in String then it will be available only in its own type

Object.prototype.anubhav = function () {
    console.log("Anubhav is Batman");
}

Array.prototype.batman = function () {
    console.log("Batman is Anubhav");
}

// myHeros.batman(); // Batman is Anubhav
// myHeros.anubhav(); // Anubhav is Batman  , (anubhav is present also in the array because it is coming from the Object prototype)

// heroPower.anubhav() ; // Anubhav is Batman
// heroPower.batman(); // TypeError: heroPower.batman is not a function , because batman method is defined only for the Array prototype, not for the Object prototype


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport  // by using __proto__ we are inheriting the properties of TeachingSupport in  TASupport
}

console.log(TASupport.isAvailable)

Teacher.__proto__ = User  // this is the other way to inherit properties from User to Teacher, but this is not recommended in modern JavaScript
// now Teacher will have access to User properties


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)  // setPrototypeOf takes two values , in first kisme add karna hai and in second se add karna hai
// now TeachingSupport will have access to Teacher properties , underlying it will use __proto__ to inherit the properties


let newUser = "Anubhav       ";

String.prototype.trueLength = function () {
    console.log(`Actual length of the string is ${this.trim().length}`);
}
newUser.trueLength(); // Actual length of the string is 7