class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){  // by doing static it will be accessed only within block scope
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())  // without static method it can be accessed here , but by using static method it can not be accessed outside the class

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId()); // after inheriting also the static method is not accessible outside the class