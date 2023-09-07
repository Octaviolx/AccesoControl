const express = require("express");
const router = express.Router();
module.exports = router; //Export the router instance

// This section is for receiving authorization petitions


// Login function routing

const { login } = require('../controllers/auth') 

router.post('/signin', login);

// Register function routing

const { register } = require('../controllers/auth')

router.post('/register', register);