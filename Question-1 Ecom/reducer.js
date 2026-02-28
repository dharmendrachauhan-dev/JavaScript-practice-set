const cartQuantity= [{price: 25, quantity: 2, }, {price: 25, quantity: 2, }, {price: 25, quantity: 2, }]

const subtotal = cartQuantity.reduce((total, item)=>{
    return total +  (item.price * item.quantity)
})

console.log(subtotal)