import express from 'express';
import { Exercise } from '../models/exercise-model.js';

export const router = express.Router();

router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  //needs validation
 const {username, description, duration, date} =  req.body;

 const newExercise = new Exercise({
    username,
    description,
    duration: Number(duration),
    date: Date.parse(date)
  });

  newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').put((req, res) => {
  //needs validation
  const  {username, description , duration, date} = req.body;
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = username;
      exercise.description = description;
      exercise.duration = Number(duration);
      exercise.date = Date.parse(date);

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});