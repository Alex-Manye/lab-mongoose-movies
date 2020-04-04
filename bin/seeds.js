const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

mongoose.connect('mongodb://localhost/artists', {
  useNewUrlParser: true,
   useUnifiedTopology: true,
  reconnectTries: Number.MAX_VALUE
});

Celebrity.collection.drop();

const celebrities = [{
        name: "Adam Clark",
        occupation: "actor",
        catchPhrase: "Caution Never Won a War"
    },
    {
        name: "Madonna",
        occupation: "singer",
        catchPhrase: "Vogue"
    },
    {
        name: "John Maxwell",
        occupation: "actor",
        catchPhrase: "Life is a Masquerade Party"
    },
    {
        name: "Barbara McKook",
        occupation:  "actress",
        catchPhrase: "The Caviar, I Trust, Is Not Burned"
    }
]

Celebrity.create(celebrities)
    .then((result) => {
        console.log('celebrities created')
    }).catch((err) => {
        console.log('There is an error ${err}')
    });


const movies = [
    {
    title: 'I Lost My Body',
    genre: 'drama',
    plot: 'Lorem ipsum'
    },
    {
    title: 'The Great Hack',
    genre: 'action',
    plot: 'Lorem ipsum plus'
        },
    {
    title: 'Love in Switzerland',
    genre: 'romance',
    plot: 'Lorem ipsum plus plus'
    }
]

Movie.create(movies)
.then((result)=> {
    console.log('movies created')
}).catch((err) => {
    console.log('There is an error ${err}')
});


module.exports = celebrities;