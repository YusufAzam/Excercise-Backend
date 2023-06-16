import mongoose from "mongoose";

const Schema = mongoose.Schema;

const exceriseSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    }, 
}, {
    timestamps: true
});

export const Excercise = mongoose.model('Excerise', exceriseSchema);