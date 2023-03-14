import express from 'express';
import corse from 'cors';
import mongoose from 'mongoose';

import { usersRouter } from './routes/users.js';

const app = express();

app.use(express.json());
app.use(corse());

app.use("/auth", usersRouter);

mongoose.connect("mongodb+srv://rami:12345@recipes.5dhgmsq.mongodb.net/recipes?retryWrites=true&w=majority")

app.listen(3001, () => console.log('Server is running on port: 5000'));


