// object literal

// const user = {  // this is an basic object literal , object literal means a complete basic object
//     username : "anubhav",
//     account_type : "admin",
//     getUserDetails: function(){
//         console.log(this); // it will print complete object
        
//     }
// }

// the username , account_type these are called the object properties as like in array we have property name .length()

// 'this' keyword is used for the current context it will prferr that you are talking or accessing that particular data inside you are

// console.log(user.getUserDetails())

// console.log(this); // it prints window object in browser but in node it prints empty {}



//constructor fuction

// const promiseOne = new Promise()
// const date = new Date() //here these new keyword are the constructor function

// the use of 'new' keyword is that we can create multiple new instance of the object which helps in eventually saving the memory



function user(username , loginCount , isLoggedIn){
    this.username = username; // we used this because when we printed the 'this' in console in global node js then we have sawn that it printed empty
    // object {} so by using this.username we can set a username key in that global object
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // return this // it will return the complete object now it will have username , isloggedin and logincount in its object
    
}


// const user1 = user('anubhav' , 12, true);
// const user2 = user('anu' ,  11 , false);

// console.log(user1); // we can see that user2 completely overwrite the user1 , and we haven't printed the user2 yet also


// from saving from this issue we use 'new' keyword it gives the new isntance

const user1 = new user('anubhav' , 12, true);  // if we have written new keyword while using the function then we do not need to return 'this' to get the object
const user2 = new user('anu' ,  11 , false); // both have there separate instance and this comes in constructor

// console.log(user1);


// we can even define the methods also in it , methods are the functions
// and the above we done is properties , variables

function newUser(username){
    this.username
    this.greeting = function(){ // this is the method
        console.log(`hgello ${this.username}`); 
        
    }
}

const user3 = new newUser('anubhav')
console.log(user3.greeting()); // accessing the method


// constructor is the reference of its own function


// read the property of instanceof 