//Import connection to the MySQL database
//=================================================
var connection = require("./connection.js");

// Object for all our SQL statement functions.
//==================================================
var orm = {
  selectAll: function(tableInput) {
    var queryString = "SELECT * FROM ??"
    connection.query(queryString, [tableInput], function(err, result) {
      console.log(result);
    });
  },
  insertOne: function(tableInput, colName, itemToInsert) {
    var queryString = "INSERT INTO ??(??) VALUES (?)";
    connection.query(queryString, [tableInput, colName, itemToInsert], function(err, result) {
      console.log(result);
    });
  },
  updateOne: function(tableInput, colName, value1, updateItem, value2) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colName, value1, updateItem, value20], function(err, result) {
      console.log(result);
    });
  }
};

// Export the orm object for the model
//=====================================================
module.exports = orm;
