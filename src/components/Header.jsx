import React, { useState } from "react";
import "./Header.scss";

import { IconButton, Avatar, makeStyles } from "@material-ui/core/";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MicIcon from "@material-ui/icons/Mic";

import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setMenuItem, toggleSidebar } from "../redux/actions/sidebar.actions";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
    color: (props) =>
      props.color === "white" ? "rgba(0, 0, 0, 0.54)" : "white",
  },
});

const Header = ({ componentStyle }) => {
  const classes = useStyles({ color: componentStyle });

  const [input, setInput] = useState("");

  const { push } = useHistory();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const photoURL =
    user &&
    (user.photoURL ||
      "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png");

  // const [progress, setProgress] = useState(0);

  const handleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    push(`/search/${input}`);
    dispatch(setMenuItem("Search"));
  };

  const goHome = () => {
    push("/");
    dispatch(setMenuItem("Home"));
  };

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((oldProgress) => {
  //       if (oldProgress >= 100) {
  //         return 100;
  //       }
  //       const diff = Math.random() * 10;
  //       return Math.min(oldProgress + diff, 100);
  //     });
  //   }, 500);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <div className={`header header--${componentStyle}`}>
      <div className="header__left">
        <IconButton className={classes.root} onClick={(e) => handleSidebar(e)}>
          <MenuIcon fontSize="small" />
        </IconButton>
        <img
          onClick={goHome}
          className={`header__logo ${
            componentStyle === "white"
              ? "header__logo--white"
              : "header__logo--black"
          }`}
          src={
            componentStyle === "white"
              ? "https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-transparent-image-5.png"
              : "https://jeydoll.com/wp-content/uploads/2019/11/youtube-logo-png-transparent-background-17.png"
          }
          alt=""
        />
      </div>
      <div className="header__center">
        <form type="form" className="header__form">
          <input
            placeholder="Search"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="header__input"
          />

          <button
            className="header__searchButton"
            onClick={(e) => handleSubmit(e)}
            type="submit"
          >
            <SearchIcon fontSize="small" />
          </button>
        </form>
        <IconButton className={classes.root}>
          <MicIcon fontSize="small" />
        </IconButton>
      </div>
      <div className="header__right">
        <IconButton className={classes.root}>
          <VideoCallIcon fontSize="small" />
        </IconButton>
        <IconButton className={classes.root}>
          <AppsIcon fontSize="small" />
        </IconButton>
        <IconButton className={classes.root}>
          <NotificationsIcon fontSize="small" />
        </IconButton>
        <Avatar src={photoURL} />
      </div>
    </div>
  );
};

export default Header;
