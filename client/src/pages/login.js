import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <>
      <Meta title="Account" />
      <BreadCrumb title="Account" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center login-title mb-5">login to Shopping App</h3>
              <form action="" className="d-flex flex-column justify-content-center gap-15">
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
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control mt-3"
                  />
                </div>

                <div>
                  <Link className="forgot-password" to="/forgot-password">Forgot your Password ?</Link>
                  <div className="d-flex align-items-center mt-3 justify-content-center gap-15">
                    <button type="submit" className="button">login</button>
                    <Link to='/signup' className="button signup">SignUp</Link>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
