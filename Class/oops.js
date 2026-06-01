// OOPs
//  poyphormism
//   inheritance
//    abstraction
//     enscapsulation

// Object Literal

const object = {  // this is basic
    name: "dharmendra",
    isHero: "Yes",
    powerLevel: 9,

    getDetails: function solution(){
        console.log(`hi pro player is ${this.name}`)
    }
}

// console.log(object.getDetails())
// lets come to constructor

const superhero = function (name, age, powerType, role){
    this.name = name;
    this.age = age;
    this.powerType = powerType;
    this.role = role
    return this
}

const wifi = new superhero("dharmendra", 99, "hell-fire", "villian")
console.log(wifi)
const hifi = new superhero("ajay", 95, "Swinging", "hero")
console.log(hifi)


