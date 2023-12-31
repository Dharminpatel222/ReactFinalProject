import React from 'react'
import { Link } from 'react-router-dom'

export default function BreadCumb(props) {
  return (
    <>
      <div className="breadcrumb py-4 mb-0">
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <p className='text-center mb-0'>
                <Link className="tex-dark" to="/">
                  Home &nbsp;
                </Link>
                /{props.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
