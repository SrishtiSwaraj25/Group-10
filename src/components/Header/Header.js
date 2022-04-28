import React from "react"
import { Link } from "gatsby" //to avoid refreshing on each click
import {
  House,
  Person,
  Basket,
  CupStraw,
  Basket3,
  Pen,
  FileMedical,
} from "react-bootstrap-icons"

const Header = () => {
  return (
    <div>
      {/* <h1
        className="back1 display-5 fw-bold lh-1 py-5 m-0 text-center"
        fill="#ffff"
      >
        BANASTHALI WEB SHOP
      </h1> */}

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3 mx-auto justify-content-center">
        <div class="container-fluid">
          <div class="navbar-brand"></div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <div class="d-grid gap-2 d-md-flex justify-content-center mx-auto me-1">
                <Link to="/">
                  <button type="button" class="btn btn-secondary">
                    <House className="mx-auto" size="30" fill="#ffff" />
                    Home
                  </button>
                </Link>
              </div>

              <div class="btn-group mx-auto me-1">
                <button type="button" class="btn btn-secondary">
                  <Link to="/foodcorner">
                    <CupStraw className="mx-auto" size="30" fill="#ffff" />
                    Food Corner
                  </Link>
                </button>
                <button
                  type="button"
                  class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item">
                      <Link to="/mukteshwari">Mukteshwari</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <Link to="/annapurna">Annapurna</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <Link to="/spicybite">Spicy Bite</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <Link to="/shanus">Shanus</Link>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="btn-group mx-auto me-1">
                <button type="button" class="btn btn-secondary">
                  <Link to="/grocery">
                    <Basket3 className="mx-auto" size="30" fill="#ffff" />
                    Grocery
                  </Link>
                </button>
                <button
                  type="button"
                  class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item">
                      <Link to="/agarwal">Agarwal General Store</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <Link to="/shreeshakti">Shree Shakti General Store</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <Link to="/rohit">Rohit Greens And Juice Point</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <Link to="/mukteshwarinewmarket">
                        Mukteshwari General Store
                      </Link>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="btn-group mx-auto me-1">
                <button type="button" class="btn btn-secondary">
                  <Link to="/station">
                    <Pen className="mx-auto" size="30" fill="#ffff" />
                    Stationery
                  </Link>
                </button>
                <button
                  type="button"
                  class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item">
                      <Link to="/bbc">Banasthali Book Center</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <Link to="/dks">D.K. Stationery</Link>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="btn-group mx-auto me-1">
                <button type="button" class="btn btn-secondary">
                  <Link to="/pharmacy">
                    <FileMedical className="mx-auto" size="30" fill="#ffff" />
                    Pharmacy
                  </Link>
                </button>
                <button
                  type="button"
                  class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item">
                      <Link to="/bhadauriyamed">Bhadauriya Medical Store</Link>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item">
                      <Link to="/maheshmed">Mahesh Medical Store</Link>
                    </a>
                  </li>
                </ul>
              </div>

              {/* <li class="btn text-light text-decoration-none">
                <Link class="text-warning text-decoration-none" to="/blog">
                  Blog
                </Link>
              </li>{" "} */}
            </ul>
            {/* <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search Products"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <div class="d-grid gap-2 d-md-flex justify-content-md-end me-1">
              <Link to="/signup">
                <button type="button" class="btn btn-secondary">
                  <Person className="mx-auto" size="30" fill="#ffff" />
                  My Account
                </button>
              </Link>
            </div>

            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="button" class="btn btn-secondary">
                <Basket className="mx-auto" size="30" fill="#ffff" />
                CART
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
