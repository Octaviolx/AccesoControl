const mongoose = require('mongoose');

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

  module.exports = {

    ConnectDB,
  }