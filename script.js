' use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 5);
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


let a = prompt('Один из последних просмотренных фильмов?', 'Гренландия'),
    b = prompt('На сколько оцените его?', 8.1),
    c = prompt('Один из последних просмотренных фильмов?', 'Довод'),
    d = prompt('На сколько оцените его?', 7.3);
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
