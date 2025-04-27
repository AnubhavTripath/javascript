
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){  // by writing = "sam" the default username will be sam and which will be replaced when any username we pass
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){ // the '...' here it is called rest operator , this same called as spread operator depends on the usecase
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000)) // the 500 and 2000 only goes to the ...num1 spread operator , the 200 and 400 gone to val1 and val2

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// we can  pass the object in a function either create it first then pass it in function
// either we can create the object in the function itself
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));