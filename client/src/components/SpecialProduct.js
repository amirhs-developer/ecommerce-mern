import React from 'react'
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";


const SpecialProduct = () => {
  return (
    <div className="col-4">
        <div className="special-product-card">
            <div className="d-flex justify-content-between">
                <div>
                    <img className='img-fluid' src="images/watch.jpg" alt="watch" />
                </div>

                <div className="special-product-content">
                    <h5 className="brand">Havels</h5>
                    <p6 className="title">
                        Samsung Galaxy Noe10 + Mobile Phone: sim ..
                    </p6>
                    <ReactStars
                        count={5}
                        size={14}
                        edit={false}
                        value="3"
                        activeColor="#ffd700"
                    />
                    <p className="price">
                        <span className='red-p'>$100</span> &nbsp; <strike>$200</strike>
                    </p>
                    <div className="d-flex align-items-center gap-10 discount-fill">
                        <p className='mb-0'>
                            5
                            <b> days</b>
                        </p>
                        <div className="d-flex align-items-center gap-10">
                            <span className="badge rounded-circle p-3 bg-danger bg-gradient">02</span>:
                            <span className="badge rounded-circle p-3 bg-danger bg-gradient">20</span>:
                            <span className="badge rounded-circle p-3 bg-danger bg-gradient">50</span>
                        </div>
                    </div>
                    <div className='prod-count py-2'>
                        <p>Products : 7 </p>
                        <div style={{height: '10px'}} class="progress">
                            <div
                                className="progress-bar" 
                                role="progressbar" 
                                style={{width: '25%'}}
                                aria-valuenow="25" 
                                aria-valuemin="0" 
                                aria-valuemax="100">
                            </div>
                        </div>
                        <Link className='button' to=''>Add To Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialProduct