// for in
// it work for Objects , Array , not for Map Object

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) { // this is how we can get the key
    //console.log(`${key} shortcut is for ${myObject[key]}`); // this is how we can access the value of the object with the help of key
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) { // for array also it is giving the key of the array , basically the index number. and in Object we get the keys because the keys in that are defined by us
    // console.log(key);
}

for (const key in programming) { 
    console.log(programming[key]); // to access the key we have to array then we will get its value
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) { // it will print nothing because it is not iterable
//     console.log(key);
// }