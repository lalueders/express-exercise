import express from 'express';
import { nanoid } from 'nanoid';
import Joke from '../models/Joke.js';

const router = express.Router();

/**
 * Exercise 1
 * Create a GET /joke route, that returns all jokes.
 */
router.get('/', async (req, res, next) => {
  const jokes = await Joke.find(); // ruft unsere Einträge aus mongoose ab
  res.json(jokes);
});

/**
 * Exercise 2
 * Create a GET /joke/:id route, that returns the joke for the given id.
 */

router.get('/:id', (req, res, next) => {
  // const { id } = req.params;
  // console.log(id);
  // const joke = jokes.find(joke => joke.id === id);
  // if (joke) {
  //   res.json(joke);
  // } else {
  //   next();
  // }
});

// …

/**
 * Exercise 3
 * Create a POST /joke route, that adds a new joke to the array.
 */

router.post('/:id', (req, res, next) => {
  //   const newJoke = req.body;
  //   newJoke.id = nanoid();
  //   // console.log(newJoke);
  //   jokes.push(newJoke);
  //   res.status(200).json({ newJoke: newJoke });
});

// …

/**
 * Exercise 4
 * Create a PATCH /joke/:id route, that updates the joke for the given id.
 */

router.patch('/:id', (req, res, next) => {
  //   const { id } = req.params;
  //   const updatedJoke = jokes[id].joke;
  //   const jokeIndex = jokes.findIndex(joke => joke.id === id);
  //   jokes[jokeIndex] = {
  //     ...jokes[jokeIndex],
  //     ...req.body,
  //   };
  //   res.status(200).json({
  //     updatedId: id,
  //     updatedJoke: updatedJoke,
  //     replacedBy: jokes[id].joke,
  //   });
});

// …

/**
 * Exercise 5
 * Create a DELETE /joke/:id route, that deletes the joke for the given id.
 */
router.delete('/:id', (req, res, next) => {
  //   const { id } = req.params;
  //   const deletedJoke = jokes[id].joke;
  //   jokes = jokes.filter(joke => joke.id !== id);
  //   res.status(200).json({
  //     deletedId: id,
  //     deletedJoke,
  //   });
});

// …

export default router;
