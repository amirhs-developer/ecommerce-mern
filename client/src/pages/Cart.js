import React from "react";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import watch from "../images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  return (
    <>
      <Meta title="Cart Page" />
      <BreadCrumb title="Cart Page" />
      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            {/* Shopping list */}
            <div className="col-12">

              <div className="cart-header d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>

              <div className="cart-data d-flex justify-content-between align-items-center py-4">
                <div className="cart-col-1 gap-30 d-flex align-items-center">
                  <div className="w-25">
                    <img className="img-fluid" src={watch} alt="watch" />
                  </div>
                  <div className="w-75">
                    <p className="title">Apple Watch</p>
                    <p className="color">Color</p>
                    <p className="size">Size</p>
                  </div>
                </div>

                <div className="cart-col-2">
                  <h5 className="price">$100</h5>
                </div>

                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      className="form-control"
                      style={{width: "60px"}}
                      min={1}
                      max={10}
                      defaultValue={1}
                      type="number"
                      name=""
                      id=""
                    />
                  </div>
                  <div>
                    <AiFillDelete className="text-danger fs-5" />
                  </div>
                </div>

                <div className="cart-col-4">
                    <h5 className="price">$100</h5>
                </div>
              </div>

            </div>

            {/* Continue Shopping  */}
            
            <div className="col-12 py-3">
                <Link to='/product' className="button">
                    Continue To Shopping 
                </Link>
            </div>
            <div className="d-flex justify-content-between py-3">
                <h5 className="order-special">order specials instruction </h5>
                <div className="d-flex flex-column">
                    <p className="sub-total">subtotals: &nbsp;&nbsp; <b>$100</b></p>
                    <h5 className="shipping-calc my-2 mb-4">Taxes and Shipping calculated at checkout </h5>
                    <Link to='/checkout' className="button text-center">CheckOut</Link>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
