import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

export default function Productcard(props) {
  const { grid } = props;
  const location = useLocation();
  return (
    <>
      <div
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
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
            <p className={`description ${grid == 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              nobis quos iusto ipsam voluptas debitis ipsum animi provident,
              mollitia porro ut aliquam...
            </p>
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
      <div
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="" />
            </Link>
          </div>
          <div className="product-img">
            <img src="images/headphone.jpg" className="img-fluid" alt="" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars count={5} size={24} activeColor="#ffd700" />
            <p className={`description ${grid == 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              nobis quos iusto ipsam voluptas debitis ipsum animi provident,
              mollitia porro ut aliquam...
            </p>
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

      <div
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="" />
            </Link>
          </div>
          <div className="product-img">
            <img src="images/tv.jpg" className="img-fluid" alt="" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars count={5} size={24} activeColor="#ffd700" />
            <p className={`description ${grid == 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              nobis quos iusto ipsam voluptas debitis ipsum animi provident,
              mollitia porro ut aliquam...
            </p>
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
      <div
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
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
            <p className={`description ${grid == 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              nobis quos iusto ipsam voluptas debitis ipsum animi provident,
              mollitia porro ut aliquam...
            </p>
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
