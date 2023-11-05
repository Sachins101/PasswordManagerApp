import React from "react";
import profileimage from "../images/profile-image.jpg";
import "font-awesome/css/font-awesome.min.css";
import Login from "./Login";

function Home() {
  return (
    <div className="body">
      <nav className="navbar navbar-expand-xl mx-5 mt-2">
        <a className="navbar-brand h1 mx-auto my-3">Password Manager</a>
        <button
          className="navbar-toggler me-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-auto">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item me-auto">
              <a className="nav-link" href="#second-section">
                About Us
              </a>
            </li>
            <li className="nav-item me-auto">
              <a className="nav-link" href="#first-section">
                Login
              </a>
            </li>
            <li className="nav-item me-auto">
              <a className="nav-link" href="#fifth-section">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="first-section" id="first-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 pt-1 d-flex justify-content-center align-items-center">
              <div className="first-section-left-header m-5 px-5">
                <span>
                  Safely store and manage your usernames and passwords
                </span>
                <p className="mt-3">
                  With our password manager, you can securely store and manage
                  your usernames and passwords for various domains like
                  Facebook, Instagram, and more. Never forget a password again!
                </p>
              </div>
            </div>

            <div className="col-md-6 mt-5 pt-5">
              <Login />
            </div>
          </div>
        </div>
      </div>

      <div className="second-section" id="second-section">
        <div className="header pt-5">
          <p className="px-3 pt-5">
            Used by individuals and businesses worldwide to protect their online
            accounts.
          </p>
        </div>
        <div className="header-section d-flex align-items-center">
          <div className="container d-flex align-items-center justify-content-center">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-md-2 d-flex align-items-center justify-content-center">
                <span className="m-1 px-5" style={{ fontFamily: "Agbalumo" }}>
                  Manager
                </span>
              </div>
              <div className="col-md-2 d-flex align-items-center justify-content-center">
                <span className="m-1 px-5" style={{ fontFamily: "Nosifer" }}>
                  Login
                </span>
              </div>
              <div className="col-md-2 d-flex align-items-center justify-content-center">
                <span
                  className="m-1 px-5"
                  style={{ fontFamily: "Libre Baskerville" }}
                >
                  Secure
                </span>
              </div>
              <div className="col-md-2 d-flex align-items-center justify-content-center">
                <span className="m-1 px-5" style={{ fontFamily: "Caveat" }}>
                  Store
                </span>
              </div>
              <div className="col-md-2 d-flex align-items-center justify-content-center">
                <span
                  className="m-1 px-5"
                  style={{ fontFamily: "Dancing Script" }}
                >
                  Username
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="content-section m-1">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="content-section-left my-5 mx-1">
                  <p>Secure and Convenient</p>
                  <h1>Why Choose Our Password Manager?</h1>
                  <button className="px-4 py-2">GET IN TOUCH</button>
                </div>
              </div>
              <div className="col-md-5 d-flex justify-content-center align-items-center">
                <div className="content-section-right">
                  <p>
                    Our password manager offers a secure and convenient solution
                    for storing your usernames and passwords. With our advanced
                    encryption technology, you can trust that your sensitive
                    information is protected. Easily access your accounts with
                    just one click, without the need to remember multiple
                    passwords.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-details p-5">
          <div className="container">
            <div className="row py-4">
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <div className="detail-box p-1">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="pt-5 px-5">
                      <img
                        className="mx-5 px-5 py-0"
                        src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1679042627/static/vectorsvg_1679042626_24645.svg"
                        height="40px"
                      />
                    </div>
                  </div>
                  <h4 className="m-4">Advanced Encryption</h4>
                  <p className="mx-4 pb-5">
                    All your data is protected using advanced encryption
                    algorithms, ensuring that it remains secure.
                  </p>
                </div>
              </div>
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <div className="detail-box p-1">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="pt-3 px-5">
                      <img
                        className="mx-5 px-5 py-2"
                        src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1679042627/static/vector-1svg_1679042626_72896.svg"
                        height="80px"
                      />
                    </div>
                  </div>
                  <h4 className="m-4">One-Click Access</h4>
                  <p className="mx-4 pb-5">
                    Access your accounts with just one click, without the hassle
                    of remembering multiple passwords.
                  </p>
                </div>
              </div>
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <div className="detail-box p-2">
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="pt-2 px-5">
                      <img
                        className="mx-5 px-5 py-2"
                        src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1679042627/static/framesvg_1679042626_29925.svg"
                        height="80px"
                      />
                    </div>
                  </div>
                  <h4 className="m-4">Secure Sharing</h4>
                  <p className="mx-5 pb-5">
                    Safely share your passwords with trusted contacts, ensuring
                    secure collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="third-section">
        <div className="header pt-5">
          <span className="mt-5 pt-5">Super Easy to Get Started </span>
        </div>
        <div className="content-section mx-3">
          <div className="content-details py-5">
            <div className="content-data">
              <div className="content-order p-2">01</div>
              <h3>Step 1: Sign Up</h3>
              <p>
                Create your account by providing your email and setting a strong
                master password.
              </p>
            </div>
          </div>
          <div className="content-details py-5">
            <div className="content-data">
              <div className="content-order p-2">02</div>
              <h3>Step 2: Add Passwords</h3>
              <p>
                Easily add and organize your usernames and passwords for various
                online accounts.
              </p>
            </div>
          </div>
          <div className="content-details py-5">
            <div className="content-data">
              <div className="content-order p-2">03</div>
              <h3>Step 3: Access Anywhere</h3>
              <p>
                Easily add and organize your usernames and passwords for various
                online accounts.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="fourth-section m-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7 d-flex justify-content-center align-items-center">
              <div className="left-content m-5 px-5">
                <p>
                  Our password manager has made my life so much easier. I no
                  longer have to remember multiple passwords and can access all
                  my accounts with just one click.
                </p>
              </div>
            </div>
            <div className="col-md-5 d-flex justify-content-center align-items-center">
              <div className="right-content">
                <div className="content-box m-0">
                  <div className="star-rating d-flex mt-2 px-3">
                    <span className="fa fa-star checked pt-3 px-1"></span>
                    <span className="fa fa-star checked pt-3 px-1"></span>
                    <span className="fa fa-star checked pt-3 px-1"></span>
                    <span className="fa fa-star checked p-3 px-1"></span>
                    <span className="fa fa-star unchecked p-3 px-1"></span>
                  </div>
                  <div className="content-details ms-4 me-1">
                    <p className="me-5">
                      As a business owner, our password manager has helped me
                      secure our company's confidential information and easily
                      share passwords with my team members.
                    </p>
                    <div className="profile-section d-flex m-1 p-2">
                      <div className="profile-section-image p-1">
                        <img src={profileimage} />
                      </div>
                      <div className="p-1">
                        <h4>John Doe, Individual User</h4>
                        <span>ABC Company</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="fifth-section d-flex justify-content-center align-items-center"
        id="fifth-section"
      >
        <div className="header pt-5">
          <p className="pt-3">Subscribe to Our Newsletter</p>
        </div>
        <div className="header-content mx-5 px-5">
          <p>
            Stay up to date with the latest news and updates from our password
            manager.
          </p>
        </div>
        <div>
          <div className="searchbar px-5 mx-5 pb-5">
            <input
              className="px-3 py-3"
              type="email"
              name="email"
              placeholder="Enter your email address"
            />
            <button className="px-4">SUBSCRIBE NOW</button>
          </div>
        </div>
      </div>

      <div className="footer m-4 d-flex justify-content-between">
        <div className="footer-logo">
          <h3 className="ps-5 ms-5">
            <img src="	https://res.cloudinary.com/dbyioi2qq/q_auto/v1678986391/static/framesvg_1678986390_65036.svg" />
            Password Manager
          </h3>
        </div>
        <div className="footer-right mx-5 px-5 ">
          <ul>
            <li>
              <a
                className="p-3"
                href="https://www.youtube.com/"
                target="_blank"
              >
                Youtube
              </a>
            </li>
            <li>
              <a
                className="p-3"
                href="https://www.linkedin.com/feed/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a className="p-3" href="https://twitter.com/" target="_blank">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
