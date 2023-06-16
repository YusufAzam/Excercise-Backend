import mongoose from 'mongoose';

export const connectToMongoDb = () => {
    const uri = process.env.ATLAS_URI;
    mongoose.connect(uri);
}