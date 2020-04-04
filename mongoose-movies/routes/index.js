const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//iteración 2
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(allCelebritiesFromDB => {
      res.render('celebrities');
    })
    .catch(error => {
      console.log('Error while getting the celebrities from the DB: ', error);
    })
});