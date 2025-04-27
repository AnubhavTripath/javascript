const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  // by using this we can access the complete elements of the object
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this);  // with this it will empty object in vs code but if we do this in browser then we will get the window object


// three ways to create a function 

//1st
function chai(){
    let username = "hitesh"
    console.log(this.username);
}

chai()


//2nd
// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }


//3rd arrow function
// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);  //in function we cannot access the 'this' keyword
// }


// chai()

// const addTwo = (num1, num2) => {  // in function if we use {} brackets then we have to return something otherwise it will give error
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2  // in arrow function if any work which we can do in single line then we do not need any brackets
// this is called implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"}) //to return a object we have to wrap it into a paranthesis


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()