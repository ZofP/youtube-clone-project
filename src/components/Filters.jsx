import React from "react";
import "./Filters.scss";

import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  getVideosByCategory,
  getPopularVideos,
} from "../redux/actions/videos.actions";

const filtersArray = ["All", "Music", "Mixes", "Live"];

const Filters = () => {
  const { activeCategory } = useSelector((state) => state.homeVideos);
  const dispatch = useDispatch();

  const handleClick = (category) => {
    if (category === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(category));
    }
  };

  return (
    <div className="filters">
      {filtersArray.map((category, index) => (
        <Button
          key={index}
          className={`filters__button ${
            activeCategory === category && "active"
          }`}
          onClick={() => handleClick(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default Filters;
