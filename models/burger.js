//Calling in orm functions
//=============================================================
var orm = require("../config/orm.js");

//Creating database specific calls using the orm functions
//==============================================================
var burger = {
	selectAll: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},
	insertOne: function(value, cb) {
		orm.insertOne("burgers", "burger_name", value, function(res) {
			cb(res);
		});
	},
	updateOne: function(value, cb) {
		orm.updateOne("burgers", "devoured", true, "burger_name", value, function(res) {
			cb(res);
		});
	}
};

/*updateOne: function(tableInput, colName, value1, updateItem, value2) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colName, value1, updateItem, value20], function(err, result) {
      console.log(result);
    });
  }
};*/

// Export the database functions for the controller.
module.exports = burger;


