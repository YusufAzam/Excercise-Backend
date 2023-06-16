import express from 'express';
import { User } from 'models/user-model';

const router = express.Router()
let user = User.find().then().catch()

router.route('/').get((_, res)=>{
    User.find()
    .then(() => res.json('User added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
})