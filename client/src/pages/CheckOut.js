import React from "react";

const CheckOut = () => {
  return (
    <>
      <div className="checkout-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">
            {/* left side  */}
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">Amir Dev</h3>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Library
                    </li>
                  </ol>
                </nav>
              </div>
            </div>

            {/* right side  */}
            <div className="col-5"></div>

            <div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
