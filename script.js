let booklist = [
  {
    title: 'The Ministry of Utmost Happiness',
    author: 'Arundhati Roy',
    year: 1999,
    borrowedStatus: true,
    lateStatus: false
  },
  {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    year: 2000,
    borrowedStatus: false,
    lateStatus: false
  },
  {
    title: 'A Thousand Splendid Suns',
    author: 'Khaleid Hosseini',
    year: 2006,
    borrowedStatus: true,
    lateStatus: true
  },
  {
    title: 'Follow Every Rainbow',
    author: 'Rashmi Bansal',
    year: 2000,
    borrowedStatus: false,
    lateStatus: true
  },
  {
    title: 'The Monk Who SOld His Ferrari',
    author: 'Robin Sharma',
    year: 1995,
    borrowedStatus: false,
    lateStatus: false
  }
]

// if (booklist.borrowedStatus === true) {
//   console.log(booklist.author)
//   console.log(booklist.title)
// }

for (let book of booklist) {
  // To check if a book is borrowed
  if (book.borrowedStatus === true && book.lateStatus === true) {
    console.log('The name of the borrowed book is ' + book.title + ' and the author is ' + book.author)
  }
}

for (let book of booklist) {
  // To check if a book is borrowed
  if (book.borrowedStatus === true) {
    if (book.lateStatus === true) { console.log('The name of the borrowed book is ' + book.title + ' and the author is ' + book.author) }
  }
}
