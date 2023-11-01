import React from "react";
import BreadCumb from "../Components/BreadCumb";
import Productcard from "../Components/Productcard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";

export default function SingleProduct() {
  const props = {
    width: 250,
    height: 250,
    zoomWidth: 1200,
    img: "/ReactProject/public/images/",
  };
  return (
    <>
      <BreadCumb title=" Single Product" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  {/* <ReactImageZoom {...props} /> */}
                </div>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bg-white p-3">
                <h4>Description</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dignissimos, quo voluptatum culpa incidunt dicta dolor
                  nesciunt libero veritatis consequuntur quod soluta, blanditiis
                  iste quibusdam eos alias, distinctio atque aliquid?
                  Consequatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="review-wrapper  home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex gap-10 align-items-center">
                      <ReactStars count={5} size={24} activeColor="#ffd700" />
                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>
                  <div>
                    <a href="" className="text-dark text-decoration-underline">
                      Write Review
                    </a>
                  </div>
                </div>
                <div className="review-form py-4">
                  <h4>Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars count={5} size={24} activeColor="#ffd700" />
                    </div>
                    <div>
                      <textarea
                        name=""
                        className="w-100 form-control"
                        id=""
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-contnet-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
            <Productcard />
          </div>
        </div>
      </section>
    </>
  );
}
