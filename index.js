import express from 'express';
import bodyParser from 'body-parser'
import router from './routes.js';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express()
const port = 5000

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/GigihMidterm', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

app.use('/', router);

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})