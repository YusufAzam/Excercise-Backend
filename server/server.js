import  express from 'express';
import  cors from 'cors';
import { connectToMongoDb } from './connection.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectToMongoDb();

app.listen(port, ()=> {
    console.log(`running on port ${port}`);
})