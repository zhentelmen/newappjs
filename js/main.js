const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

const personaMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
  b = prompt("На сколько оцените его?", "");

personaMovieDB.movies[a] = b;
console.log(personaMovieDB);
