// Question 4: Sort Products by Price

// const products = [
//     { name: "Laptop", price: 999 },
//     { name: "Mouse", price: 25},
//     { name: "Keyboard", price: 75  },
//     { name: "Monitor", price: 299 },
// ]

// function analyzeProducts(products){

// }

// console.log(analyzeProducts(products))
 






// sort method i remember and here right🥳🥳

// const num= [2, 3,1, 7, 5,4]
// const sort = num.sort((a,b)=> a - b)
// console.log(sort)

const products = [
    { name: "Laptop", price: 999 },
    { name: "Mouse", price: 25},
    { name: "Keyboard", price: 75  },
    { name: "Monitor", price: 299 },
]

const sort = products.sort((a, b)=>a.price-b.price)
console.log(sort)