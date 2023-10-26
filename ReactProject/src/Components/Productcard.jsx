import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

export default function Productcard() {
  return (
    <>
      <div className="col-2">
        <Link className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <Link>
                    <img src="images/wish.svg" alt="" />
                </Link>
            </div>
          <div className="product-img">
            <img src="images/laptop.jpg" className="img-fluid" alt="" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars count={5} size={24} activeColor="#ffd700" />
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute gap-15">
            <div className="d-flex flex-column">
              <Link>
                <img src="images/prodcompare.svg" alt="" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
