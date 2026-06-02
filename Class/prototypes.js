// There is two way create js object 1)using prototypes 2) using classes and contructor


// Protypical Method

let createUser = function(name, school, age){
    this.name = name,
    this.school = school,
    this.age = age
}

createUser.prototype.google = function(){
    console.log(`Hi bro ${this.name}`)
     return this.name // eleminate undefined by return the value
}

const user1 = new createUser("dharmendra")
console.log(user1.google())

let name = "guru       "
let sirname = "chauhan       "

String.prototype.trueLength = function(){
    return `${this.trim().length}`
}

console.log(name.trueLength())