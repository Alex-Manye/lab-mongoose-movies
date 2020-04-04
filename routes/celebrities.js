const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

//Iteration #2: Listing Our Celebrities
router.get('/celebrities', (req, res, next) => {
    Celebrity.find()
      .then(artist => {res.render('celebrities', {celebrities: {artist}})})
      .catch(error => {
          console.log('Error while getting the celebrities from the DB: ', error);   
      });
    })

//Iteration #3: The Celebrity Details Page
router.get('celebrities/:id', (req, res, next) => {
    const {id} = req.params;
    Celebrity.findById(id)
        .then(celebrities => {
            res.render('./celebrities/show')
        })
        .catch(error => console.log('${error}'));
});

module.exports = router;
