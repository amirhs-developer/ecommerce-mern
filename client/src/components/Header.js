import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-black mb-0">
                Free Shipping Application & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-black mb-0">
                Tel:{" "}
                <a className="text-black" href="tel:+98 9015898970 ">
                  +98 9015898970
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items">
            <div className="col-2">
              <h2>
                <Link className="text-black">Digital</Link>
              </h2>
            </div>
            <div className="col-6">
              <div class="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Product ..."
                  aria-label="Search Product ..."
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            
            <div className="col-4">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/compare-product"
                    className="text-black d-flex align-items-center gap-10"
                  >
                    <img src="images/compare.svg" alt="compare" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="text-black d-flex align-items-center gap-10"
                  >
                    <img
                      class="heart"
                      src="images/wishlist.svg"
                      alt="wishlist"
                    />
                    <p className="mb-0">
                      Favorite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="text-black d-flex align-items-center gap-10"
                  >
                    <img src="images/user.svg" alt="user" />
                    <p className="mb-0">
                      Login <br /> Account{" "}
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="text-black d-flex align-items-center gap-10"
                  >
                    <img src="images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column">
                      <span
                        style={{ opacity: 0.7 }}
                        className="badge-shopping badge bg-dark text-white"
                      >
                        1
                      </span>
                      <p className="mb-0">50000$</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-sm dropdown-toggle d-flex align-items-center gap-15"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="images/menu.svg" alt="images" />
                      Shop Categories
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" href="#">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" href="#">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-30">
                    <NavLink to="/" className="font-size-22 text-black">
                      Home
                    </NavLink>
                    <NavLink to="/product" className="font-size-22 text-black">
                      Our Store
                    </NavLink>
                    <NavLink to="/blog" className="font-size-22 text-black">
                      Blogs
                    </NavLink>
                    <NavLink to="/contact" className="font-size-22 text-black">
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
