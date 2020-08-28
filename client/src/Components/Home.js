import React from "react";
import Image from "../Images/logo.ico";
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="form_block _homePage">
    <div className="body text-center">
      <form className="form-signin">
        <img src={Image} className="logo" width="70" height="70" alt="logo" />
        <h3 className="_Title">Shopify</h3>
        <h6 className="_subTitle">Welcome to shopify, please login or register</h6>
        <Link to="/login" style={{ textDecoration: 'none' }}>
        <button className="btn btn-lg btn-login btn-block" type="submit">
          Login
        </button>
        </Link>
        <Link to="/register" style={{ textDecoration: 'none' }}>
        <button className="btn btn-lg btn-login btn-block" type="submit">
          Register
        </button>
        </Link>
      </form>
    </div>
  </div>
);

export default Home;
