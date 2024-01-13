import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/headersection.css'
function HeaderSection() {
  return (
    <nav class="navbar navbar-expand-lg">
  <div class="container">
    <a class="navbar-brand" href="#">Happy Gloceries</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav m-auto my-2 my-lg-0">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Trending</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link " href=''>
            Products
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" >Add</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" >Contact us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" >Login</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="px-2 search" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  );
}

export default HeaderSection;