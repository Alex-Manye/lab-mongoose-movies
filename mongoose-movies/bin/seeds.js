const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
//const Author = require('../models/Author');

const bdmovies = 'movies';
mongoose.connect(`mongodb://localhost/${bdmovies}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
//Book.collection.drop();
Celebrity.collection.drop();

const celebrities = [{
    name: "Tom Cruise",
    occupation: "actor",
    catchPhrase: "Hello Baby"
  },
  {
    name: "Madonna",
    occupation: "singer",
    catchPhrase: "Viva la vida"
  },
  {
    name: "Gerard Piqué",
    occupation: "Soccer player",
    catchPhrase: "Visca el Barsa"
  }
]

Celebrity.create(celebrities)
  .then((result) => {
    console.log('celebrities created')
  }).catch((err) => {
    console.log('There is an error ${err}')
  });





/*
const createAuthors = celebrities.map(book => {
  const newAuthor = new Author(book.author)
  return newAuthor.save()
    .then(author => {
      return author.name;
    })
    .catch(error => {
      throw new Error(`Impossible to add the author. ${error}`)
    })
})


let findAuthors = Promise.all(createAuthors)
  .then(authors => {
    return books.map(book => {
      return Author.findOne({
          name: book.author.name,
          lastName: book.author.lastName
        })
        .then(author => {
          if (!author) {
            throw new Error(`unknown author ${book.author.name} 
${book.author.lastName}`);
          }
          return Object.assign({}, book, {
            author: author._id
          });
        })
    });
  })
  .catch(error => {
    throw new Error(error)
  })

const saveBooks = findAuthors.then(findAuthors => {
  return Promise.all(findAuthors)
    .then(books => {
      return books.map(book => {
        const newBook = new Book(book);
        return newBook.save();
      })
    })
}).then(savedBooks => {
  Promise.all(savedBooks)
    .then(books => books.forEach(book =>
      console.log(`created ${book.title}`)))
    .then(() => mongoose.connection.close())
    .catch(err => console.log("Error while saving the book: ", err))
})
*/