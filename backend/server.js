//The entry point for the server (backend)
// if you want to import modules the ES6 style in NodeJS you need to add "type": "module", in package.json but if you import a file need to put .js at the end of it.
import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv'; // to make .env file the docs: https://www.npmjs.com/package/dotenv
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from "./routes/userRoutes.js"

dotenv.config();

connectDB();

const app = express();


app.use(express.json()) //express.json will allow us to accept JSON data in the body

app.get('/', (req, res)=>{
    return res.send('API is running');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use(notFound); //this is for 404 page

app.use(errorHandler); //for object ids that dont exist

const PORT = process.env.PORT || 5000; // getting PORT from .env file if cant find use port 5000 as default

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));