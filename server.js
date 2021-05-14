import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import index from './config/routes.js';
import ejs from 'ejs';

// loading config files
dotenv.config({ path: './config/.env' });
const app = express();
connectDB();

// loading view engine
app.set('view engine', 'ejs');

//loading parsing functions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// server stuff
const PORT = process.env.PORT || 3001;

app.use('/', index);

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}!`);
});
