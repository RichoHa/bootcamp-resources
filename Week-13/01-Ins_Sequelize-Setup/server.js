const express = require('express');

// Import the connection object
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

//registering 2 middle ware: 
//json to javascript.
app.use(express.json());
//handles mapping things to URL saftey.
app.use(express.urlencoded({ extended: true }));


// Connect to the database before starting the Express.js server
// Syncing the models. 
// Javascript world we model things with objects.

// Can define objects and have them map it to the table.
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
