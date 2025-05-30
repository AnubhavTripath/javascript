// reduce method
// it works with array

const myNums = [1, 2, 3]


// const initialValue = 0;
// const sumWithInitial = myNums.reduce(
//     (accumulator , currentValue) => accumulator + currentValue,
//     initialValue
// )

// how it works
// the accumulator is will be empty initially , for that we take a initial value , that initial value will go in accumulator
// then current value comes from the array , and then both get added
// the added values will go in accumulator again and it will add with again with next current value


const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

const total = shoppingCart.reduce((acc , curr)=> {
    return acc + curr
} , 0 )

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0) // here in item it contains complete object 

// console.log(priceToPay);