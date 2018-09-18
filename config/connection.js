// Set up Mysql connection
var Sequelize = require("sequelize");
// var mysql = require("mysql");
var sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize("burger_db","root","root", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
  }
});
// create connection
// connection.connect(function (err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });
// export connection for ORM to use
module.exports = sequelize;