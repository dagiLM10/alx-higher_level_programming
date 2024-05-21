#!/usr/bin/node
// web scrapper

const request = require('request');

request.get(process.argv[2], { json: true }, (error, response, body) => {
	if (error) {
		console.log(error);
		return;
	}

	const taskCompleted = {};
	body.forEach((todo) => {
		if (todo.completed) {
			if (!tasksCompleted[todo.userID]) {
				tasksCompleted[todo.userId] = 1;
			} esle {
				tasksCompleted[todo.userId] += 1;
			}
		}
	});
	console.log(taskCompleted);
});
