import React from 'react'
import {Link} from 'react-router-dom';
import {BsLinkedin,BsGithub,BsYoutube,BsTelegram} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import newsletter from "../images/instagram-share-icon.svg";

const Footer = () => {
  return (
    <div className="footer-container">

      <footer className='py-3 f-1'>
        <div className="container-xxl" >
          <div className="row d-flex align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-10 align-items-center">
                  <img style={{width: '25px', height: '25px'}} src={newsletter} alt="" />
                  <h2 className='mb-0 text-dark'>SignUp for newsletter </h2>
              </div>
            </div>
            <div className="col-7">
              <div class="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address ..."
                  aria-label="Your Email Address ..."
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text p-2" id="basic-addon2">
                  <span>Subscribe </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='f-2'>
        <div className="container-xxl">
          <div className="row">
              <div className="col-4">
                <h4 className='mb-4'>Contact Us</h4>
                <div>
                  <address style={{marginTop: '2em'}} className='fs-6'> Fake Address 1436 S Philadelphia Blvd
                    <br />
                    Aberdeen <br/>
                    zip/postalCode: 21001 <br />
                  </address>
                  <a href="tel:+98 9015898970" className="mt-1 d-block text-dark fs-6">
                    +98 9015898970
                  </a>
                  <a href="mailto:amir.devask@gmail.com" className="mt-1 d-block mb-3 text-dark fs-6">
                    amir.devask@gmail.com
                  </a>
                </div>
                <div style={{marginTop: '2.8em'}} className="social-icons d-flex align-items-center justify-content-start gap-15">
                    <Link to="/">
                      <BsLinkedin className='text-dark social-icon-fs'/>
                    </Link>
                    <Link to="/">
                      <BsGithub className='text-dark social-icon-fs' />
                    </Link>
                    <Link to="/">
                      <AiFillInstagram className='text-dark social-icon-fs' />
                    </Link>
                    <Link to="/">
                    <BsTelegram className='text-dark social-icon-fs' />
                    </Link>
                    <Link to="/">
                      <BsYoutube className='text-dark social-icon-fs' />
                    </Link>
                </div>
              </div>
              <div className="col-3">
                <h4 className='mb-4'>Information</h4>
                <div className="footer-links d-flex flex-column">
                    <Link to='/privacy-policy' className='text-black mb-1 py-2'>Privacy Policy</Link>
                    <Link to='/refund-policy' className='text-black mb-1 py-2'>Refund Policy</Link>
                    <Link to='/shipping-policy' className='text-black mb-1 py-2'>Shipping Policy</Link>
                    <Link to='/term-conditions' className='text-black mb-1 py-2'>Terms Of Service</Link>
                    <Link to='/blog' className='text-black mb-1 py-2'>Blogs</Link>
                 </div>
              </div>
              <div className="col-3">
                <h4 className='mb-4'>Account</h4>
                <div className="footer-links d-flex flex-column">
                    <Link className='text-black mb-1 py-2'>Search</Link>
                    <Link className='text-black mb-1 py-2'>Faq</Link>
                    <Link className='text-black mb-1 py-2'>About Us</Link>
                    <Link className='text-black mb-1 py-2'>Contact</Link>
                    <Link className='text-black mb-1 py-2'>Size Chart</Link>
                 </div>
              </div>
              <div className="col-2">
                <h4 className='mb-4'>Quick Links</h4>
                <div className="footer-links d-flex flex-column">
                    <Link className='text-black mb-1 py-2'>Accessories</Link>
                    <Link className='text-black mb-1 py-2'>Laptops</Link>
                    <Link className='text-black mb-1 py-2'>Headphones</Link>
                    <Link className='text-black mb-1 py-2'>Tablets</Link>
                    <Link className='text-black mb-1 py-2'>Smart Watches</Link>
                </div>
              </div>
          </div>
        </div>
      </footer>


      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-dark developer">
                &copy; {new Date().getFullYear()} Amirhs - developer
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer