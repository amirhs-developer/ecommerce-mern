import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = (props) => {
  return (
        <div className='blog-card'>
            <div className="image-card">
                <img className='img-fluid w-100' src={`images/blog-${props.image}.${props.ex}`} alt="card" />
            </div>
            <div className="blog-content">
                <p className='date'>1 dec , 2023</p>
                <h5 className="title">A Beautiful Sunday Morning </h5>
                <p className="description">Lorem ipsum dolor sit amet consectetur,
                 adipisicing elit. Molestias vitae laudantium veniam in tempora aliquid harum, facere numquam esse nobis?
                 </p>
                <Link to='/blog/:id' className='button'>Read More</Link>
            </div>
        </div>
  )
}

export default BlogCard;