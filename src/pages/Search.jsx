import React, { useEffect } from "react";
import "./Search.scss";

import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { getVideosBySearch } from "../redux/actions/videos.actions";
import VideoCard from "../components/VideoCard";

const Search = () => {
  const { query } = useParams();

  const { videos, loading } = useSelector((state) => state.searchedVideos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideosBySearch(query));
  }, [query, dispatch]);

  return (
    <div className="search">
      <div className="search__content">
        <div className="search__filter">
          <TuneOutlinedIcon />
          <p>FILTERS</p>
        </div>
        <div className="search__videoList">
          {videos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
