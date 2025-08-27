class User {
    constructor (email , password){
        this.email = email,
        this.pass = password
    }
}

const anubhav = new User("anu@gmail.com" , "123")
// console.log(anubhav.pass);


// the above class is an basic constructor function which simply gives the values which we try to access but sometimes we don't want
// to give the values , like we dont want to return the password , or we want to return the password in hashing or return something else message

// to do that we have the getter and setters 


class GetterSetter {
    constructor (email , password){
        this.email = email,
        this.pass = password
    }

    get email (){ // by default every variable will have a getter and setter , and when we start using the getter setter then the variable 
        //which is defined inside the constructor doesn't used actually all values will be used by this 
        return this._email.toUpperCase()
    }

    // when we define the getter then it is necessary to define the setter also

    set email (value){ // to set the value it always take a variable from which it can set the value
        this._email = value  // we define a new variable here for email because the email is already defined in the constructor and when the
        // both setter and constructor try to set the same value then it will make the call stack full 
    }

    // the getter will return the value to the user 
    // the setter will save the value in our backed (at our side)
}

const test = new GetterSetter("anu@gmail.com" , "pass")
// console.log(test) // here we can check that it stored the email as it is in the object
console.log(test.email)  // but when we print or try to access the email then it returns in uppercase
console.log(test._email) // we can still access the _email in which it will display the origional email it was not stopping me to access it



// there is a doubt that if we remove the this.email from the constructor then still we have to create new variable inside the getter / setter

//  the answer is we have to define the this.email in the constructor without that we cannot able to set their value by using the getter / setter






// getter and setter back then when there is no class avialable before es6

const getset = function (email , pass){
    this._email = email,  // in old time we have to create the new variable in function constructor also
    this._pass = pass

    //  at that time we will do the getter setter by using the define properties
    Object.defineProperty(this , 'email' , {  // we pass it a seperate "this" because it does not have it own
        get: function (){
            return this._email.toUpperCase()
        },
        set: function (value){
            this._email = value
        }
    })
}

// const test2 = new getset("anu@gmail.com" , "123")
// console.log(test2.email);
