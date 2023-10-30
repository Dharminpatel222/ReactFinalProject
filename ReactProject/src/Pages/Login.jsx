import React from "react";
import BreadCumb from "../Components/BreadCumb";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <BreadCumb title=" Account" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="col-12">
          <div className="login-card">
            <h3>Login</h3>
            <form action="">
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
                <Link to="/Foragatpassword" >Forgate Password</Link>
                <div className="d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Login</button>
                    <Link className="button">SignUp</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
