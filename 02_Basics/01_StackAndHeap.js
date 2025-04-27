// in javascript memory is divided into two parts stack and heap
// stack is used for primitive data types and heap is used for non primitive data types

// the primitive data types are like string, number, boolean, null, undefined, symbol, bigint
// the non primitive data types are like array, object, function, date, regex, etc

// in primitive data type when we call any variable then it is copied to the stack and when we do any changes in it then it is done in the copy not in the original one
// in non primitive data type when we call any variable then it is copied to the heap and when we do any changes in it then it is done in the original one not in the copy

//  in non primitive the memory location is shared and in primitive the memory location is not shared


// primitive data type 

let myName = "anubhav";
let myNewName = myName; 
myNewName = "anu"

console.log(myName); // anubhav
console.log(myNewName); // anu

// we can see that both the variables are different 


// Non primitive data type

let user = {
    id: 1,
    email: "anubhav@gmail.com"
}

let userTwo = user

userTwo.id = 5

console.log(userTwo) // both will have the same user id
console.log(user);
