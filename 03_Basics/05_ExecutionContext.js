// Javascript Execution Context

// when we write the code then it will be executed in two parts

//  when we write the code then immediately (Global Execution Context) will be created and this will always created , and it will be stored into the variable 'this'
//  this is why when we console the 'this' in browser then we get the window object

//  this is all executed on Thread , javascript is a single threaded

//  second is Function execution Context



// when we write the code then it work in two phase 
// memory creation phase , 
// execution phase


let val1 = 10;
let val2 = 5;

function addNum(num1 , num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1 , val2);
let result2 = addNum(5 , 6);


// this code execution will be done like this 

// 1.  firstly Global Execution will be created and it move into variable 'this'

// 2. Memory Creation phase , in this for all variables are stored and allocate the memory

//  Memory creation
//  val1 => undefined
//  val2 => undefined
// addNum => function definition
//  let result1 => undefined   
// let result2 => undefined

// the above is first cycle

//  then second cycle is execution phase
// in Execution phase we define its value

// val1 = 10
// val2 = 5
//  we skip the first addNum because the definition of function is already stored
// then we come to the result1 then we have to execute the addNum
//  then addNum will create a new executional context (tread) and new variable environment

// **********After completing the Executional Thread of result1 and transfering the value of result1 in global execution context*****
// result1 => 15


// due to its new executional conetxt we have to again the memory creation and the executional phase
//  every time a function is called that time a new execution context will be created for that particular function

// for addNum
// Memory creation of addNum

// val1 => undefined  (val1 which is passed in the addNum function)
// val2 => undefined 
// total  => undefined

// Execution phase of addNum
// num1 => 10  
// num2 => 5
// total => 15

// this total will be returned to the global executional context and after completing the work of new executional context will get deleted



// Call Stack

// first in call stack we have global execution context
//  when any function is added in call stack , it will get removed after its completion
//  the call stack run on LIFO last in first Out

//  if we call a function then it will be added in the callStack
//  and there is another function is called in that funnction then firstly the last function will get executed and gets removed 
// and then the first function will get finished and also removed