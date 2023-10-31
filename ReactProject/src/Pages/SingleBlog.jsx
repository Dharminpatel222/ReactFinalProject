import React from 'react'
import BreadCumb from '../Components/BreadCumb';
import { Link } from 'react-router-dom';
import {HiOutlineArrowLeft} from "react-icons/hi"

export default function SingleBlog() {
  return (
    <>
      <BreadCumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card ">
                <Link to="/blog" className='d-flex align-items-center gap-10'>
                   <HiOutlineArrowLeft /> Go back to Blog</Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img
                  src="images/blog-1.jpg"
                  className="img-fluid w-100 my-4"
                  alt=""
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta aliquam quaerat provident facere at dicta corrupti sint
                  quas commodi rem laboriosam accusamus aspernatur laborum nam,
                  eaque ducimus quis doloremque temporibus.Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Soluta aliquam quaerat
                  provident facere at dicta corrupti sint quas commodi rem
                  laboriosam accusamus aspernatur laborum nam, eaque ducimus
                  quis doloremque temporibus
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
