// here we learn about the Array optimization, and how the js engine optimizes the array


// by installing the JSVU package we can get the advance features of JavaScript

const arr = [1, 2, 3, 4, 5];
// %DebugPrint(arr); // it will give error here but after installing JSVU it will work in terminal 


// Array in js are of two types
//  continious , Hopely array (hopely array is the one in which there is some empty space in between the array)
// in technical term we call continios to Packed array and Hopely array to Sparse array

// Optimization types (contious and hopely array have these abilities)

// SMI (Small Integer) optimization
//  Double (float , string , function , object , array)
//  Packed element

// SMI > Double > PACKED (For continious array)
// H_SMI > H_DOUBLE > H_PACKED (For hopely array)

const arrTwo = [1, 2, 3, 4, 5];
//  this array comes in PACKED_SMI_ELEMENTS 
// this is packed because it does not have any empty space in between the array
// this is the default type of array in JavaScript and this is the most optimized type of array in JavaScript


arrTwo.push(6.6); // now this array will become PACKED_DOUBLE_ELEMENTS
//  this is because we are adding a double value in the array which is not a small integer

arrTwo.push("Anubhav"); // now this array will become PACKED_ELEMENTS
//  this is because we are adding a string value in the array which is not a small integer or double value

// once it became the packed_double_elements or packed_elements then it will not go back to the packed_smi_elements
//  either we remove the elements due to which it became packed_double_elements or packed_elements
//  it cannot be optimized back to packed_smi_elements


arrTwo[10] = 10; // now this array will become HOLEY_ELEMENTS
//  this is because we are adding an element at the index 100 which is not a continous index


console.log(arrTwo);
console.log(arrTwo.length); // 11
console.log(arrTwo[9]); // undefined , this undefined we get is very costly operation in JavaScript

//  in a holey_elements array , if we try to search any element then it will take more time to search the element
//  beacuse if the array is packed and we search any out of bound element then it will return undefined
//  but if i search any element which lies in the array index and that index is between the holey elements then it will take more time to search the element


// if there is hole in array then these steps are being operated
// bound check
//  hasOwnProperty(arrTwo , 9) // this will check if the index 9 is present in the array or not
//  hasOwnProperty(arrTwo.protoType , 10) // this will check is it present in the prototype of the array or not
//  hasOwnProperty(Object.prototype , 10) // this will check is it present in the Object prototype or not

//  due to its prototypal nature, yeh age age search karta rehta hai , and hasOwnPropert is an expensive operation


// SMI > Double > PACKED (For continious array)
// H_SMI > H_DOUBLE > H_PACKED (For hopely array)

// use standard array methods for better performance like .map(), .filter(), .reduce(), .forEach() etc.

const arrFour = new Array(3)
// this will create an array of length 3 with empty slots , which is a HOLEY_SMI_ELEMENTS array
arrFour[0] = 1;
arrFour[1] = 2;
arrFour[2] = 3;
console.log(arrFour); // [ 1, 2, 3 ]


//  better way to create an empty array
const arrFive = [];
arrFive.push(1);
arrFive.push('2'); // this will create DOUBLE_ELEMENTS array
arrFive.push(3);
console.log(arrFive); // [ 1, '2', 3 ]
//  this will create a PACKED_ELEMENTS , now it is atleast not the holey array , it is a continious array . 
//  it will be more optimized than the holey array 