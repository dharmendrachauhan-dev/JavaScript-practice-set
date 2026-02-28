// Problem: Given a product and requested quantity, check if it's in stock. Return appropriate message.

const product = {
    id: 101,
    name: "Wireless headphones",
    price: 79.99,
    stock: 10
};

function checkAvailability(product, requestedQuantity){
    if(product.stock >= requestedQuantity){
        return `${product.name} is available: $${(product.price * requestedQuantity).toFixed(2)}`
    } else {
        return `sorry, only ${product.stock} units available`;
    }
}

console.log(checkAvailability(product, 5))
console.log(checkAvailability(product, 20))

