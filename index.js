import express from 'express';
import bodyParser from 'body-parser'
import router from './routes.js';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv"

dotenv.config();
const app = express()
const port = 5000
const uri = process.env.MONGODB_URI;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

app.use('/', router);

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})