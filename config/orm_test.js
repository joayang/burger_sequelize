// Import the ORM and connection objects
var orm = require ('./orm.js');

// Import the connection file directly, in order to terminate the connection at the end of the test run
var connection = require ('./connection.js');

// Select all entries from the database
orm.all('burgers', function (data) {
	console.log('orm.all testing.\n\n');

	console.log('----------------Burger Menu-----------------\n');

	for (var i = 0; i < data.length; i++) {
		console.log('Burger ID = ' + data[i].id);
		console.log('Burger Name = ' + data[i].burger_name);
		console.log('Available = ' + data[i].devoured);

		console.log('*******************************************');
	}
});

// Insert a single entry into the database
orm.create('burgers', 
	         ['burger_name', 'devoured'], 
	         ['Success Story Mushroom Double-Stack Burger', false], 
	         function (data) {
	console.log('\n\norm.create test...\n\n');

	console.log('Inserted new row with ID = ' + data.insertId + '\n\n');
});

// Update a single entry in the database
orm.update('burgers', {devoured: true}, 'id = 1', function (data) {
	console.log('\n\norm.update test...\n\n');

	console.log('Result: ' + data.message);
});

connection.end();
