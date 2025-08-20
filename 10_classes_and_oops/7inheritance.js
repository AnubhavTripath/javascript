class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) // by using the super keyword , we don't need to use 'call' method for running the function and accessing its 
        //  'this' value
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")
// chai.addCourse()
// chai is an instance of Teacher class and it has access to the methods of User class as well

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);  // true, chai is an instance of User class
// instanceof meaning chai is coming from User class or not