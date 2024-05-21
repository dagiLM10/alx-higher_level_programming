#!/usr/bin/node

const fs = require('fs');

fs.write(process.argv[2], process.argv[3], 'utf-8',
	function (err) {
		if (err) {
			console.log(err);
		}
	});
