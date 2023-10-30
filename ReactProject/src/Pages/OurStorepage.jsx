import React, { useState } from "react";
import BreadCumb from "../Components/BreadCumb";
import ReactStars from "react-rating-stars-component";
import Productcard from "../Components/Productcard";
import Colors from "../Components/Colors";

export default function OurStorepage() {
    const [grid,setgrid] = useState(4);
    // alert(grid); 
  return (
    <>
      <BreadCumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availablity</h5>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label" For="">
                      In Stock(1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label" For="">
                      Out of stock(0)
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="From"
                    />
                    <label htmlFor="floatingInput" For="">
                      From
                    </label>
                  </div>
                  <div className="form-floating">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="To"
                    />
                    <label htmlFor="floatingInput" For="">
                      To
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Colors</h5>
                <div>
                  <Colors />
                </div>
                <h5 className="sub-title">Size</h5>
                <div>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label" For="">
                        S (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label" For="">
                        M (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Headphone
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Mobile
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Wire
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids watch bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$300</b>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img
                        src="images/laptop.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids laptop bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$300</b>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img
                        src="images/headphone.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids headphone bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$100</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-end mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{ width: "100px" }}>
                      Sort By:
                    </p>
                    <select name="" className="form-control form-select" id="">
                      <option value="">Featured</option>
                      <option value="" selected="selected">
                        Best selling
                      </option>
                      <option value="">Alphabetically,Z-A</option>
                      <option value="">Price, low to high</option>
                      <option value="">Price , high to low</option>
                      <option value="">Date , old to new</option>
                      <option value="">Date, new to old</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 Products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img
                        src="images/gr4.svg"
                        className="d-block img-fluid"
                        alt=""
                        onClick={() => {
                          setgrid(3);
                        }}
                      />
                      <img
                        src="images/gr3.svg"
                        className="d-block img-fluid"
                        alt=""
                        onClick={() => {
                          setgrid(4);
                        }}
                      />
                      <img
                        src="images/gr2.svg"
                        className="d-block img-fluid"
                        alt=""
                        onClick={() => {
                          setgrid(6);
                        }}
                      />
                      <img
                        src="images/gr.svg"
                        className="d-block img-fluid"
                        alt=""
                        onClick={() => {
                          setgrid(12);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="produts-list pb-5   ">
                <div className="d-flex gap-10 flex-wrap">
                  <Productcard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
