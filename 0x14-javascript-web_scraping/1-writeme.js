#!/usr/bin/node

const fs = require('fs');
//import the built-in Node.js 'fs' module.

fs.write(process.argv[2], process.argv[3], 'utf8', error => {
//use fs.writeFile() to write data to a file specified as the third command-line argument
		if (error) {
		// if an error occurs during the write operation. the 'error' parameter will contain an error object
			console.error(error);
		}
	});
