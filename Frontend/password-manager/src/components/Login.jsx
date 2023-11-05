import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const signup = () => {
    navigate("/signup");
  };

  return (
    <div>
      <form>
        <div className="login-section mx-0">
          <div className="login-header">
            <span className="pt-5 mt-2">Login</span>
            <div className="login-form">
              <div className="login-form-data">
                <label>Username:</label>
                <input type="text" className="name" required />
              </div>
              <div className="login-form-data">
                <label>Password:</label>
                <input type="password" className="password" required />
              </div>
              <div className="px-0 mx-0">
                <button className="login-button mt-3">Login</button>
              </div>
              <div className="signup-area m-1 pb-5">
                <span className="ms-0 mt-5">
                  If your a new user?
                  <button className="m-3 py-2 px-3" onClick={signup}>
                    SignUp
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
