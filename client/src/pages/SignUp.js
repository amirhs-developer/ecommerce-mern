import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <Meta title="SignUp" />
      <BreadCrumb title="SignUp" />
      <div className="signup-wrapper home-wrapper-2 py-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h2 className="signup-title text-center">Create Account</h2>
              <form
                action=""
                className="d-flex flex-column justify-content-center gap-15"
              >
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-control"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    className="form-control"
                  />
                </div>

                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <div className="d-flex align-items-center mt-3 justify-content-center gap-15">
                  <button type="submit" className="button">Sign Up</button>
                  <Link to='/login' className="button cancel">Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
