import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import BlogCard from "../components/BlogCard";

const Blog = () => {
  return (
    <>
      <Meta title="Blogs" />
      <BreadCrumb title="Blogs" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3 py-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Find By Categories </h3>
                <ul className="ps-0">
                  <li>Home</li>
                  <li>Our Store</li>
                  <li>Blogs</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
            <div className="col-9">
              <div className="row d-flex">
                <div className="col-6 py-3">
                  <BlogCard image="4" ex="webp" />
                </div>
                <div className="col-6 py-3">
                  <BlogCard image="3" ex="webp" />
                </div>
                <div className="col-6 py-3">
                  <BlogCard image="1" ex="jpg" />
                </div>
                <div className="col-6 py-3">
                  <BlogCard image="4" ex="webp" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
