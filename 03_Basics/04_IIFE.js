// Immediately Invoked Function Expressions (IIFE)


;(function chai(){  // the ';' in starting is placed for the safety , in case previous any function or code is not closed properly
    // named IIFE    // for that scenario it is the safety check
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')  // in this bracket we pass the variable 
