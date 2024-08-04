//Creating an empty library array
let library = []


//Adding books to the library array
library.push(
    {
        title: "The Great Gatspy",
        author: "F. Scott Fitzgerald",
        yearPublication: 1925,
        available: true
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        yearPublication: 1960,
        available: true
    },
    {
        title: "1984",
        author: "George Orwell",
        yearPublication: 1949,
        available: false
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        yearPublication: 1813,
        available: true
    }
)

console.log(library)
//Answer
// [
//     {
//       title: 'The Great Gatspy',
//       author: 'F. Scott Fitzgerald',
//       yearPublication: 1925,
//       available: true
//     },
//     {
//       title: 'To Kill a Mockingbird',
//       author: 'Harper Lee',
//       yearPublication: 1960,
//       available: true
//     },
//     {
//       title: '1984',
//       author: 'George Orwell',
//       yearPublication: 1949,
//       available: false
//     },
//     {
//       title: 'Pride and Prejudice',
//       author: 'Jane Austen',
//       yearPublication: 1813,
//       available: true
//     }
//   ]



  //Updating the availability of 1984
  library[2].available = true
  console.log(library)

  //Answer
//   [
//     {
//       title: 'The Great Gatspy',
//       author: 'F. Scott Fitzgerald',
//       yearPublication: 1925,
//       available: true
//     },
//     {
//       title: 'To Kill a Mockingbird',
//       author: 'Harper Lee',
//       yearPublication: 1960,
//       available: true
//     },
//     {
//       title: '1984',
//       author: 'George Orwell',
//       yearPublication: 1949,
//       available: true
//     },
//     {
//       title: 'Pride and Prejudice',
//       author: 'Jane Austen',
//       yearPublication: 1813,
//       available: true
//     }
//   ]





//Removing a book from the library
library.splice(3, 1)
console.log(library)

//Answer
// [
//     {
//       title: 'The Great Gatspy',
//       author: 'F. Scott Fitzgerald',
//       yearPublication: 1925,
//       available: true
//     },
//     {
//       title: 'To Kill a Mockingbird',
//       author: 'Harper Lee',
//       yearPublication: 1960,
//       available: true
//     },
//     {
//       title: '1984',
//       author: 'George Orwell',
//       yearPublication: 1949,
//       available: true
//     }
//   ]





//Check if a book is in the library

//Since includes can work in object then

//Firstly extract the title into an array
const titles = library.map((book) => book.title)

//you can now use includes in the array you extracted
const TheGreatGatsby = titles.includes('The Great Gatspy')
console.log(TheGreatGatsby)

//Answer is true









//Borrow the first book
const borrowedBook = library.shift()
borrowedBook.available = false
console.log(borrowedBook)

//Answer
// {
//     title: 'The Great Gatspy',
//     author: 'F. Scott Fitzgerald',
//     yearPublication: 1925,
//     available: false
//   }

console.log(library)
//Answer
// [
//     {
//       title: 'To Kill a Mockingbird',
//       author: 'Harper Lee',
//       yearPublication: 1960,
//       available: true
//     },
//     {
//       title: '1984',
//       author: 'George Orwell',
//       yearPublication: 1949,
//       available: true
//     }
//   ]







//Add new book to the start of the library
const newBook = library.unshift(
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        publication_year: 1951,
        available: true
    }
)

console.log(library)

//Answer
// [
//     {
//       title: 'The Catcher in the Rye',
//       author: 'J.D. Salinger',
//       publication_year: 1951,
//       available: true
//     },
//     {
//       title: 'To Kill a Mockingbird',
//       author: 'Harper Lee',
//       yearPublication: 1960,
//       available: true
//     },
//     {
//       title: '1984',
//       author: 'George Orwell',
//       yearPublication: 1949,
//       available: true
//     }
//   ]




//Extract all the titles of the book and seperate using comma

const newTitles = library.map((book) => book.title).join(', ')

console.log(newTitles)

//Answer
// The Catcher in the Rye, To Kill a Mockingbird, 1984




//Making a new array containing only the last two books
const newArrivals = library.slice(-2)

console.log(newArrivals)

//Answer
// [
//     {
//       title: 'To Kill a Mockingbird',
//       author: 'Harper Lee',
//       yearPublication: 1960,
//       available: true
//     },
//     {
//       title: '1984',
//       author: 'George Orwell',
//       yearPublication: 1949,
//       available: true
//     }
//   ]








//FINAL OUTPUT



//FINAL LIBRARY
// [
    //     {
    //       title: 'The Catcher in the Rye',
    //       author: 'J.D. Salinger',
    //       publication_year: 1951,
    //       available: true
    //     },
    //     {
    //       title: 'To Kill a Mockingbird',
    //       author: 'Harper Lee',
    //       yearPublication: 1960,
    //       available: true
    //     },
    //     {
    //       title: '1984',
    //       author: 'George Orwell',
    //       yearPublication: 1949,
    //       available: true
    //     }
    //   ]




    //BOOK TITLES
    // The Catcher in the Rye, To Kill a Mockingbird, 1984





    //BORROWED BOOKS
    // {
//     title: 'The Great Gatspy',
//     author: 'F. Scott Fitzgerald',
//     yearPublication: 1925,
//     available: false
//   }





    //NEW ARRIVALS
    // [
//     {
//       title: 'To Kill a Mockingbird',
//       author: 'Harper Lee',
//       yearPublication: 1960,
//       available: true
//     },
//     {
//       title: '1984',
//       author: 'George Orwell',
//       yearPublication: 1949,
//       available: true
//     }
//   ]    

