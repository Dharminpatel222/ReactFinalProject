import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import wish from "../images/wish.svg"
import laptop from "../images/laptop.jpg";
import prodcompare from "../images/prodcompare.svg";
import view from "../images/view.svg";
import addcart from "../images/add-cart.svg";
import headphone from "../images/headphone.jpg"
import tv from "../images/tv.jpg";


export default function Productcard(props) {
  const { grid } = props;
  const location = useLocation();
  return (
    <>
      <div
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to="/product/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish} alt="" />
            </Link>
          </div>
          <div className="product-img">
            <img src={laptop} className="img-fluid" alt="" />
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
                <img src={prodcompare} alt="" />
              </Link>
              <Link>
                <img src={view} alt="" />
              </Link>
              <Link>
                <img src={addcart} alt="" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to="/product/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish} alt="" />
            </Link>
          </div>
          <div className="product-img">
            <img src={headphone} className="img-fluid" alt="" />
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
                <img src={prodcompare} alt="" />
              </Link>
              <Link>
                <img src={view} alt="" />
              </Link>
              <Link>
                <img src={addcart} alt="" />
              </Link>
            </div>
          </div>
        </Link>
      </div>

      <div
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to="/product/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish} alt="" />
            </Link>
          </div>
          <div className="product-img">
            <img src={tv} className="img-fluid" alt="" />
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
                <img src={prodcompare} alt="" />
              </Link>
              <Link>
                <img src={view} alt="" />
              </Link>
              <Link>
                <img src={addcart} alt="" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to="/product/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish}alt="" />
            </Link>
          </div>
          <div className="product-img">
            <img src={laptop} className="img-fluid" alt="" />
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
                <img src={prodcompare}alt="" />
              </Link>
              <Link>
                <img src={view} alt="" />
              </Link>
              <Link>
                <img src={addcart} alt="" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
