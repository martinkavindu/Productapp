import React from 'react';
import '../styles/headersection.css';
import { useNavigate } from 'react-router-dom';

function HeaderSection() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/');
  };

  const isAuthenticated = localStorage.getItem('accessToken') !== null;

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#">
          Happy Gloceries
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav m-auto my-2 my-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Trending
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link " href="/allproducts">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/addproduct">
                Add
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact us
              </a>
            </li>
            {isAuthenticated ? (
              <li className="nav-item">
                <a className="nav-link" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}
          </ul>
          <form className="d-flex">
            <input
              className="px-2 search"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default HeaderSection;
