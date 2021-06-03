import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Login.scss";

import { login } from "../redux/actions/auth.actions";
import { useHistory } from "react-router";

const Login = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleLogin = () => {
    dispatch(login());
  };

  const history = useHistory();

  useEffect(() => {
    if (accessToken) {
      history.push("/");
    }
  }, [accessToken, history]);

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-transparent-image-5.png"
          alt=""
        />
        <button onClick={handleLogin}>Login with Google</button>
        <p>This project utilizes Youtube Data API</p>
      </div>
    </div>
  );
};

export default Login;
