function calculateDiscount(total, couponCode) {
  const product = {
    SAVE40: 40,
    SAVE20: 30,
    SAVE10: 0.1,
    SAVE50: 0.5,
  };

  const discount = product[couponCode];

  if (!discount) {
    return "Invalid discount code try again";
  }

  if (discount < 1) {
    return total - total * discount;
  } else {
    return Math.max(0, total - discount);
  }
}

console.log(calculateDiscount(150, "SAVE20"));
console.log(calculateDiscount(150, "SAVE50"));
