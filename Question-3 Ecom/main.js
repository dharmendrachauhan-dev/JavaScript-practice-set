// Question 3: Apply Coupon Code

function applyCoupon(total, couponCode){
    const coupons = {
        "SAVE10": 10, // $10 off
        "SAVE20": 20, // $20 off
        "SALE15": 0.15, // 15% off
        "SALE25": 0.25, // 25% off
    };

    const discount = coupons[couponCode] // Dynamic way to access obj value bzc key is string

    if(!discount){
        return "Invalid coupon code";
    }

    if(discount < 1){
        return total - (total * discount)
    } else {
        return Math.max(0, total - discount)
    }
}

console.log(applyCoupon(150, "SAVE10")) // 120
console.log(applyCoupon(150, "SALE25")) // 37.50 after discount 112.5