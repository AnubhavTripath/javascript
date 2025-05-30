// the promise returns the eventual completion (or failure) of an asynchronous operation

//in promise work is not done immediately , it is being set in the queue which will be executed later on certain condition

// pending have three states
// 1. pending
// 2. fulfilled
// 3. rejected

//promises are introduced in js after es6 before that for using promise we have some library like 'Q' and 'bluebird' , eventually these library is being added as default in node js

// const promise1 = new Promise(function(resolve, reject){
//     // do an async task
//     // db call, file read, api call, etc.
//     setTimeout(()=>{
//         console.log("Async task done");
//         resolve(); // this will change the state of promise from pending to fulfilled , after this .then() will be executed
//         // reject(); // this will change the state of promise from pending to rejected , after this .catch() will be executed
//     },1000)
// })

// // .then() is used to handle the fulfilled state of the promise , means it have direct connection with the resolve function
// promise1.then(function(){
//     console.log("Promise is consumed");
// })



// second way


// new Promise(function(resolve, reject){  //promise is take a callback function which have two parameters resolve and reject
//     setTimeout(()=>{
//         console.log('async method 2');
//         resolve()
//     },1000)
// }).then(function(){
//     console.log('promise 2 is consumed');
// })



//third way
//in this promise we going to see how we pass the value from the promise to the .then() method

// const promise3 = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log("Async task 3 done");
//         resolve({username: "anubhav" , email: "anu@gmail.com"}); // passing data to the resolve function
//     },1000)
// })

// promise3.then(function(data){ // data will be the resolved value from the promise which we send from the resolve function
//     console.log("Promise 3 is consumed");
//     console.log(data); 
// })



// fourth way

const promise4 = new Promise(function(resolve , reject){
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve('async task4 done')
        }else{
            reject('error failed to run')
        }
    },1000)
})

promise4.then(function(msg){
    console.log(msg);
    return msg + ' passing to next one' // this message which i returned will be get only by doing the 'chaining' we cannot get it by storing this function  in a variable
}).then(function(msg){
    console.log(msg);  // it will get the upper transferred message
    
}).catch(function(err){
    console.log(err);
    
}).finally(function(){
    console.log("Promise 4 is consumed"); // this will be executed in any case whether the promise is fulfilled or rejected
})



// fifth way

const promise5 =  new Promise(function(resolve , reject){
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({language: 'JavaScript', version: 'ES6'}); // passing object to the resolve function
        }else{
            reject('Error: Failed to fetch data');
        }
    },1000)
})

// async function consumePromise5() {  //async await does not directly handles the erroe for that we have to use the try catch block
//     const response = await promise5
//     console.log(response);
    
// }

async function consumePromise5() { // this is the async function which will consume the promise5
    try {
        const response = await promise5
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

consumePromise5()



// fetch part

async function fetchData() {
    try{
        const response = await fetch('https://api.github.com/users/AnubhavTripath'); // fetching data from the api
        if (!response.ok) { // checking if the response is ok or not
            throw new Error('Network response was not ok');
        }
        const data = await response.json(); // converting the response to json , and this is in await because the conversion itself takes time
        console.log(data); // logging the data
    }catch(error){
        console.error("Error fetching data:", error);
    }
}

// fetchData(); 


// fetch using .then() method

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
        return response.json(); // returning the response in json format
    })
    .then((data) => {
        console.log(data); // logging the data
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });



    // if we uncomment all code then we can see that the data which we are fetching from the api is coming first then the above console is being printed 
    // and we have give the timeout of 1 second to all still the api call is giveing response first