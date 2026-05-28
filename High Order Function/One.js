export const books = [
  { title: "To Kill a Mockingbird", genre: "Fiction", publish: 1960, edition: 1999 },
  { title: "1984", genre: "Dystopian", publish: 1949, edition: 2003 },
  { title: "The Great Gatsby", genre: "Classic", publish: 1925, edition: 2004 },
  { title: "Moby Dick", genre: "Adventure", publish: 1851, edition: 1992 },
  { title: "War and Peace", genre: "Historical Fiction", publish: 1869, edition: 2007 },
  { title: "Pride and Prejudice", genre: "Romance", publish: 1813, edition: 2001 },
  { title: "The Hobbit", genre: "Fantasy", publish: 1937, edition: 2012 },
  { title: "The Lord of the Rings", genre: "Fantasy", publish: 1954, edition: 2014 },
  { title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy", publish: 1997, edition: 2015 },
  { title: "The Catcher in the Rye", genre: "Fiction", publish: 1951, edition: 1998 },

  { title: "The Alchemist", genre: "Adventure", publish: 1988, edition: 2010 },
  { title: "The Da Vinci Code", genre: "Mystery", publish: 2003, edition: 2006 },
  { title: "The Hunger Games", genre: "Science Fiction", publish: 2008, edition: 2011 },
  { title: "Brave New World", genre: "Dystopian", publish: 1932, edition: 2005 },
  { title: "Crime and Punishment", genre: "Psychological Fiction", publish: 1866, edition: 2002 },
  { title: "The Kite Runner", genre: "Drama", publish: 2003, edition: 2013 },
  { title: "Animal Farm", genre: "Political Satire", publish: 1945, edition: 2000 },
  { title: "The Chronicles of Narnia", genre: "Fantasy", publish: 1956, edition: 2008 },
  { title: "Jane Eyre", genre: "Classic", publish: 1847, edition: 1997 },
  { title: "Wuthering Heights", genre: "Classic", publish: 1847, edition: 1996 },

  { title: "The Shining", genre: "Horror", publish: 1977, edition: 2011 },
  { title: "It", genre: "Horror", publish: 1986, edition: 2017 },
  { title: "Dune", genre: "Science Fiction", publish: 1965, edition: 2019 },
  { title: "The Martian", genre: "Science Fiction", publish: 2011, edition: 2014 },
  { title: "A Game of Thrones", genre: "Fantasy", publish: 1996, edition: 2013 },
  { title: "The Fault in Our Stars", genre: "Romance", publish: 2012, edition: 2014 },
  { title: "The Book Thief", genre: "Historical Fiction", publish: 2005, edition: 2016 },
  { title: "The Road", genre: "Post-Apocalyptic", publish: 2006, edition: 2009 },
  { title: "Dracula", genre: "Horror", publish: 1897, edition: 1993 },
  { title: "Frankenstein", genre: "Science Fiction", publish: 1818, edition: 2001 },

  { title: "The Little Prince", genre: "Fantasy", publish: 1943, edition: 2015 },
  { title: "Don Quixote", genre: "Classic", publish: 1605, edition: 2003 },
  { title: "The Odyssey", genre: "Epic", publish: -700, edition: 1999 },
  { title: "Hamlet", genre: "Drama", publish: 1603, edition: 2002 },
  { title: "Macbeth", genre: "Drama", publish: 1606, edition: 2001 },
  { title: "The Iliad", genre: "Epic", publish: -750, edition: 1998 },
  { title: "Les Misérables", genre: "Historical Fiction", publish: 1862, edition: 2014 },
  { title: "The Brothers Karamazov", genre: "Philosophical Fiction", publish: 1880, edition: 2004 },
  { title: "Anna Karenina", genre: "Classic", publish: 1877, edition: 2006 },
  { title: "Fahrenheit 451", genre: "Dystopian", publish: 1953, edition: 2012 },

  { title: "The Color Purple", genre: "Drama", publish: 1982, edition: 2005 },
  { title: "Life of Pi", genre: "Adventure", publish: 2001, edition: 2010 },
  { title: "The Girl with the Dragon Tattoo", genre: "Thriller", publish: 2005, edition: 2008 },
  { title: "Gone Girl", genre: "Thriller", publish: 2012, edition: 2014 },
  { title: "The Silent Patient", genre: "Psychological Thriller", publish: 2019, edition: 2020 },
  { title: "Inferno", genre: "Mystery", publish: 2013, edition: 2015 },
  { title: "Angels & Demons", genre: "Mystery", publish: 2000, edition: 2004 },
  { title: "Digital Fortress", genre: "Tech Thriller", publish: 1998, edition: 2009 },
  { title: "The Lost Symbol", genre: "Mystery", publish: 2009, edition: 2013 },
  { title: "Origin", genre: "Science Fiction", publish: 2017, edition: 2019 },

  { title: "Steve Jobs", genre: "Biography", publish: 2011, edition: 2015 },
  { title: "Becoming", genre: "Memoir", publish: 2018, edition: 2019 },
  { title: "Sapiens", genre: "Non-Fiction", publish: 2011, edition: 2018 },
  { title: "Homo Deus", genre: "Non-Fiction", publish: 2015, edition: 2019 },
  { title: "Atomic Habits", genre: "Self-Help", publish: 2018, edition: 2020 },
  { title: "Rich Dad Poor Dad", genre: "Finance", publish: 1997, edition: 2017 },
  { title: "Think and Grow Rich", genre: "Self-Help", publish: 1937, edition: 2005 },
  { title: "The Power of Habit", genre: "Psychology", publish: 2012, edition: 2014 },
  { title: "Deep Work", genre: "Productivity", publish: 2016, edition: 2018 },
  { title: "Zero to One", genre: "Business", publish: 2014, edition: 2017 },

  { title: "Clean Code", genre: "Programming", publish: 2008, edition: 2015 },
  { title: "You Don’t Know JS", genre: "Programming", publish: 2015, edition: 2020 },
  { title: "Eloquent JavaScript", genre: "Programming", publish: 2011, edition: 2018 },
  { title: "JavaScript: The Good Parts", genre: "Programming", publish: 2008, edition: 2013 },
  { title: "Design Patterns", genre: "Programming", publish: 1994, edition: 2005 },
  { title: "Refactoring", genre: "Programming", publish: 1999, edition: 2018 },
  { title: "The Pragmatic Programmer", genre: "Programming", publish: 1999, edition: 2019 },
  { title: "Introduction to Algorithms", genre: "Computer Science", publish: 1990, edition: 2022 },
  { title: "Cracking the Coding Interview", genre: "Programming", publish: 2008, edition: 2015 },
  { title: "Head First Java", genre: "Programming", publish: 2003, edition: 2021 },

  { title: "A Brief History of Time", genre: "Science", publish: 1988, edition: 1998 },
  { title: "The Selfish Gene", genre: "Science", publish: 1976, edition: 2006 },
  { title: "Cosmos", genre: "Science", publish: 1980, edition: 2013 },
  { title: "Silent Spring", genre: "Environment", publish: 1962, edition: 2002 },
  { title: "The Gene", genre: "Science", publish: 2016, edition: 2018 },
  { title: "Thinking, Fast and Slow", genre: "Psychology", publish: 2011, edition: 2013 },
  { title: "Outliers", genre: "Psychology", publish: 2008, edition: 2011 },
  { title: "Blink", genre: "Psychology", publish: 2005, edition: 2007 },
  { title: "The Tipping Point", genre: "Psychology", publish: 2000, edition: 2008 },
  { title: "Grit", genre: "Self-Help", publish: 2016, edition: 2017 },

  { title: "The Lean Startup", genre: "Business", publish: 2011, edition: 2014 },
  { title: "Start With Why", genre: "Business", publish: 2009, edition: 2011 },
  { title: "The 4-Hour Workweek", genre: "Productivity", publish: 2007, edition: 2013 },
  { title: "Rework", genre: "Business", publish: 2010, edition: 2012 },
  { title: "Hooked", genre: "Business", publish: 2014, edition: 2016 },
  { title: "Can't Hurt Me", genre: "Memoir", publish: 2018, edition: 2021 },
  { title: "Ikigai", genre: "Self-Help", publish: 2016, edition: 2018 },
  { title: "The Subtle Art of Not Giving a F*ck", genre: "Self-Help", publish: 2016, edition: 2017 },
  { title: "Meditations", genre: "Philosophy", publish: 180, edition: 2006 },
  { title: "Beyond Good and Evil", genre: "Philosophy", publish: 1886, edition: 2003 },

  { title: "The Art of War", genre: "Strategy", publish: -500, edition: 2005 },
  { title: "The Prince", genre: "Political Philosophy", publish: 1532, edition: 1999 },
  { title: "Man's Search for Meaning", genre: "Psychology", publish: 1946, edition: 2006 },
  { title: "The Republic", genre: "Philosophy", publish: -380, edition: 2000 },
  { title: "Thus Spoke Zarathustra", genre: "Philosophy", publish: 1883, edition: 2008 },
  { title: "Norwegian Wood", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Kafka on the Shore", genre: "Magical Realism", publish: 2002, edition: 2005 },
  { title: "The Wind-Up Bird Chronicle", genre: "Fiction", publish: 1994, edition: 2007 },
  { title: "One Hundred Years of Solitude", genre: "Magical Realism", publish: 1967, edition: 2003 },
  { title: "Love in the Time of Cholera", genre: "Romance", publish: 1985, edition: 2007 },

  { title: "The Old Man and the Sea", genre: "Classic", publish: 1952, edition: 2004 },
  { title: "A Farewell to Arms", genre: "War Fiction", publish: 1929, edition: 2002 },
  { title: "For Whom the Bell Tolls", genre: "War Fiction", publish: 1940, edition: 2003 },
  { title: "The Sun Also Rises", genre: "Classic", publish: 1926, edition: 2006 },
  { title: "The Stranger", genre: "Philosophical Fiction", publish: 1942, edition: 1989 },
  { title: "The Trial", genre: "Absurdist Fiction", publish: 1925, edition: 1998 },
  { title: "Metamorphosis", genre: "Absurdist Fiction", publish: 1915, edition: 2001 },
  { title: "The Picture of Dorian Gray", genre: "Classic", publish: 1890, edition: 2005 },
  { title: "Heart of Darkness", genre: "Classic", publish: 1899, edition: 1997 },
  { title: "On the Road", genre: "Adventure", publish: 1957, edition: 2000 }
];

// forEach => do not return
// map => return
// filter => return

const GetBook = books.filter((book) => {
    return book.genre === "Mystery"
}).map((book)=> book.title)

// console.log(GetBook)

// question filter


// Filter all books with genre "Fantasy" ✅
const GetFilteredBooks = books.filter((books)=>{
    return books.genre === "Fantasy"
}).map((books)=> {
    return books.title
})
// console.log(GetFilteredBooks)

// Filter books published after 2000 ✅
const fileteredByYear = books.filter((books)=> {
    return books.publish > 2000
})
// console.log(fileteredByYear)

// Filter books published before 1950 ✅

const filterByYear1950 = books.filter((books)=>{
    return books.publish > 1950
})
// console.log(filterByYear1950)

// Filter all "Programming" books ✅

const filterProgramming = books.filter((books)=> {
    return books.genre === "Programming"
})
// console.log(filterProgramming)

// Filter books whose edition year is greater than 2015 ✅

const filterdByEditionYear = books.filter((books)=> {
    return books.edition > 2015
})
// console.log(filterdByEditionYear)

// Filter books with genre "Science Fiction" ✅

const filterBookByScience = books.filter((books)=> {
    return books.genre === "Science Fiction"
})
// console.log(filterBookByScience)

// Filter books whose title contains "The" ✅

const filterByThe = books.filter((books)=>{  // this return truthy
    return books.title.includes("The")
})
// console.log("This one is => ",filterByThe)

// Filter books with publish year between 1990 and 2010  ✅

const filterBtwYear = books.filter((books)=> {
    return books.publish > 1990 && books.publish < 2010
})
// console.log(filterBtwYear)

// Filter all "Horror" books

const filterHorror = books.filter((books)=> {
    return books.genre === "Horror"
})
// console.log(filterHorror)

// Filter books with title length greater than 15 characters
const filterByLength = books.filter((books)=> {
    return books.title.length  === 4
})

// console.log(filterByLength)

