//  doing this in browser console

const hero = ['anubhav' , 'anurag']

// hero  // by calling the name of array in the browser console we will get the array 
// values with their index and the length property whhich tells the actual count of array length

// along with that we get the prototype in which we get more functionality , inside the protype we will get another prototype

// javascript have prototypal nature , it means if we doing any work it does not found then it try to move next and next until it gets the thing
//  javascript haar nhi manti , woh upar upar jati rehti hai agar use koi cheej nhi milti toh , layer (parent) to layer upar jati h 


// the 'new' , 'this' and 'inheritance' these features comes with the protype


// in javascript almost everything is object
// Array -> Object -> null (object does not have any parent)
// string -> Object -> null
// function -> object 'function is also a object'

//  in javascript everything is a object , they have the functionality of object , like the function have the functionality of the object 
//  but generally we don't use it

function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2 // accessing by using . is generally done in the object

console.log(multiplyBy5(5)); // working as usual function
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype); // accesssing the prototype and this will give {} because we are in node

// object is the last parent in the javascript and the js is having protypal behavior means yeh upar upar jati rehti h until unless use mill na jaye jo hamne manga
// after object there is no parent so it is null 

