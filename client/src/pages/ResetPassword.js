import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <>
      <Meta title="Reset Password" />
      <BreadCrumb title="Reset Password" />
      <div className="reset-password-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center signup-title text-black mb-5">
                  Reset Password
                </h3>
                <form
                  className="d-flex flex-column justify-content-center gap-15"
                  action=""
                >
                  <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="confpassword"
                      placeholder="Confirm Password"
                      className="form-control"
                    />
                  </div>
                  <div className="d-flex py-4 flex-column align-items-center justify-content-center gap-15">
                    <button type="submit" className="button">
                      Reset My Password
                    </button>
                    <Link to="/login" className="button cancel">
                      Cancel
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
