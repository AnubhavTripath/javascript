// maps
//  work with array
//  it also return 

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10}) // it can do the thing which perform filter and much more
// difference between filter and map is that map can return anything but filter return only things which satisfy the condition

const newNums = myNumers // this is called chaining , chaining means that we can apply two three methods together and get a single response at end
                .map((num) => num * 10 )  // this filter thing will be passed in next one
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);