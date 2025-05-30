// scopes are of two types block scope and global scope
// block scope will be accessible only inside a block like a function or if statement , but global scope can be accessible anywhere

//var c = 300 // this is a global scope
let a = 300
if (true) {
    let a = 10  // this is a block scope
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  // this function will work 

function addone(num){
    return num + 1
}



addTwo(5) // but this will give error because we moved the function to a variable 
const addTwo = function(num){
    return num + 2
}

// this thing comes under the hoisting