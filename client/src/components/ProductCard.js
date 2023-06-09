import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch1 from "../images/watch-1.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";

const ProductCard = (props) => {
  
  const { grid } = props;
  let location = useLocation();
  // console.log(location);

  return (
      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link to="/product/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish} alt="wishlist icon" />
            </Link>
          </div>
          <div className="product-image">
            <img src={watch} className="img-fluid" alt="product" />
          </div>

          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Lorem ipsum dolor sit amet.
            </h5>
            <ReactStars
              count={5}
              size={14}
              edit={false}
              value="3"
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block": "d-none"}`} >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam facere,
               quisquam aspernatur veritatis error aliquam. Minima sunt facere, 
               qui dolore quibusdam nihil, obcaecati voluptatem itaque officia vero dolorum similique ad.
            </p>
            <p className="price">$100.00</p>
          </div>

          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-10">
              <Link to="">
                <img src={prodcompare} alt="prodcompare" />
              </Link>
              <Link to="">
                <img src={view} alt="view" />
              </Link>
              <Link to="">
                <img src={addcart} alt="add cart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
  );
};

export default ProductCard;
