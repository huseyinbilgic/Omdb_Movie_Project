import React, { Component } from "react";

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: { title: "", yil: null, tur: null },
    };
  }
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <div className="welcome">
          <div className="container">
            <div className="welcome-div">
              <p className="welcome-text">
                Welcome to <br /> <b>MovieUP.</b>
              </p>
              <p className="welcome-subtext">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis impedit, assumenda earum alias distinctio
                repellendus quas atque beatae, officia quis quaerat est quod sed
                numquam inventore praesentium in? In, atque?
              </p>
            </div>
            <div className="searchForm">
              <form
                action={
                  (this.state.movie.yil !== null) &
                  (this.state.movie.title !== null)
                    ? `/search?title=${this.state.movie.title}&yil=${this.state.movie.yil}`
                    : (this.state.movie.title !== "") &
                      (this.state.movie.yil === null)
                    ? `/search?title=${this.state.movie.title}`
                    : `/search`
                }
                method="get"
              >
                <div className="row ">
                  <div className="col-md-3">
                    <input
                      type="number"
                      className="form-control form-control-sm"
                      name="yil"
                      placeholder="Yıl"
                      onChange={this.handleChange}
                    ></input>
                  </div>
                  <div className="col-md-3">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      name="tur"
                      placeholder="Tur"
                      onChange={this.handleChange}
                    ></input>
                  </div>
                  <div className="col-md-4 entermovienaviflex">
                    <input
                      className="form-control entermovienavi"
                      type="text"
                      placeholder="Enter movie name here"
                      name="title"
                      onChange={this.handleChange}
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
          </div>
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
