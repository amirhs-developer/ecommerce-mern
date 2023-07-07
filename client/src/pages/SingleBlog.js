import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import {HiOutlineArrowLeft} from "react-icons/hi";
import singleblog from "../images/blog-1.jpg";

const SingleBlog = () => {
  return (
    <>
      <Meta title="Dynamic Blog Card" />
      <BreadCrumb title="Dynamic Blog Card" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to='/blog' className="d-flex align-items-center justify-content-start gap-10">
                    <HiOutlineArrowLeft className="fs-4" />
                    Go Back to Blogs
                </Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img src={singleblog} className="img-fluid w-98 my-4" style={{height: '400px'}} alt="blog-1" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt voluptates iusto atque quos aliquam cupiditate iure
                  quia quo ea nihil
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
