function SetUsername(username){
    this.username = username;
    // console.log(this.username);  // this will print the username
}

function createUser(username , email, password) {
    // SetUsername(username); // it will print the username , but it will not set the username in the object

    // the issue came here because when we write a function inside a function then  , according to the javascript rules
    // the inside function gets executed first a new execution context is created , but this function is not returning anything
    // so after executing the SetUsername function , the execution context and memory which is being reserverd for it is cleared
    // so we have to use .call() to hold the reference inwhich it have to store the username not in its own execution context (this)
    SetUsername.call(this, username); // now it will set the username in the object
    // setUsername marte marte apna username createUser object ke andar set kar dega

    this.email = email;
    this.password = password;
}

const anubhav = new createUser("anubhav" , "anu@gmail.com" , "anu123");
console.log(anubhav) // { email: 'anu@gmail.com', password: 'anu123' } , it have not printed the username which i tried to set with SetUsername function
// its because SetUsername is not being called with createUser function