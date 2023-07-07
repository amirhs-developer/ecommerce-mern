import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = (props) => {
  const { title } = props;
  return (
    <div className="breadcrumb py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <p>
              <Link className="text-dark" to="/">
                Home &nbsp;
              </Link>
              / {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
