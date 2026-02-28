// Question 1: Calculate Cart Total with Discount

const cartItems = [
  { name: "Shirt", price: 25, quantity: 2 },
  { name: "Shirt", price: 25, quantity: 2 },
  { name: "Shirt", price: 25, quantity: 2 },
];

function calculateTotal(cart) {
  const subtotal = cart.reduce((total, item) => {
    console.log(total);
    return total + (item.price * item.quantity);
  }, 0);

  if (subtotal > 100) {
    discount = subtotal * 0.1;
    return (final = subtotal - discount);
  }
  return subtotal;
}

const product = calculateTotal(cartItems);
// console.log(product)
