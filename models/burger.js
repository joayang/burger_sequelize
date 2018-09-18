// Import the ORM to implement functions that will interact with the database
var Sequelize = require('sequelize');
var Sequelize = require('../config/connection.js');
// Creates a "Chirp" model that matches up with DB
// chirp=table name;  ID, TIMESTAMP automatic create
var Burger = sequelize.define("burger", {
  burger_name: Sequelize.STRING,    // burger varchar(225)
  devoured: Sequelize.BOOLEAN
});

// Syncs with DB
Burger.sync();
  // .then(() => console.log("Database has been synced"))
  // .catch((err) => ("Error creating database"))
// // Create the burger object
// var burger = {
//   // Select all burger table entries
//   all: function(cb) {
//     orm.all('burgers', function(res) {
//       cb(res);
//     });
//   },

//   // The variables cols and vals are arrays
//   create: function(cols, vals, cb) {
//     orm.create('burgers', cols, vals, function(res) {
//       cb(res);
//     });
//   },

//   // The objColVals is an object specifying columns as object keys with associated values
//   update: function(objColVals, condition, cb) {
//     orm.update('burgers', objColVals, condition, function(res) {
//       cb(res);
//     });
//   }
// };

// Export the database functions for the controller (burgerController.js).
module.exports = burger;
