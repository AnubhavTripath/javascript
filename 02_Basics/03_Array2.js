const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //if we push any array in the array then complete array will be added in last index number
// const updatedMarvelHero = marvel_heros.flat(Infinity) // we can merge all the array in a single array also
// console.log(updatedMarvelHero);


// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros) // by doing concat we can combine two arrays together
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]  // the '...' is called spread operator from which every element will consider as a individual element

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  // by using flat method we can remove the nested array and make it a single array
// console.log(real_another_array);



// console.log(Array.isArray("Hitesh")) // it will check whether the given value is array or not
// console.log(Array.isArray([1, 2, 3])) // it will check whether the given value is array or not

// console.log(Array.from("Hitesh")) // it will convert the string into array and also it will give the index number of the string in array form

// console.log(Array.from({name: "hitesh"})) // it will convert the object into array could not able to get the key value pair so it will return empty []

let score1 = [100 , 200 ]
let score2 = [200 , 300]
let score3 = [300 , 400]

console.log(Array.of(score1, score2, score3));  // by doing array.of and passing the values we can create there array