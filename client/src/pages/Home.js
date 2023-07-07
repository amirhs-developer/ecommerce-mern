import React from "react";
import {Link} from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';

const Home = () => {
  return (
    <>
      {/* banner */}
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row d-flex">
            <div className="col-6">
              <div className="main-banner position-relative wrapper-banner p-3">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner`"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex flex-wrap gap-6 justify-content-between align-items-center">
                <div className="small-banner position-relative p-3">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="small banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SALE</h4>
                    <h5>Laptops Max</h5>
                    <p>From $16.99 <br />or $64.62/mo.</p>
                  </div>
                </div>

                <div className="small-banner position-relative p-3">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="small banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>15% OFF</h4>
                    <h5>Smartwatch 7</h5>
                    <p>Shop the latest band <br /> styles and color</p>
                  </div>
                </div>

                <div className="small-banner position-relative p-3">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="small banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy IPad Air</h5>
                    <p>From $45.99 or <br /> $64.62/mo.</p>
                  </div>
                </div>

                 <div className="small-banner position-relative p-3">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="small banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>FREE ENGRAVING</h4>
                    <h5>AirPods Max</h5>
                    <p>From $45.99 or <br /> $64.62/mo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* services*/}
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
               <div className="d-flex justify-content-center align-items-center gap-15">
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping </h6>
                    <p className="mb-0">From all orders over $5</p>
                  </div>
               </div>

               <div className="d-flex justify-content-center align-items-center gap-15">
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save upto 25% off</p>
                  </div>
               </div>

               <div className="d-flex justify-content-center align-items-center gap-15">
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
               </div>

               <div className="d-flex justify-content-center align-items-center gap-15">
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory Default Price</p>
                  </div>
               </div>

               <div className="d-flex justify-content-center align-items-center gap-15">
                  <img src="images/service-05.png" alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payments </p>
                  </div>
               </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* categories */}
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>12 Items</p>
                  </div>
                  <img src='images/tv.jpg' alt='tv' />
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <h6>Headphones</h6>
                    <p>9 Items</p>
                  </div>
                  <img src='images/headphone.jpg' alt='headphone' />
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>12 Items</p>
                  </div>
                  <img src='images/tv.jpg' alt='tv' />
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <h6>Headphones</h6>
                    <p>9 Items</p>
                  </div>
                  <img src='images/headphone.jpg' alt='headphone' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* marquee */}
      <section className="marquee-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
              <div className="col-12">
                <div className="marquee-inner-wrapper card-wrapper">
                  <Marquee className='d-flex'>
                   <div className="mx-4 w-25">
                      <img src='images/brand-01.png' alt='brand' />
                   </div>
                   <div className="mx-4 w-25">
                      <img src='images/brand-02.png' alt='brand' />
                   </div>
                   <div className="mx-4 w-25">
                      <img src='images/brand-03.png' alt='brand' />
                   </div>
                   <div className="mx-4 w-25">
                      <img src='images/brand-04.png' alt='brand' />
                   </div>
                   <div className="mx-4 w-25">
                      <img src='images/brand-05.png' alt='brand' />
                   </div>
                   <div className="mx-4 w-25">
                      <img src='images/brand-06.png' alt='brand' />
                   </div>
                   <div className="mx-4 w-25">
                      <img src='images/brand-07.png' alt='brand' />
                   </div>
                  </Marquee>
                </div>
              </div>
          </div>
        </div>
      </section>
      {/* Product Card */}
      <section className="product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              <h1 className="section-heading">Featured Collection</h1>
              <p style={{fontSize: '22px',opacity: '.7'}}>{`< >`}</p>
            </div>
            <ProductCard image='' ex='' />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      {/* Famous Card */}
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card bg-light position-relative">
                <img className="img-fluid" src="images/famous-1.webp" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5>BIG SCREEN</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 or 16.62/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>
             <div className="col-3">
              <div className="famous-card bg-light position-relative">
                <img className="img-fluid" src="images/famous-2.webp" alt="famous-card" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Studio Display</h5>
                  <h6 className="text-dark">600 nits of brightness</h6>
                  <p className="text-dark">27-inch 5k retina Display ... </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card bg-light position-relative">
                <img className="img-fluid" src="images/famous-3.webp" alt="famous-card" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">SmartPhones</h5>
                  <h6 className="text-dark">iPhone 13 Pro Max</h6>
                  <p className="text-dark">Now in Green from $999 or $41.62/mo for 24 mo. Footnote* </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card bg-light position-relative">
                <img className="img-fluid" src="images/famous-4.webp" alt="famous-card" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Home Speakers</h5>
                  <h6 className="text-dark">Room-Filling Sound</h6>
                  <p className="text-dark">From $699 or $116.58/mo for 12 mo.*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Special Wrapper */}
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row d-flex">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
      {/* Popular Products */}
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
      {/* blog cards */}
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h1 className="section-heading">Out Latest Blogs</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard image="1" ex="jpg" />
            </div>
            <div className="col-3">
              <BlogCard image="3" ex="webp" />
            </div>
            <div className="col-3">
               <BlogCard image="1" ex="jpg" />
            </div>
            <div className="col-3">
              <BlogCard image="4" ex="webp" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
