import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import password from "../images/password.jpg";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const signup = () => {
    alert("Signup Successfully! Please Login to continue");
    navigate("/");
  };

  return (
    <div className="Signup-page-body">
      <h1 className="m-5 p-1">PASSWORD MANAGER</h1>
      <div className="container">
        <div className="row mx-0 my-0">
          <div className="col-md-8">
            <div className="signup-form">
              <form className="form me-0">
                <div className="Signup-header">
                  <p className="fs-1 pt-3">SIGNUP</p>
                </div>
                <div className="searchbar ms-5 me-5 mb-2">
                  <label>Name:</label>
                  <input
                    type="text"
                    className="name p-1"
                    placeholder="Enter Your Username"
                    required
                  />
                </div>
                <div className="searchbar ms-5 me-5 mb-2">
                  <label>Email:</label>
                  <input
                    type="email"
                    className="email p-1"
                    placeholder="Enter Your E-mail Id"
                    required
                  />
                </div>
                <div className="searchbar ms-5 me-5 mb-2">
                  <label>Mobile Number:</label>
                  <input
                    type="text"
                    className="number p-1"
                    placeholder="Enter Your 10 digit Mobile Number"
                    required
                  />
                </div>
                <div className="searchbar ms-5 me-5 mb-2">
                  <label>Password:</label>
                  <input
                    type="password"
                    className="password p-1"
                    placeholder="Enter Your Password"
                    required
                  />
                </div>
                <div className="signup-submit-button mx-5 p-2 my-2">
                  <button
                    className="submit-button align-items-center justify-content-center p-2 mx-5 mb-3"
                    onClick={signup}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4">
            <div className="signup-right-section ms-0 pt-5 me-5">
              <img src={password} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
