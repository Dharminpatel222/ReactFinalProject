import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="main-banner p-3 position-relative">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt=""
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>IPAD S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className="button"> BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justity-content-between align-item-center">
                  <div className="small-banner p-3 position-relative">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt=""
                />
                <div className="small-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>IPAD S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className="button"> BUY NOW</Link>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
