import React from 'react'
import BreadCumb from '../Components/BreadCumb';

export default function Wishlist() {
  return (
    <>
      <BreadCumb title=" Wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt=""
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                  <div className="py-3 px-3">
                    <h5 className="title">
                      Milanese Loop Watch Band For 42mm/44mm Watch
                    </h5>
                    <h6 className="price">$ 100</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt=""
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/speaker.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                  <div className="py-3 px-3">
                    <h5 className="title">
                      Beoplay A1 Portable Bluetooth speaker With Microphone
                    </h5>
                    <h6 className="price">$ 500</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt=""
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/tab3.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                  <div className="py-3 px-3">
                    <h5 className="title">
                      Honor T1 7.0.1 GB RAM 8 GB ROM 7 INCH With Wi-Fi+3G tablet
                    </h5>
                    <h6 className="price">$ 500</h6>
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
