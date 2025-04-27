// for of
// it work only on array and map object

// Its an higher order Array loops 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {  // here the num is iterator and the 'arr' is object
    // in forof loop we do not have to define the length of the array and also we dont have to increase the i++ for the iteration
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`) // it will print even the space between the hello world
}

// Maps
// maps is also kind of an object
// it contains value in key value pair
// it store the value of key and value in same order in which we insert , the normal object doesn't care about the order of insertion

const map = new Map()
map.set('IN', "India") // map always contain unique key , if keys are same then it will be skipped
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

// for (const element of map) {
//     console.log(element) // we will get the key and value both 
// }

for (const [key, value] of map) { // this is how we can access the key and value of map object
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) { 
//     console.log(key, ':-', value);
    
// }