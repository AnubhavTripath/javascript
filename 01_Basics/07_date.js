// Dates

let myDate = new Date() // it will give current date and time
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // it is an object type

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 1, 23, 15, 3) // in this way we can create our own date and time
let myCreatedDate = new Date("2023-01-14") // this is how we create our own date
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()  // it will give the time stamp in milliseconds from 1970 to now

// console.log(myTimeStamp);  // it will give the time stamp in milliseconds from 1970 to now
// console.log(myCreatedDate.getTime()); // in this way we will check that how many miliseconds it takes from 1970 to this myCreateddate and we can compare this timestamp later on
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {  // in this way we can get the date in our own format basically we can modify ut according to our need
    weekday: "long",
    
})
