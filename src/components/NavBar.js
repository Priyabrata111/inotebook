import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <Link className="navbar-brand" to="/">
          iNoteBook
        </Link>
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
          <ul className="navbar-nav mr-auto">
            <li
              className={`nav-item ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
          </ul>
          <form className="d-flex ms-auto my-2 my-lg-0" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
