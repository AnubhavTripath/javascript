// for Each
// it work for Array
// it does not return anything , it just perform certain task

const coding = ["js", "ruby", "java", "python", "cpp"]

// by using forEach it automatically goes on each indexes of the array and perform the certain action which we write in function

coding.forEach( function (val , indx){ // for each is a callback function means it takes function inside itself , and the fallback function does not have its name
    console.log(val);
    // console.log('index' , indx) // these callback function also comes with the index number 
} )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// we can create a separate function and use it in the forEach , and the separate function can have its name
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> { // in parameters it not only contain the item , it also contain the index number and the complete array
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    // console.log(item.languageName);
} )


const values = coding.forEach((item)=>{
    // console.log(item);
    // return item // if we try to return any thing then that is not possible in forEach
}
)




//  filter
// it work with Array
// it return the values , and basically use for filter out something

const nums = [1 ,2 ,3,4,5,6,7,8,9]

// const num = nums.filter( (num) => num > 4) //returned value in array , this one is done by implicit return
// const num = nums.filter( (num)=>{
//     return num > 4
// })

const num = nums.filter((num)=> num>4 ) //explicit return with filter
console.log(num);

// to perform same action with forEach we have to create an empty array and push the numbers in it

const newnums = []

nums.forEach((num)=>{
    if(num > 4){
        newnums.push(num);
    }
})


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History') // it will return that complete object which gets matched with condition

//   userBooks = books.filter( (bk) => { 
//     return bk.publish >= 1995 && bk.genre === "History"
// })
  console.log(userBooks);