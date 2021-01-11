' use strict';
let numberOfFilms;

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', 5);
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', 5);
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', 'Гренландия'),
                  b = prompt('На сколько оцените его?', 8.1);
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено мало фильмов.");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель)");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман!!!))");
        } else {
            console.log("Произошла ошибка!!!");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden){
            console.log(personalMovieDB);
        } 
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) { 
            let genres = prompt(`Ваш любимый жанр под номером ${i}`, 'drama');
            if(genres == '' || genres == null) {
                console.log(1); 
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genres;
            }
            
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр # ${i + 1} - это ${item}`);
        });
    }
};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();