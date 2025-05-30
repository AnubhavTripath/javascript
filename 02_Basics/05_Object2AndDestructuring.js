//Singleton Object
const tinderUser = new Object()  // when we create object like this then it will be a singleton Object
// const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = { obj1, obj2 } // by this we can add object 1 and 2 in a new object with seprated by a ,
// const obj3 = Object.assign({}, obj1, obj2, obj4) // by using 'assign' we can add multiple Object in a new Object and it will be in key and value pair
// the first empty {} is created to target where we want to add all these objects if we do not add an empty {} then it will start adding all objects in first object

// const obj3 = {...obj1, ...obj2}  // by using spread operator also we can add all the objects
console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

console.log(Object.keys(tinderUser));  // by using Object.keys() and passing object in this method then we will get all the keys of the object
console.log(Object.values(tinderUser)); // by using Object.values()  and passing the object in this we can get all the values of the object
console.log(Object.entries(tinderUser)); // by using entries() we will get every key and value pair of the object

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // by using the hasOwnProperty we can check whether an object is having that variable or not


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// destructuring of an object
const {courseInstructor: instructor} = course  // this is destructuring and by doing ':' we can rename it as we want
const {courseInstructor} = course

console.log(courseInstructor);
// console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
