import { books } from "./One.js";

// map() Questions









// Get only book titles✅

const getBooksTitles = books.map((books) => {
    return books.title
})
// console.log(getBooksTitles)


// Get only publish years✅
const getBooksPublish = books.map((books) => {
    return books.publish
})
// console.log(getBooksPublish)


// Convert all titles to uppercase✅
const getTitlesUppercase = books.map((books) => {
    return books.title.toUpperCase()
})
// console.log(getTitlesUppercase)


// Create array like "Book Name - 2001" ✅
const getBookNameAndPublish = books.map((books) => {
    return `${books.title.toUpperCase()} - ${books.publish}`
})
// console.log(getBookNameAndPublish)


// Add new field isClassic if publish year < 1950 ✅
// const addNewField = books.map((books)=> {
//     if(books.publish < 1950){
//         return books.title = "isClassic"
//     }
// })
// console.log(addNewField)

// Get titles and genres only ✅
const getTitlesAndGenres = books.map((books) => {
    return {
        title: books.title,
        genre: books.genre
    }
})

// console.log(getTitlesAndGenres)

// Add 10 years to every edition year ✅

const add10Year = books.map((book) => {
    return {
        title: book.title,
        genre: book.genre,
        publish: book.publish,
        edition: book.edition + 10
    }
})
//console.log(add10Year)


// Return array of objects with only title and publish ✅

const arrayOfObject = books.map((book) => {
    return {
        title: book.title,
        publish: book.publish
    }
})
// console.log(arrayOfObject)

// Create array of title lengths ✅

const arrayOfTitleLength = books.map((book) => {
    return book.title.length
})
// console.log(arrayOfTitleLength)


// Add new property rating: 5 to every book ✅

const addProperty = books.map((book) => {
    return {
        title: book.title,
        genre: book.genre,
        publish: book.publish,
        edition: book.edition,
        rating: 5
    }
})

// console.log(addProperty)



// forEach() Questions










// Print all book titles ✅

const allBooks = books.forEach((book) => {
    // console.log("Inside books => ",books) // Working 
})
// console.log("Outside books",allBooks) // undefined


// Print title and genre together ✅
const getTitleGenre = books.forEach((book) => {
    // console.log(`${book.title} and ${book.genre}` )
})


// Count total number of books ✅
let counter = 0
const totalNumber = books.forEach((books) => {
    if (typeof books === "object" && books !== null) {
        counter++
    }
})
// console.log(counter)


// Print only books published after 2010 ✅
const pulishedBooks = books.forEach((books) => {
    if (books.publish > 2010) {
        // console.log(books.publish)
    }
})


// Print index number with title ✅

let count = 0
const Index = books.forEach((book) => {
    if (typeof book === "object" && book !== null) {
        count++
        // console.log(`${count} with ${book.title}`);
    }
})


// Print "Old Book" if publish year < 1950 ✅
const PrintOld = books.forEach((books) => {
    if (books.publish < 1950) {
        //console.log(books)
    }
})


// Store all fantasy titles in new array using forEach ✅

const printTheFantasy = books.forEach((books) => {
    if (books.genre === "Fantasy") {
        // console.log(books)
    }
})


// Calculate average publish year ✅

let total = 0;
let sum = 0

const average = books.forEach((books) => {
    // total = total + books.publish;
    // sum++;
})

const averageYear = total / sum;
// console.log(averageYear.toFixed(0))


// Print all genres one by one ✅

const printGenreTwo = books.forEach((books) => {
    // console.log(books.genre)
})


// Count how many "Mystery" books exist ✅

let num = 0
const Mystery = books.forEach((books) => {
    // if(books.genre === "Mystery"){
    //     num++
    // }
})

// console.log(num)


// Mixed Practice Questions











const getFantasyBook = books.filter((books) => {
    if (books.genre === "Fantasy") {
        return books.title
    }
}).map((books) => books.title)
// console.log(getFantasyBook)


// Use filter() + forEach() to print books after 2000 ✅

const PrintAfter2000 = books
    .filter((book) => book.publish > 2000)
//    .forEach((books)=> console.log(books))
// console.log(PrintAfter2000)



// Use map() to create discounted prices (if books had price) ✅



const createDiscounted = books.map((books) => {
        return {
            ...books, // save all the privious data
            price: books.price ? books.price - 15 : "No Price"
        }
})
// console.log(createDiscounted)



// Use filter() to remove books before 1900 ✅
const remove = books.filter((books)=> books.publish > 1900)
// console.log(remove)



// Use map() + filter() to get uppercase mystery titles ✅
const UpperCaseMystery = books.filter((books) => books.genre === "Mystery")
.map((books)=>{
    return books.genre.toUpperCase()
})
// console.log(UpperCaseMystery)


// Use forEach() to build custom sentence: ✅
// "The Hobbit was published in 1937"
const customSetence = books.forEach((books)=> {
    // console.log({
    //     ...books,
    //     sentence: `The "${books.title}" was published in ${books.publish}`
    // })
})


// Use filter() to find books containing "Code" in title ✅
const filterBooksCode = books.filter((books)=> {
    return books.title.includes("Code")
})
// console.log(filterBooksCode)


// Use map() to create array of "title (genre)" ✅

const CreateBook = books.map((books) => {
    return `${books.title } (${books.genre})`
})
// console.log(CreateBook)


// Use forEach() to calculate total editions sum ✅

let ftotal = 0
const addEditons = books.forEach((books)=> ftotal += books.edition)
// console.log(ftotal)




// Combine all three methods in one problem ✅

let error = 0
const CombiningAll = books.filter((books)=> {
    if(books.genre === "Fiction"){
        return {
            ...books
        }
    }
}).map((books)=> {
    return {
        title: books.title,
        edition: books.edition,
        genre: books.genre
    }
}).forEach((books)=> {
    // return mai nhi karta
    error += books.edition
})

// console.log(CombiningAll)// mai return nhi karta
// console.log(error)


// Use filter() + map() to get titles of all fantasy books ✅  filter give true false 

const getTitles = books.filter((books)=> {
    if(books.genre === "Fantasy"){
        return true
    } else {
        return false
    }
})
.map((books)=> books.title)
// console.log(getTitles)