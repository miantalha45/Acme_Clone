import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="menu-wrapper">
        <div className="w-dyn-list">
          <div className="w-dyn-items" role="list">
            <div className="w-dyn-item" role="listitem">
              <Link className="banner w-inline-block" to="/covid">
                <div className="container">
                  <div className="banner-content-wrapper">
                    <div className="pill primary alert-bar">Announcement</div>
                    <div>How we're responding to COVID-19</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg"
                alt="Acme Outdoor Logo"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/donate">
                    Donate
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="cart">
                <Link
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBothOptions"
                  className="cart-icon"
                  to="/"
                >
                  <img
                    className="cart-open img-fluid "
                    src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e86146bb854797d12a30a13_cart.svg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="w-commerce-commercecartheader">
          <h4 className="w-commerce-commercecartheading" id="offcanvasWithBothOptionsLabel">
            Your Cart
          </h4>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>No items found.</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
