import React, { useEffect, useState } from "react";
import "./SidebarRow.scss";

import { Button } from "@material-ui/core";

import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMenuItem } from "../redux/actions/sidebar.actions";

const SidebarRow = ({ title, Icon }) => {
  const [path, setPath] = useState("/");

  const { push } = useHistory();

  const { pathname } = useLocation();

  const dispatch = useDispatch();

  const { sidebarOpen, selectedMenuItem } = useSelector(
    (state) => state.sidebar
  );

  const handleMenuSelect = () => {
    push(title === "Home" ? "/" : `/feed/${title.toLowerCase()}`);
    dispatch(setMenuItem(title));
  };

  useEffect(() => {
    setPath(title === "Home" ? "/" : pathname);
  }, [pathname, title]);

  return (
    // sidebar open
    <>
      {sidebarOpen ? (
        <div className="sidebarRow--open">
          <Button
            className={`sidebarRow__button
             ${title === selectedMenuItem ? "selected" : ""}
            ${title === "YouTube Premium" ? "capitalized" : ""}
              `}
            disableRipple
            onClick={handleMenuSelect}
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
