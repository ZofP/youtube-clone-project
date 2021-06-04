import React from "react";
import "./VideoPlayer.scss";

import YoutubePlayer from "react-player/youtube";

import { useSelector } from "react-redux";
import numeral from "numeral";
import moment from "moment";
import { IconButton, Tooltip } from "@material-ui/core";

import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ReplyIcon from "@material-ui/icons/Reply";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Filters from "../../components/Filters/Filters";
import VideoCard from "../../components/VideoCard/VideoCard";

const VideoPlayer = () => {
  const {
    videoTitle,
    videoThumbnail,
    channelTitle,
    channelAvatar,
    views,
    timestamp,
    id,
    description,
    duration,
    link,
    likes,
    dislikes,
  } = useSelector((state) => state.currentVideo);

  const { videos } = useSelector((state) => state.homeVideos);

  return (
    <div className="videoPlayer">
      <YoutubePlayer
        url={link}
        className="videoPlayer__player"
        playing
        width="100%"
        height="calc(100vh - 169px)"
        controls
      />
      <div className="videoPlayer__content">
        <div className="videoPlayer__info">
          <p className="videoPlayer__title">{videoTitle}</p>
          <div className="videoPlayer__details">
            <div className="videoPlayer__subtitle">
              {numeral(views).format("0,0,0")} views •{" "}
              {moment(timestamp).format("MMM DD, YYYY")}
            </div>
            <div className="videoPlayer__buttons">
              <Tooltip title="I like this" placement="bottom-end">
                <div className="videoPlayer__button">
                  <IconButton>
                    <ThumbUpIcon fontSize="medium" />
                  </IconButton>
                  <p>{numeral(likes).format("0.a").toUpperCase()}</p>
                </div>
              </Tooltip>
              <Tooltip title="I dislike this" placement="bottom-end">
                <div className="videoPlayer__button">
                  <IconButton>
                    <ThumbDownIcon fontSize="medium" />
                  </IconButton>
                  <p>{numeral(dislikes).format("0.a").toUpperCase()}</p>
                </div>
              </Tooltip>
              <div className="videoPlayer__button">
                <IconButton className="flip">
                  <ReplyIcon fontSize="medium" />
                </IconButton>
                <p>SHARE</p>
              </div>
              <div className="videoPlayer__button">
                <IconButton>
                  <PlaylistAddIcon fontSize="medium" />
                </IconButton>
                <p>SAVE</p>
              </div>
              <div className="videoPlayer__button">
                <IconButton>
                  <MoreHorizIcon fontSize="medium" />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
        <div className="videoPlayer__suggestions">
          <Filters />
          <div className="videoPlayer__videoList">
            {videos.map((video, index) => (
              <VideoCard key={index} video={video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
