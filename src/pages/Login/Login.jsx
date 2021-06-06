import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Login.scss";

import Button from "@material-ui/core/Button";

import { anonymousLogin, login } from "../../redux/actions/auth.actions";
import { useHistory } from "react-router";

const Login = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(login());
  };

  const handleAnonymousLogin = () => {
    dispatch(anonymousLogin());
  };

  const history = useHistory();

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user, history]);

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-transparent-image-5.png"
          alt=""
        />
      </div>
      <h2>YouTube Clone (Portfolio Project)</h2>
      <div>
        <Button className="login__signIn" type="submit" onClick={handleLogin}>
          Sign In with Google
        </Button>
        <Button type="submit" onClick={handleAnonymousLogin}>
          Enter as Anonymous User
        </Button>
      </div>
      <h3>
        <i>
          This project utilizes Firebase and Redux. All trademarks, logos and
          brand names are the property of their respective owners.
        </i>
      </h3>
    </div>
  );
};

export default Login;
