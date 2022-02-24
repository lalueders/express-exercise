import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const schema = new Schema({
  text: { type: String, required: true }, // Typ String und es muss etws drin stehen
  date: { type: Date, default: Date.now }, // Date wird automatisch gesetzt, wenn der Eintrag erfolgt
  author: { type: String, required: true },
});

export default model('Joke', schema);
