import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import ColorItem from "../components/ColorItem";
import ReactStars from "react-rating-stars-component";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";

const OurStore = () => {
  const [grid, setGrid] = useState(3);

  return (
    <>
      <Meta title="Our Store" />
      <BreadCrumb title="Our Store" />
      {/* Store Section */}
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            {/* side bar => categories and .... */}
            <div className="col-3">
              {/* section */}
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop by Categories</h3>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>

              {/* section */}
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availablity</h5>
                  <div className="d-flex align-items-center gap-2 form-check">
                    <input
                      type="checkbox"
                      className="mb-0 form-check-input"
                      value=""
                      id="s-1"
                    />
                    <label
                      htmlFor=""
                      className="mb-0 mt-1 form-check-label"
                      for="s-1"
                    >
                      In Stock (1)
                    </label>
                  </div>
                  <div className="d-flex align-items-center gap-2 form-check">
                    <input
                      type="checkbox"
                      className="mb-0 form-check-input"
                      value=""
                      id="s-2"
                    />
                    <label
                      htmlFor=""
                      className="mb-0 mt-1 form-check-label"
                      for="s-2"
                    >
                      Out of Stock (0)
                    </label>
                  </div>
                  {/* Price Section */}
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <form className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInputValue"
                        placeholder="From"
                      />
                      <label htmlFor="floatingInputValue">From</label>
                    </form>
                    <form className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInputValue"
                        placeholder="To"
                      />
                      <label htmlFor="floatingInputValue">To</label>
                    </form>
                  </div>
                  {/* Colors Section */}
                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <ul className="colors ps-0">
                      <ColorItem color="#D98880" />
                      <ColorItem color="#D7BDE2" />
                      <ColorItem color="##48C9B0" />
                      <ColorItem color="#F4D03F" />
                      <ColorItem color="green" />
                      <ColorItem color="black" />
                      <ColorItem color="#F4D03F" />
                      <ColorItem color="#9FE2BF" />
                      <ColorItem color="#217A11" />
                      <ColorItem color="#D4EFDF" />
                      <ColorItem color="LightCoral" />
                      <ColorItem color="DarkSalmon" />
                      <ColorItem color="#FF7F50" />
                      <ColorItem color="orange" />
                      <ColorItem color="red" />
                      <ColorItem color="lightblue" />
                      <ColorItem color="lightpink" />
                      <ColorItem color="skyblue" />
                      <ColorItem color="#196F3D" />
                    </ul>
                  </div>

                  {/* Size Section */}
                  <div className="d-flex flex-column align-items-start">
                    <h5
                      style={{ marginBottom: "3px", marginLeft: "-.2em" }}
                      className="sub-title"
                    >
                      Size
                    </h5>
                    <div className="d-flex align-items-center gap-2 form-check">
                      <input
                        type="checkbox"
                        className="mb-0 form-check-input"
                        value=""
                        id="color-1"
                      />
                      <label
                        htmlFor=""
                        className="mb-0 mt-1 form-check-label"
                        for="color-1"
                      >
                        S (2)
                      </label>
                    </div>
                    <div className="d-flex align-items-center gap-2 form-check">
                      <input
                        type="checkbox"
                        className="mb-0 form-check-input"
                        value=""
                        id="color-2"
                      />
                      <label
                        htmlFor=""
                        className="mb-0 mt-1 form-check-label"
                        for="color-2"
                      >
                        M (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* section Product Tags */}
              <div className="filter-card mb-3">
                <h3 className="filter-title py-2">Product Tags</h3>
                <div>
                  <div className="d-flex flex-wrap align-items-center gap-10 product-tags">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Headphone
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Mobile
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Wire
                    </span>
                  </div>
                </div>
              </div>

              {/* section Random Products */}
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-product d-flex align-items-center">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5>Kids Headphones Bulk 10 Pack Multi Colored For ..</h5>
                      <ReactStars
                        count={5}
                        size={14}
                        edit={false}
                        value="3"
                        activeColor="#ffd700"
                      />
                      <b>300$</b>
                    </div>
                  </div>
                  <div className="random-product d-flex align-items-center">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5>Kids Headphones Bulk 10 Pack Multi Colored For ..</h5>
                      <ReactStars
                        count={5}
                        size={14}
                        edit={false}
                        value="3"
                        activeColor="#ffd700"
                      />
                      <b>300$</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content contain of products and .... */}
            <div className="col-9">
              <div className="filter-sort-grid">
                <div className="d-flex align-items-center justify-content-between gap-10">
                  <div className="d-flex align-items-center">
                    <p style={{ width: "100px" }} className="mb-0">
                      Sort By{" "}
                    </p>
                    <select
                      className="form-control form-select form-select-sm"
                      aria-label=".form-select-sm example"
                      name=""
                      id=""
                    >
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected>
                        Best Selling
                      </option>
                      <option value="title-ascending">
                        Alphabeticaly, A-Z{" "}
                      </option>
                      <option value="title-descending">
                        Alphabeticaly, Z-A{" "}
                      </option>
                      <option value="price-ascending">
                        Price , low to high
                      </option>
                      <option value="price-descending">
                        Price , high to low
                      </option>
                      <option value="created-ascending">
                        Date , old to new
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="d-flex align-items-center mb-0 total-products">
                      21 Products
                    </p>
                    <div className="d-flex grid align-items-center gap-10">
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        src="images/gr4.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        src="images/gr3.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        src="images/gr2.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        src="images/gr.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="product-list pb-5">
                <div className="d-flex flex-wrap justify-content-start align-items-center gap-5 py-4">
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
