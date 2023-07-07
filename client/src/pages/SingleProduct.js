import React, { useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import ColorItem from "../components/ColorItem";
import {GrFavorite} from "react-icons/gr";
import {TbGitCompare} from "react-icons/tb";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  const props = {
    width: 400,
    height: 250,
    zoomWidth: 500,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
  };
  const [orderedProduct, setOrderedProduct] = useState(true);
  const comments_number = [1, 2, 3];

  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
}

  return (
    <>
      <Meta title="Product Name" />
      <BreadCrumb title="Product Name" />

      <div className="main-product home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">

            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
                <div className="other-product-images d-flex flex-wrap justify-content-between gap-15 py-4 border-0">
                  <div>
                    <img
                      src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div>
                    <img
                      src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6">
                <div className="main-product-details">

                    <div className="border-bottom">
                        <h3 className="title">Apple Watch Series 8</h3>
                    </div>

                    <div className="border-bottom">
                        <p className="price">$100</p>
                        <div className="d-flex align-items-center gap-10 mb-2">
                             <ReactStars
                               count={5}
                               size={12}
                               edit={true}
                               value="4"
                               activeColor="#ffd700"
                            />
                            <p className="mb-0 rv">( 2 reviews )</p>
                        </div>

                        <a href="#review" className="fs-7 py-2 write-review-title">Write a review </a>
                    </div>

                    <div className="border-bottom mt-3">
                        <div className="d-flex align-items-center gap-10 my-3">
                            <h3 className="product-heading">Type :</h3>
                            <p className="product-data">Watch</p>
                        </div>
                        <div className="d-flex align-items-center gap-10 my-3">
                            <h3 className="product-heading">Brand :</h3>
                            <p className="product-data">Apple</p>
                        </div>
                        <div className="d-flex align-items-center gap-10 my-3">
                            <h3 className="product-heading">Category :</h3>
                            <p className="product-data">Watch</p>
                        </div>
                        <div className="d-flex align-items-center gap-10 my-3">
                            <h3 className="product-heading">Tags :</h3>
                            <p className="product-data">Watch</p>
                        </div>
                        <div className="d-flex align-items-center gap-10 my-3">
                            <h3 className="product-heading">Availablity :</h3>
                            <p className="product-data">In Stock</p>
                        </div>
                        <div className="d-flex flex-column justify-content-start gap-10 my-3">
                            <h3 className="product-heading">Size :</h3>
                            <div className="d-flex gap-3 align-items-center">
                                <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                                <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                                <span className="badge border border-1 bg-white text-dark border-secondary">L</span>
                                <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                            </div>
                        </div>
                        <div className="d-flex flex-column gap-10 my-3 mb-2">
                            <h3 className="product-heading">Colors :</h3>
                            <div className="d-flex align-items-center gap-10">
                                <ul className="colors p-0">
                                    <ColorItem color='red' />
                                    <ColorItem color='blue' />
                                </ul>
                            </div>
                        </div>
                        <div className="d-flex buy-card align-items-center gap-3 pb-4">
                            <h3 className="product-heading">Quantity</h3>
                            <input 
                              type="number" 
                              name="quantity"
                              defaultValue={1}
                              id="qunatityofproduct"
                              style={{width:"60px",height: '30px'}}
                              className="form-control"
                              min={1}
                              max={10}
                            />
                            <button className="button">Add to Cart</button>
                            <button className="button signup border-0">Buy it now</button>
                        </div>
                        <div className="d-flex align-items-center gap-5 py-3">
                            <div className="d-flex align-items-center gap-2">
                                <Link to=''>
                                    <GrFavorite className="grfavorite" />
                                </Link>
                                <Link to='' className="mb-0 text-dark">
                                        Add To Wishlist
                                </Link>
                            </div>
                           <div className="d-flex align-items-center gap-2">
                                <Link to=''>
                                    <TbGitCompare className="text-dark tbcompare" />
                                </Link>
                                <Link to='' className="mb-0 text-dark">
                                    Add To Compare
                                </Link>
                           </div>
                        </div>

                        <div className="d-flex flex-column gap-10 my-3">
                            <h3 className="product-heading">Shipping & Return</h3>
                            <p className="product-data">
                                free shipping and return available on all orders <br />
                                we shipp all US domestic orders within 
                                <b>5-10 business days!</b>
                            </p>
                        </div>

                        <div className="d-flex align-items-center gap-20 my-3">
                            <h3 className="product-heading">Product Link</h3>
                            <a className="text-secondary" href="javascript:void(0);" onClick={() => {
                                copyToClipboard("https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg")
                            }}>
                                Copy Link Product
                            </a>
                        </div>
                    </div>

                </div>
            </div>
          </div>

          <div className="description-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
              <div className="row">
                <div className="col-12">
                  <h4>Description</h4>
                  <div className="bg-white p-3">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellat, repellendus ratione! Dolore tempore laudantium
                      omnis? Consequatur labore qui eaque adipisci.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section id="review" className="reviews-wrapper home-wrapper-2 py-3">
            <div className="container-xxl">
              <div className="row">
                <div className="col-12">
                  <div className="reviews-inner-wrapper">
                    <div className="reviews-head d-flex justify-content-between align-items-end">
                      <div>
                        <h4 className="customer-reviews">Customer Reviews</h4>
                        <div className="d-flex align-items-center gap-10">
                          <ReactStars
                            count={5}
                            size={18}
                            edit={false}
                            value="3"
                            activeColor="#ffd700"
                          />
                          <p className="mb-0">based on 2 reviews</p>
                        </div>
                      </div>

                      {orderedProduct && (
                        <div>
                          <a href="#" className="write-review-title">
                            Write a Review{" "}
                          </a>
                        </div>
                      )}
                    </div>

                    <div className="reviews-form">
                      <h4>Write a Review</h4>
                      <form action="" className="d-flex flex-column gap-20">
                        <div className="d-flex flex-column justify-content-start">
                          <p className="r-form-head mb-0 pb-2">FirstName</p>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your Name"
                          />
                        </div>

                        <div className="d-flex flex-column justify-content-start">
                          <p className="r-form-head mb-0 pb-2">Email</p>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="amir.devask@gmail.com"
                          />
                        </div>

                        <div className="d-flex flex-column justify-content-start">
                          <p className="r-form-head pb-2 mb-0">Rating</p>
                          <ReactStars
                            count={5}
                            size={12}
                            edit={true}
                            value="0"
                            activeColor="#ffd700"
                          />
                        </div>

                        <div className="d-flex flex-column justify-content-start">
                          <p className="r-form-head mb-0 pb-2">Review Title</p>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="give your review title"
                          />
                        </div>

                        <div className="d-flex flex-column justify-content-start">
                          <p className="r-form-head mb-0 pb-2">
                            Body of Review (1500)
                          </p>
                          <textarea
                            name="comment"
                            id="comment"
                            className="form-control"
                            cols="10"
                            rows="40"
                            placeholder="write your comment here"
                            style={{ height: "210px" }}
                          ></textarea>
                        </div>

                        <div className="d-flex justify-content-end py-2">
                          <button type="submit" className="sub-review button">
                            Submit Review
                          </button>
                        </div>
                      </form>
                    </div>

                    <div className="reviews">
                      {comments_number.map((item, index) => (
                        <div className="review d-flex flex-column gap-10">
                          <div className="d-flex align-items-center gap-10">
                            <h6 className="mb-0 user-name">Mohammad</h6>
                            <ReactStars
                              count={5}
                              size={12}
                              edit={false}
                              value="3"
                              activeColor="#ffd700"
                            />
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptates voluptatem rem aut dignissimos,
                            officia atque temporibus debitis. Pariatur, maxime
                            veritatis doloribus ut quas quod unde voluptatem!
                            Harum et ad fuga perferendis! Totam vero
                            perspiciatis ut quibusdam. Veritatis laudantium
                            possimus commodi maiores tenetur fugit, voluptas,
                            voluptates dolorem velit, omnis ipsum cum.
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="popular-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
              <div className="row">
                <div className="col-12">
                  <h3 className="section-heading"> Our Popular Products</h3>
                </div>
              </div>
              <div className="row">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
