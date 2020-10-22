import * as actionTypes from "./actionTypes";

//get movies
export function getMoviesSuccess(movies) {
  return {
    type: actionTypes.SET_MOVIES,
    payload: movies,
  };
}

export function getMovies(movie, sayfa) {
  return function (dispatch) {
    let url = "http://www.omdbapi.com/?apikey=806311be";
    if (movie.title && movie.yil) {
      url += "&s=" + movie.title + "&y=" + movie.yil + "&page=" + sayfa;
    } else if (movie.title) {
      url += "&s=" + movie.title + "&page=" + sayfa;
    }
    return fetch(url)
      .then((response) => response.json())
      .then((result) => {
        dispatch(
          getMoviesSuccess({
            movies: result.Search,
            totalResults: result.totalResults,
          })
        );
      });
  };
}

export function getMoviesInfoSuccess(movie) {
  return {
    type: actionTypes.SET_MOVIES_INFO,
    payload: movie,
  };
}

export function getMoviesInfo(imdb) {
  return function (dispatch) {
    let url = "http://www.omdbapi.com/?";
    if (imdb) {
      url += "i=" + imdb + "&apikey=806311be";
    }
    return fetch(url)
      .then((response) => response.json())
      .then((result) => {
        dispatch(getMoviesInfoSuccess(result));
      });
  };
}

//add to favorites
