import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard() {
  return (
    <>
        <div className="blog-card">
            <div className="card-img">
                <img src="images/blog-1.jpg" className='img-fluid' alt="" />
            </div>
            <div className="blog-content">
                <p className='date'>1 Dec,2022</p>
                <h5 className='title'> A beautiful sunday morning renaissance</h5>
                <p className='desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi mollitia eligendi aspernatur laudantium
                </p>
                <Link to="/" className='button' >Read More</Link>
            </div>
        </div>
    
    </>
  )
}
