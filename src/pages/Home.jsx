import React, { useEffect } from "react";
import "./Home.scss";
import Filters from "../components/Filters";
import { useDispatch, useSelector } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../redux/actions/videos.actions";
import VideoCard from "../components/VideoCard";

import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, activeCategory } = useSelector((state) => state.homeVideos);

  const fetchData = () => {
    if (activeCategory === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(activeCategory));
    }
  };

  return (
    <div className="home">
      <Filters />
      <div className="home__videoList">
        <InfiniteScroll
          dataLength={videos.length}
          next={fetchData}
          hasMore={true}
          loader={<div></div>}
        >
          {videos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Home;
