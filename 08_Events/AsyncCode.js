// Javascript is a synchronous language
//  means it run line by line
//  it is a single threaded language

// it have "Execution context"
//  -> console.log 1
//  -> console.log 2
// callstack , memoryHeap

// each operation waits for the last one to complete before executing
//  it work on next work after completing previous work


// blocking code (synchronous)
//  Block the flow of program

// non Blocking code (Asynchronous)
//  do not block execution


// in java script engine we have memory heap and call stack
// javascript is never be given self aloned 
// for we it will come with the web api in which we will get that setTimeout and setInterval ,  dom api , fetch()
// if are printing 1 , 2 ,3 and i moved 2 to a setTimeout function to execute in 0 seconds then it will not print like 1, 2, 3 
//  it will print like 1 ,3 ,2 because we moved 2 in setTimeout and the setTimeout comes in web api part for that it will have separate call till that time 1 and 3 gets printed


setTimeout(function(){
    console.log("hello anubhav");
    
},2000) //it will run after 2 second

setInterval(function(){
    console.log("hii");
    
},2000) // it will run continiously in interval of 2 second

