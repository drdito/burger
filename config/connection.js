// Dependencies
//=======================================================
var mysql = require("mysql");

// Connection to burgers database
//========================================================
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "secret",
  database: "burgers_db"
});

// Connect to the database
//=========================================================
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
//==========================================================
module.exports = connection;
