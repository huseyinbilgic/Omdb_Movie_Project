import React, { Component } from "react";

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
    };
  }
  componentDidMount() {
    // localStorage.removeItem("favorites")
    const items = JSON.parse(localStorage.getItem("favorites"));
    console.log(items);
    this.setState({
      movie: items,
    });
  }
  render() {
    return (
      <div>
        <div className="routeinfo">
          <div className="container home">
            <p className="homeyazi">
              Home/ <span className="searchresult">Favorites</span>
            </p>
          </div>
        </div>

        <div className="container">
          <p className="searchResult">Favorites </p>

          <div className="row ">
            <div className="col-md-4 ">
              <div className=" filmfoto">
                <img
                  className="poster"
                  src={this.state.movie.Poster}
                  alt="Card image cap"
                ></img>
                <div className="filmbottomleft">Movie</div>
                <div className="filmbottomright">
                  <i className=" heartsymbol far fa-heart"></i>
                </div>
              </div>
              <div>
                <span className="imdbfoto">
                  <img src="images/imdb.png" alt="imdb foto"></img>{" "}
                  {this.state.movie.imdbRating}
                </span>
                <p>{this.state.movie.Year}</p>
                <h5 className="card-title">{this.state.movie["Title"]}</h5>
                <p className="card-text">{this.state.movie.Plot}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className=" row ">
            <div className="col-md-4 "></div>
            <div className="col-md-4">
              <nav aria-label="...">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" aria-disabled="true">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <a className="page-link" href="#">
                      2 <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
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
