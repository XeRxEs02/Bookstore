import express, { request, response } from 'express';
import {PORT,mongoDBURL} from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';
const app=express();
app.use(express.json());
app.use(cors());
app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send('HEY THERE WELCOME!');
});
app.use('/books',booksRoute);
mongoose.connect(mongoDBURL)
.then(()=>{
console.log('App connected to data base');
app.listen(PORT,()=>{
    console.log(`App is Listening to port: ${PORT}`);
});
})
.catch((error)=>{
console.log(error);
});
