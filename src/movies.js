// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const listOfDirectors = moviesArray.map((movie) => {
    movie.director;
  });
  return listOfDirectors;
}
/* bonus: Clean the array of directors */

const getAllDirectors2 = (moviesArray) => {
  const listOfDirectors = moviesArray.map((movie) => movie.director);
  const cleanList = delList.filter(
    (director, index) => delList.indexOf(director) === index
  );
  return cleanList;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const movieDrama = moviesArray.filter((movie) => {
    if (movie.director === "Steven Spielberg" && movie.genre.include("Drama")) {
      return movie;
    }
  });
  return movieDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;
  const sumTotal = moviesArray.reduce((total, movie) => {
    total += movie.score;
    return total;
  }, 0);
  let avrg = sumTotal / moviesArray.length;
  return Number(avrg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaScore = moviesArray.filter((movie) => {
    if (movie.genre.includes("Drama")) {
      return movie;
    }
  });
  return scoresAverage(dramaScore);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newList = [...moviesArray];
  const yearOfMovie = newList.sort((newer, older) => newer.year - older.year);
  return yearOfMovie;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const listAlf = moviesArray
    .map((movie) => movie.title)
    .sort()
    .slice(0, 20);
  return listAlf;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
