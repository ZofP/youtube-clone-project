import React, { useEffect, useState } from "react";
import "./SidebarRow.scss";

import { Button } from "@material-ui/core";

import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMenuItem } from "../../redux/actions/sidebar.actions";
import { anonymousLogout, logout } from "../../redux/actions/auth.actions";

const SidebarRow = ({ title, Icon }) => {
  const [path, setPath] = useState("/");

  const { push } = useHistory();

  const { pathname } = useLocation();

  const dispatch = useDispatch();

  const { sidebarOpen, selectedMenuItem } = useSelector(
    (state) => state.sidebar
  );

  const { user } = useSelector((state) => state.auth);

  const handleMenuSelect = () => {
    push(title === "Home" ? "/" : `/feed/${title.toLowerCase()}`);
    dispatch(setMenuItem(title));
  };

  useEffect(() => {
    setPath(title === "Home" ? "/" : pathname);
  }, [pathname, title]);

  const handleLougout = (user) => {
    if (user.email) {
      dispatch(logout());
    } else {
      dispatch(anonymousLogout());
    }
  };

  return (
    // sidebar open
    <>
      {sidebarOpen ? (
        <div className="sidebarRow--open">
          <Button
            className={`sidebarRow__button
             ${title === selectedMenuItem ? "selected" : ""}
            ${title === "YouTube Premium" ? "capitalized" : ""}
            ${title === "Sign Out" ? "capitalized red" : ""}
              `}
            disableRipple
            onClick={title === "Sign Out" ? handleLougout : handleMenuSelect}
          >
            <Icon />
            <p>{title}</p>
          </Button>
        </div>
      ) : (
        <div className="sidebarRow">
          <Button
            className={`sidebarRow__button
                 ${
                   (selectedMenuItem === title ||
                     path === `/feed/${title.toLowerCase()}`) &&
                   "selected"
                 }
                `}
            disableRipple
            onClick={handleMenuSelect}
          >
            <Icon />
            <p>{title}</p>
          </Button>
        </div>
      )}
    </>
  );
};

export default SidebarRow;
