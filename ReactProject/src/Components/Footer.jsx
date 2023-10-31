import React from 'react'
import { Link } from 'react-router-dom';
import {BsLinkedin,BsGithub,BsYoutube,BsInstagram} from "react-icons/bs"

export default function Footer() {
  return (
    <>
      <footer className="py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex align-items-center gap-15">
                <img src="images/newsletter.png" alt="" />
                <h2 className="mb-0 text-white">Sign Up For Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white">
                  Hno : 277 Near Vill Chopal , <br />
                  Sonipat,Haryana <br />
                  Pincode : 131103
                </address>
                <a
                  href="tel:+91 6463882921"
                  className="mt-3 d-block mb-3 text-white"
                >
                  +91 6463882921
                </a>
                <a
                  href="mailto:navdeepdahiya753@gmail.com"
                  className="mt-2  d-block mb-3 text-white"
                >
                  navdeepdahiya753@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30">
                  <BsInstagram className="text-white fs-5" />
                  <BsLinkedin className="text-white fs-5" />
                  <BsGithub className="text-white fs-5" />
                  <BsYoutube className="text-white fs-5" />
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column ">
                <Link to="/privacypolicy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refundpolicy" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shippingpolicy" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="/termsandcondition" className="text-white py-2 mb-1">
                  Terms & Services
                </Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column ">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Content</Link>
                <Link className="text-white py-2 mb-1">Size chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4 class">Quick Links</h4>
              <div className="footer-links d-flex flex-column ">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                {" "}
                &copy; {new Date().getFullYear}Powered By Developers Corner
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
