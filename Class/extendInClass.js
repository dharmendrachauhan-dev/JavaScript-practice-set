// So, This is inheritance in practical view
// 1) extends => copy ability
// 2) super => call parent first

// Level - 1 Basic
class school{
    greetings(){
        return "Hi, learner"
    }
}

class student extends school{}

const parent = new school()
const child = new student()

// console.log("This is from parent itself => ", parent.greetings()) // sharing the properties to child
// console.log("This is from extend => ", child.greetings()) // child




// Level - 2 Medium Adding Feature
class bank{
    manager(){
        return "Does this man know what is extends mean"
    }
}

class employee extends bank{
    employer(){
        return "I know through blog i will explain"
    }
}

const GodMode = new bank()
// Note : This is parent
const BeastMode = new employee()
// Note: takes the properties from parent(bank) and add thier own feature

// This is IMPORTANT THINGS TODO
// parent
console.log(GodMode.manager())  // Ans: Does this man know what is extends mean

// Inheritance (child)
console.log(BeastMode.manager()) // Ans: Does this man know what is extends mean
console.log(BeastMode.employer()) // Ans: I know through blog i will explain


// Level 3 => Advanced Use of super => call parent first 

class User{
    constructor(name, age, school){
        this.name = name,
        this.age = age,
        this.school = school
    }
}

class Swiggy  extends User{
    constructor(name, age, school, gender){
        super(name,age,school)
        this.gender = gender
    }
}

const user = new User("Dharmendra", 29, "anudatt vidylaya")

console.log(user) // only User 

const SwiggyUser = new Swiggy("abhishek", 20, "anudatt", "male")
console.log(SwiggyUser)


