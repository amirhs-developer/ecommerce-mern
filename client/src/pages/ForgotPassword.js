import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <Meta title="Forgot Password" />
      <BreadCrumb title="Forgot Password" />
      <div className="forgot-password-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="forgot-password-card">
              <h3 className="text-center login-title mb-5">
                Reset Your Password
              </h3>
              <p className="description text-center">
                we will send you an email to reset your password account
              </p>
              <form className="d-flex flex-column justify-content-center gap-15" action="">
                <div>
                   <input
                    type="email"
                    name="veri-email"
                    placeholder="Email"
                    className="w-50 form-control"
                  />
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center gap-15">
                  <button type="submit" className="button">Send</button>
                  <Link to='/login' className="cancel">Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
