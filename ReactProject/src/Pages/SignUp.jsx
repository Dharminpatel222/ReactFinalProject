import React from 'react'
import BreadCumb from '../Components/BreadCumb';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <>
      <BreadCumb title=" Sign Up" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="col-12">
          <div className="auth-card">
            <h3 className="text-center mb-3">Sign Up</h3>
            <form action="" className="d-flex flex-column gap-30">
              <div>
                <input
                  type="text"
                  name="email"
                  placeholder="First name"
                  className="form-control"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="email"
                  placeholder="Last name"
                  className="form-control"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="email"
                  placeholder="Mobile Number"
                  className="form-control"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="email"
                  placeholder="Password"
                  className="form-control"
                />
              </div>
              <div>
                <div className="d-flex justify-content-center gap-15 align-items-center">
                  <button className="button border-0">Create</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
