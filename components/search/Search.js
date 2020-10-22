import React, { Component } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as moviesActions from "../../redux/actions/moviesActions";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { sayi: 1 };
  }
  static getInitialProps({ movie }) {
    return { movie };
  }

  nextpage = () => {
    var totalResults = parseInt(this.props.movies.totalResults);
    if (totalResults % 10 !== 0) {
      if (this.state.sayi < parseInt(totalResults / 10) + 1) {
        this.setState({
          sayi: this.state.sayi + 1,
        });
      }
    } else {
      if (this.state.sayi < parseInt(totalResults / 10)) {
        this.setState({
          sayi: this.state.sayi + 1,
        });
      }
    }
  };
  previouspage = () => {
    if (this.state.sayi > 1) {
      this.setState({
        sayi: this.state.sayi - 1,
      });
    }
  };
  renderfor() {
    let render1 = [];

    for (const key in this.props.movies.movies) {
      render1.push(this.props.movies.movies[key]);
    }

    return render1;
  }
  render() {
    if (this.props.movie.title) {
      this.props.actions.getMovies(this.props.movie, this.state.sayi);
    }

    return (
      <div>
        <div className="routeinfo">
          <div className="container home">
            <p className="homeyazi">
              Home/ <span className="searchresult">Search Result</span>{" "}
            </p>
          </div>
        </div>

        <div className="container">
          <form action="">
            <div className="row searchForm">
              <div className="col-md-3">
                <input
                  type="number"
                  name="yil"
                  placeholder="Yıl"
                  className="form-control form-control-sm"
                ></input>
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  name="tur"
                  placeholder="Tur"
                  className="form-control form-control-sm"
                ></input>
              </div>
              <div className="col-md-4 entermovienaviflex">
                <input
                  className="form-control entermovienavi"
                  type="text"
                  name="title"
                  placeholder="Enter movie name here"
                ></input>

                <button className="ibutton">
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <div className="col-md-2 ">
                <button
                  className=" form-control-md btn btn-warning ortabutton"
                  type="submit"
                >
                  Seach <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="container">
          <p className="searchResult">
            Search result <span>{this.props.movie.title}</span>
          </p>

          <div className="row ">
            {this.renderfor(true).map((movie) => (
              <div className="col-md-4 " key={movie.imdbID}>
                <div className=" filmfoto">
                  <img
                    className="poster"
                    src={movie.Poster}
                    alt="FİLM POSTER"
                  ></img>
                  <div className="filmbottomleft">Movie</div>
                  <div className="filmbottomright">
                    <i className=" heartsymbol far fa-heart"></i>
                  </div>
                </div>
                <div>
                  <span className="imdbfoto">
                    <img src="images/imdb.png" alt="imdb foto"></img> 8.8
                  </span>
                  <p>{movie.Year}</p>

                  <a
                    href={`/detail/?imdb=${movie.imdbID}`}
                    className="card-title"
                  >
                    {movie.Title}
                  </a>

                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Distinctio deleniti nihil saepe placeat fugiat minus,
                    exercitationem tempora consequatur numquam suscipit.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <div className=" row ">
            <div className="col-md-4 "></div>
            <div className="col-md-4">
              <nav aria-label="...">
                <ul className="pagination">
                  <li className="page-item">
                    <button
                      className="page-link"
                      onClick={this.previouspage}
                      aria-disabled="true"
                    >
                      Previous
                    </button>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <button className="page-link">
                      {this.state.sayi}{" "}
                      <span className="sr-only">(current)</span>
                    </button>
                  </li>
                  <li className="page-item">
                    <button onClick={this.nextpage} className="page-link">
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-md-4 "></div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getMovies: bindActionCreators(moviesActions.getMovies, dispatch),
      getMoviesInfo: bindActionCreators(moviesActions.getMoviesInfo, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);
