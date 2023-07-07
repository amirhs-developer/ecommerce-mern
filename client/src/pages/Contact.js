/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import {AiOutlineHome,AiOutlineMail} from "react-icons/ai";
import {BiPhoneCall} from "react-icons/bi";
import {BsInfoLg} from "react-icons/bs";


const Contact = (props) => {
  return (
    <>
      <Meta title="Contact Us" />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1096.6902304701669!2d52.70461532410892!3d36.532957244298004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f84eec7feec6407%3A0x52436f1e076b159!2sMazandaran%20Province%2C%20Iran!5e0!3m2!1sen!2snl!4v1687370051896!5m2!1sen!2snl"
                width="100%"
                height="450"
                className="w-100"
                // eslint-disable-next-line react/style-prop-object
                style={{ border: "0", marginLeft: "auto", marginRight: "auto" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">

                <div className="">
                  <h3 className="contact-title">Contact Us</h3>
                  <form className="d-flex flex-column gap-20" action="">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div>
                      <textarea
                        name="comment"
                        id="comment"
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="comments"
                      ></textarea>
                    </div>
                    <div>
                        <button className="button border-1">Send</button>
                    </div>
                  </form>
                </div>

                <div>
                  <h3 className="contact-title">Get in Touch With Us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-2 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5" />
                        <address className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, quos.</address>
                      </li>
                      <li className="mb-2 d-flex gap-15 align-items-center">
                        <BiPhoneCall className="fs-5"/>
                        <a href="tel:989015898970">+98 9015898970</a>
                      </li>
                      <li className="mb-2 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5"/>
                        <a href="mailto:amir.devask@gmail.com">amir.devask@gmail.com</a>
                      </li>
                      <li className="mb-2 d-flex gap-15 align-items-center">
                        <BsInfoLg className="fs-5" />
                        <p className="mb-0">Mar 25 2023" or "25 Mar 2023</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
