// Queries an API and fetches all movie titles then inserts them
// into the UL#list_movies tag

let url = 'https://swapi-api.alx-tools.com/api/films/?format=json';
s.get(url, function (data) {
	let films = data.results;
	for (let flim of films) {
		$('ul#list_movies').append('<li>${film.title}</li>');
	}
});
