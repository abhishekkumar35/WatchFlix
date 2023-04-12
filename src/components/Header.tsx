import React from "react";
import { Link, useNavigate } from "react-router-dom";
import WithAuth from "./WithAuth";

import {
  img_dark_theme,
  img_login_logo_light,
  img_watch_profile,
} from "../utils/constants";

type Props = {};

const Header = (props: Props) => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("jwt_token");
    navigate("/");
  };
  return (
    <nav className="nav-bar">
      <div className="nav-bar-left">
        <Link to="/">
          <img
            src={img_login_logo_light}
            alt="logo-light"
            className="nav-bar__home-logo"
          />
        </Link>
      </div>
      <div className="nav-bar-right">
        <img src={img_dark_theme} alt="dark_theme" />
        <img src={img_watch_profile} alt="profile" />
        <button className="nar-bar__btn_logout" onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default WithAuth(Header);
