import React from "react";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form>
        <input
          type="text"
          placeholder="Email"
          className="auth__input"
          name="email"
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Password"
          className="auth__input"
          name="password"
        />
        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>
        <hr />
        <div className="auth__social-networks">
          <p>Login with social networks</p>
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <br />
        <Link to="/auth/register" className="link">
          Create new account
        </Link>
      </form>
    </>
  );
};

export default LoginScreen;
