import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as moviesActions from "../../redux/actions/moviesActions";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static getInitialProps({ movie }) {
    return { movie };
  }

  addToFavorites(movie) {
    localStorage.setItem("favorites", JSON.stringify(movie));
  }
  render() {
    if (this.props.movie.imdb) {
      this.props.actions.getMoviesInfo(this.props.movie.imdb);
    }
    return (
      <div>
        <div className="routeinfo">
          <div className="container home">
            <p className="homeyazi">
              Home/ <span className="searchresult">Film İsmi</span>{" "}
            </p>
          </div>
        </div>

        <div className="container">
          {this.props.movieInfo.map((a) => (
            <div className="row" key={a.imdbID}>
              <div className="col-lg-5 ">
                <img className="detayfilmfoto" src={a.Poster} alt="..."></img>
              </div>

              <div className="col-lg-7">
                <h5>Rating </h5>
                <div className="row">
                  <div className="col">
                    <img src="images/imdb.png" alt=""></img>
                    {a.imdbRating}
                  </div>
                  <div className="col">
                    <button
                      onClick={() => this.addToFavorites(a)}
                      className="btn btn-warning"
                    >
                      <i className="addtofavorite fas fa-heart"></i>Add to
                      Favorites
                    </button>
                  </div>
                </div>
                <h5>{a.Year}</h5>
                <h1>{a.Title}</h1>
                <p>{a.Plot}</p>
                <div className="type">
                  {a.Genre.split(", ").map((g) => (
                    <span>{g} </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="container info">
          <p className="popularmovies">Popular Movies</p>
          <p className="viewmore ml-auto">
            View more <i className="fa fa-arrow-right"></i>
          </p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movieInfo: state.movieDetailReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getMoviesInfo: bindActionCreators(moviesActions.getMoviesInfo, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
