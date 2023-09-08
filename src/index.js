
const http = require('http');

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

// Express server creation

const app = express();

// Settings

//cambio

const PORT = process.env.PORT || 3000; //If there is another port provided, use that one. Otherwise, use the default one (3000)
app.set('json spaces', 2);

const server = http.createServer(app)

// Middlewares

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false})); // We wont work with big files so we use this extension
app.use(express.json());

// Routes

app.use('/api/auth', require ('./routes/auth.js')); 

// Connect to MongoDB

const ConnectDB = async () => {

  mongoose.set('strictQuery', true);

  try {

    await mongoose.connect('mongodb+srv://APIConnectionUser:APIConnectionUserPassword@accesscontrol.7cjnqw2.mongodb.net/')


    // If it connected successfully 

    console.log('DB online');

  } catch (error) {

    // If it didn't connect properly

    console.log(error);
    throw new Error('Error connecting to DB')

  }
};

// Show which port the server is running in

server.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await ConnectDB();

}); 
