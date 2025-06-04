// fetch introduced in node js in 1st feb 2022 , in browser it is available from 2015

// the global fetch() method starts the process of fetching a resource from the network , returns promise which is fulfilled once the response is available

//interview question:
// when a request is made by fetch() method , and it gets error of html error 404 then in which state the promise will be? resolve or reject?

// the answer is it will give response and the promise state is resolved state , it will come in reject state when the fetch() unable to make the request

const headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer token"
}

fetch('https://api.github.com/users/AnubhavTripath', { headers }) //this is how we can pass headers to the fetch request
    

// in previous we have seen that fetch get the data faster than other promises that because fetch() which is comes in web Api part have a speciacl Micro task Queue 
// whom speed is faster also called as (priority queue) .

// a screenshot of javascript is been taken in the gallery

// the web api()  part have a task Queue , in which things comes like setTimeout setInterval or normal promises and dom api when these occurs then it will be first register 
//  in a call back task queue and from that callback queue it goes to the js engine call stack 

// if fetch() micro task queue and task queue from the web Api both work is being triggered or like called after same time then fetch() micro task queue added first in the js engine queue



//  response = fetch('api/something.com')

// it works in two parts 

//  first is firstly reservere a memory for the Data: _ which is being initially empty
//  and in first part it also have onFullfilled[] and onRejection[] which is same as the promise state of reject and resolve


//  second part goes for api request , in network either it will compltely goes to the backend either in between disruppted
//  if it unabled to go to the backend then it comes to the onRejection part either it will come to the onFullfilled it does not matter what we will get 404 error it comes in fulfilled

//  the data in first part will have the response from the api and which we are storing the variable name response 

// now thats why we always yse response.data to access the data which we get from the api