'use strict';

const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

//Iteration #2: Listing Our Celebrities
//READ (CRUD)

router.get('/', async (req, res, next) => {
  try {
    const celebrity = await Celebrity.find();
    res.render('./celebrities/index', { celebrity });
    } catch (err) {
      console.log('Error while getting the celebrities from the DB: ', err); 
      next(err);
      }
});

// Iteration #4: Adding New Celebrities -> (if it's not here it doesn't work)
//CREATE (CRUD)
router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

//Iteration #3: The Celebrity Details Page

router.get('/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    const celebrity = await Celebrity.findById(id)
    res.render('celebrities/show', celebrity );
    } catch (err) {
      console.log('Error while getting the celebrity from the DB: ', err); 
      next(err);
      }
});


//With async-await
//UPDATE (CRUD)
router.post('/', async (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  const artist = { name, occupation, catchPhrase};
  try {
    if (name) {
      await Celebrity.findOneAndUpdate({ name: name }, artist);
    } else {
      await Celebrity.create(artist);
    }
    res.redirect('/celebrities');
  } catch (err) {
    res.redirect('celebrities/new');
  }
});

router.get('/:id/edit', async (req, res, next) => {
    const { id } = req.params;
    try {
      const artist = await Celebrity.findById(id);
      res.render('celebrities/edit', artist);
    } catch (err) {
      next(err);
    }
  });

  
//DELETE (CRUD)
router.post('/:id/delete', async (req, res, next) => {
  const { id } = req.params;
  try {
    await Celebrity.findByIdAndRemove(id);
    res.redirect('/celebrities');
  } catch (err) {
    next(err);
  }
});



router.post('/:id', async (req, res, next) => {
  const { id } = req.params;
  const { name, occupation, catchPhrase } = req.body;
  const artist = { name, occupation, catchPhrase };
  try {
    await Celebrity.findByIdAndUpdate(id, artist);
    res.redirect('/celebrities');
  } catch (err) {
    next(err);
  }
});

module.exports = router;