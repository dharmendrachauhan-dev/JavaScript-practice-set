// Rounding numbers

let num = 199.299
// console.log(Math.round(num))

// Random numbers

let randomNum = Math.round(Math.random() * 15)
// console.log(randomNum)


// Powers/exponent
let random = Math.pow(2, 5)
// console.log(random)


// square root
let number = Math.sqrt(25)
// console.log(number)


// Maximum and minimum values

let minimum = Math.min(1, 2, 3, 4)
// console.log(minimum)

let maximum = Math.max(1, 2, 3, 4, 5)
// console.log(maximum)


let PI = Math.PI
// console.log(PI)


// Date Object
let date = Date()
// console.log(date)


// Question Give Me

/*

console.log(Math.round(4.5)) // 5
console.log(Math.floor(4.9)) // floor() always rounds DOWN.
console.log(Math.ceil(4.1)) // ceil() always rounds UP.
console.log(Math.trunc(4.9)) // console.log(Math.trunc(4.9))
console.log(Math.sqrt(-1)) // NaN
console.log(Math.max()) // -Infinity
console.log(Math.max(1, 2, "10")) // String "10" converts to number 10.

*/



let otp = Math.floor(100000 + Math.random() * 9000);
// console.log(otp)


const generateOtp = (number) => {
    let otp = ""
    for (let num = 0; num < number; num++) {
        otp += Math.floor(Math.random() * 10)
    }
    return otp
}

console.log(generateOtp(6))