import  express from 'express';
import  cors from 'cors';
import { connectToMongoDb } from './connection.js';
import dotenv from 'dotenv';
import { router as userRouter } from '../routes/users.js';
import { router as excerciseRouter } from '../routes/excercise.js';


dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectToMongoDb();

app.use('/excercise', excerciseRouter);
app.use('/users', userRouter);

app.listen(port, ()=> {
    console.log(`running on port ${port}`);
});