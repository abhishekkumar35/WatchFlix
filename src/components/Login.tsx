import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { img_login_logo_light, url_login_api_post } from "../utils/constants";
import "../index.css";

type Props = {};

const Login = (props: Props) => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<{
    username?: string | undefined;
    password?: string | undefined;
  } | null>(null);
  const [, setResponse] = useState<
    { jwt_token: string } | { status_code: number; error_msg: string } | null
  >(null);
  const [error, setError] = useState<{
    status_code: number;
    error_msg: string;
  } | null>(null);

  function axiosLoginRedirectToHome() {
    axios.post(url_login_api_post, JSON.stringify(loginData)).then((res) => {
      if (res.data.jwt_token) {
        setResponse(res.data);
        navigate("/");
        localStorage.setItem("jwt_token", res.data.jwt_token);
      } else setError(res.data);
    });
  }
  const onClickLogin = (e: any) => {
    e.preventDefault();
    axiosLoginRedirectToHome();
  };

  return (
    <div className="login_page">
      <div>
        <form onSubmit={onClickLogin}>
          <img src={img_login_logo_light} alt="login_light_logo" />
          <input
            placeholder="username"
            className=""
            value={loginData?.username}
            onChange={(e) =>
              setLoginData({ ...loginData, username: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="password"
            className=""
            value={loginData?.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
          <div>
            <input type="checkbox" />
            <span>Show Password</span>
          </div>
          {error?.status_code && <p>{error?.error_msg}</p>}

          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
