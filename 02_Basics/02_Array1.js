// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) // this is how we can also create Array 
// console.log(myArr[1]);

// Array methods

// myArr.push(6)   // it adds the element in the end
// myArr.push(7)
// myArr.pop()  // it removes the array from the end

// myArr.unshift(9)  // it adds the element in start
// myArr.shift() // it removes the elemen from the start
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()  // it adds all the element of the array into a string add separate it by ,

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr); // print string


// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3) // when we do slice then it will give that section whom index number we provide and the last index number will be untouched
// and also the origional array will not be changed

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)  // when we do splice then it will give the complete section which index number we provide including last index number
// and also it will remove that particular part from the array

// console.log("C ", myArr);
// console.log(myn2);


// in slice it can take negative start and end value but in splice it can take only negative start value 
// Feature	           slice(start, end)	                    splice(start, deleteCount, ...items)
// Returns          	A new array, original unchanged	     Changes the original array, returns deleted
// Negative start	    ✅ Works, counts from end	        ✅ Works, counts from end
// Negative end     	✅ Works, counts from end	     ❌ deleteCount can't be negative