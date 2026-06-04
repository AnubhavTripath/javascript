// Let’s learn class, constructor, and inheritance in JavaScript step by step.
// 1. What is a class?
// A class is like a blueprint for creating objects.

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  login() {
    console.log(`${this.name} logged in`);
  }
}

const user1 = new User("Rajesh", "rajesh@example.com");

console.log(user1.name); 
user1.login();Output:

// Rajesh
// Rajesh logged inHere:

// class Usermeans we are creating a blueprint called User.

// constructor(name, email)runs automatically when we create a new object using new.

// this.name = name;
// this.email = email;means we are storing values inside the object.

// 2. What is a constructor?
// A constructor is a special method inside a class.
// It runs automatically when we do this:

const user1 = new User("Rajesh", "rajesh@example.com");Example:

class Product {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
}

const product1 = new Product("Yoga Course", 999);

console.log(product1.title);
console.log(product1.price);Output:

// Yoga Course
// 999Think of constructor like this:

// constructor = initial setup of the object

// 3. What is inheritance?
// Inheritance means one class can use properties and methods of another class.
// Example:

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  login() {
    console.log(`${this.name} logged in`);
  }
}

class Admin extends User {
  deleteUser() {
    console.log(`${this.name} deleted a user`);
  }
}

const admin1 = new Admin("Rajesh", "rajesh@example.com");

admin1.login();
admin1.deleteUser();Output:

// Rajesh logged in
// Rajesh deleted a userHere:

// class Admin extends Usermeans Admin inherits from User.
// So Admin can use:

// name
// email
// login()from the User class.

// 4. What is extends?
// extends is used to inherit from another class.

// class Admin extends User Meaning:

// Admin is a child class of UserSo:

// User = parent class
// Admin = child class

// 5. What is super()?
// When a child class has its own constructor, we must call super() first.
// Example:

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  login() {
    console.log(`${this.name} logged in`);
  }
}

class Admin extends User {
  constructor(name, email, role) {
    super(name, email);
    this.role = role;
  }

  showRole() {
    console.log(`${this.name} is an ${this.role}`);
  }
}

const admin1 = new Admin("Rajesh", "rajesh@example.com", "Admin");

console.log(admin1.name);
console.log(admin1.email);
console.log(admin1.role);

admin1.login();
admin1.showRole();Output:

// Rajesh
// rajesh@example.com
// Admin
// Rajesh logged in
// Rajesh is an AdminWhat does super(name, email) do?
// It calls the constructor of the parent class:

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}
// So this:

super(name, email);sets:

this.name = name;
this.email = email; //Then child class adds its own property:

this.role = role;

// 6. Important rule
// Inside a child class constructor, you cannot use this before super().
// Wrong:

class Admin extends User {
  constructor(name, email, role) {
    this.role = role; // wrong
    super(name, email);
  }
}Correct:

class Admin extends User {
  constructor(name, email, role) {
    super(name, email);
    this.role = role;
  }
}
// Because super() creates the parent part of the object first.

// 7. Real-life example
// Let’s say you have a normal user and a premium user.

class Student {
  constructor(name, course) {
    this.name = name;
    this.course = course;
  }

  watchCourse() {
    console.log(`${this.name} is watching ${this.course}`);
  }
}

class PremiumStudent extends Student {
  constructor(name, course, mentorSupport) {
    super(name, course);
    this.mentorSupport = mentorSupport;
  }

  bookMentorCall() {
    console.log(`${this.name} booked a mentor call`);
  }
}

const student1 = new PremiumStudent("Rajesh", "200 Hour Yoga TTC", true);

student1.watchCourse();
student1.bookMentorCall();

console.log(student1.mentorSupport);Output:

// Rajesh is watching 200 Hour Yoga TTC
// Rajesh booked a mentor call
// trueHere:

// PremiumStudent inherits from:

// StudentSo PremiumStudent gets the watchCourse() method automatically.

// 8. Method overriding
// Sometimes child class wants to change the parent method.
// Example:

class User {
  login() {
    console.log("User logged in");
  }
}

class Admin extends User {
  login() {
    console.log("Admin logged in with extra permissions");
  }
}

const admin1 = new Admin();

admin1.login();Output:

// Admin logged in with extra permissionsThis is called method overriding.
// The child class has its own version of the same method.

// 9. Using parent method inside child method
// You can also call the parent method using super.methodName().

class User {
  login() {
    console.log("User logged in");
  }
}

class Admin extends User {
  login() {
    super.login();
    console.log("Admin permissions loaded");
  }
}

const admin1 = new Admin();

admin1.login(); 

Output:

// User logged in
// Admin permissions loadedHere:

super.login(); //calls the parent class login() method.

// 10. Simple mental model
// Think like this:

class User {
//   common things
}

class Admin extends User {
//   extra things
}So:

// User = basic features
// Admin = basic features + admin features

// Final example

class Course {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  showCourse() {
    console.log(`${this.title} costs ₹${this.price}`);
  }
}

class OnlineCourse extends Course {
  constructor(title, price, duration) {
    super(title, price);
    this.duration = duration;
  }

  showDuration() {
    console.log(`${this.title} duration is ${this.duration}`);
  }
}

const course1 = new OnlineCourse("200 Hour Yoga TTC", 15000, "6 months");

course1.showCourse();
course1.showDuration();

// Output:

// 200 Hour Yoga TTC costs ₹15000
// 200 Hour Yoga TTC duration is 6 monthsIn one line
// Inheritance allows a child class to reuse properties and methods of a parent class, and super() is used to call the parent constructor or method.