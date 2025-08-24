//there is a question that can we change the value of math.PI the answer is no
// because the writable property is disabled which we can check by using "getOwnPropertyDescriptor"

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);  //prints hardcoded value 3.14...
// Math.PI = 5             // tried to change its value but not possible 
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, "orderChai"));   // to check the descriptor property we have to pass the particular property or method in it


//this is how we can define its property of writable or enumerable (enumerable make it eliglble for loops)
Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}