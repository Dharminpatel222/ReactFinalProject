import React from 'react'
import BreadCumb from '../Components/BreadCumb';
import Colors from '../Components/Colors';

export default function CompareProduct() {
  return (
    <>
      <BreadCumb title=" Compare Product" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  className="position-absolute cross img-fluid"
                  alt="cross"
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Honor T1 7.0.1 GB RAM 8 GB ROM 7 INCH With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price mt-3">$100</h6>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Watch</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availabilty:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Colors />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  className="position-absolute cross"
                  alt="cross"
                />
                <div className="product-card-image">
                  <img
                    style={{ height: "269px", width: "269px" }}
                    src="images/tv.jpg"
                    alt=""
                  />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Honor T1 7.0.1 GB RAM 8 GB ROM 7 INCH With Wi-Fi+3G Tv
                  </h5>
                  <h6 className="price mt-3">$200</h6>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Tv</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availabilty:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Colors />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  className="position-absolute cross img-fluid"
                  alt="cross"
                />
                <div className="product-card-image">
                  <img
                    style={{ height: "269px", width: "269px" }}
                    src="images/tab1.jpg"
                    alt=""
                  />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Honor T1 7.0.1 GB RAM 8 GB ROM 7 INCH With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price mt-3">$100</h6>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Tablet</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availabilty:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Colors />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  className="position-absolute cross img-fluid"
                  alt="cross"
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Honor T1 7.0.1 GB RAM 8 GB ROM 7 INCH With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price mt-3">$100</h6>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Watch</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availabilty:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Colors />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
