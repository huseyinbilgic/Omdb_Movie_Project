import React, { Component } from "react";
import Link from "next/link";
export default class Navi extends Component {
  render() {
    return (
      <div>
        <nav className="container navbar navbar-expand-lg navbar-light ">
          <img src="images/movieup.png" alt="logo"></img>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="routes-link navbar-nav mr-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home{" "}
                </a>
              </li>
              <li className="nav-item">
                <a href="/favorites" className="nav-link">
                  Favorite
                </a>
              </li>
            </ul>
            <div className="input-prepend">
              <form
                action="/search"
                method="get"
                className="entermovie form-inline my-2 my-lg-0"
              >
                <input
                  className="form-control entermovienavi"
                  type="text"
                  name="title"
                  placeholder="Enter movie name here"
                ></input>
                <button className="ibutton" type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
