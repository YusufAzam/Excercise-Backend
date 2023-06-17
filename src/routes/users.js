import express from 'express';
import { User } from '../models/user-model.js';

export const router = express.Router();

router.route('/').get((_, res)=>{
    User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
    const userName = req.body.username;
    const newUser = new User({userName});
    newUser.save()
    .then(()=> res.json('User add'))
    .catch((err)=> res.status(400).json('Error: ' + err));
});
