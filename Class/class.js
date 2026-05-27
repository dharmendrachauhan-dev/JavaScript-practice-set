

class People{
    constructor(name, age, school, gender, marks){
        this.name = name,
        this.age = age,
        this.school = school,
        this.marks = {},
        this.gender = gender
    }

    addMarks(subject, marks){
        this.marks[subject] = marks   // key and value to the empty object
    }

    getPercentage(){
        const total = Object.values(this.marks).reduce((sum, marks)=> sum + marks, 0) // add the value
        console.log( "Total => : ", total)
        const calculatePercentage = (( total / 600 ) * 100).toFixed(2)
        console.log(calculatePercentage)

    }

    getStatus(){
        return `My name is ${this.name}`
    }

}

const student = new People("dharmendra", 28, "Anudatt vidayalya", "male")
console.log("Student => ", student)

student.addMarks("history", 69);
student.addMarks("science", 70)
student.addMarks("Math", 69)

student.getPercentage()

// what to do ? show percentage , push subject and marks in obj



