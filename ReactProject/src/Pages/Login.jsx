import React from "react";
import BreadCumb from "../Components/BreadCumb";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <BreadCumb title=" Account" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="col-12">
          <div className="auth-card">
            <h3 className="text-center mb-3">Login</h3>
            <form action="" className="d-flex flex-column gap-30">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                />
              </div>
              <div>
                <Link to="/Foragatpassword" className="mb-3 forgate " >Forgate Password?</Link>
                <div className="d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">Login</button>
                    <Link className="button signup" to="/signup">Sign Up</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
