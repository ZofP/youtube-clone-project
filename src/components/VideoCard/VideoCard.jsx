import React, { useEffect, useState } from "react";
import "./VideoCard.scss";

import { Avatar, Tooltip } from "@material-ui/core";

import WatchLaterIcon from "@material-ui/icons/WatchLater";

import AddToQueueIcon from "@material-ui/icons/PlaylistPlay";
import { useHistory } from "react-router";
import request from "../../api";

import moment from "moment";
import numeral from "numeral";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentVideo } from "../../redux/actions/videos.actions";
import { setMenuItem } from "../../redux/actions/sidebar.actions";

const VideoCard = ({ video }) => {
  const [channelAvatar, setChannelAvatar] = useState(null);
  const [views, setViews] = useState(null);
  const [likes, setLikes] = useState(null);
  const [dislikes, setDislikes] = useState(null);
  const [duration, setDuration] = useState(null);

  const [currentVideo, changeCurrentVideo] = useState({});

  useEffect(
    () =>
      changeCurrentVideo({
        videoTitle: video.snippet.title,
        videoThumbnail: video.snippet.thumbnails.medium.url,
        description: `${video.snippet.description.slice(0, 120)}...`,
        descriptionFull: video.snippet.description,
        channelTitle: video.snippet.channelTitle,
        channelId: video.snippet.channelId,
        id: video.id?.videoId || video.contentDetails?.videoId || video.id,
        link: `https://www.youtube.com/watch?v=${
          video.id?.videoId || video.contentDetails?.videoId || video.id
        }`,
        contentDetails: video.contentDetails,
        timestamp: video.snippet.publishedAt,
      }),
    [video]
  );

  let {
    videoTitle,
    videoThumbnail,
    channelTitle,
    channelId,
    timestamp,
    id,
    description,
  } = currentVideo;

  const videoId =
    video.id?.videoId || video.contentDetails?.videoId || video.id;

  useEffect(() => {
    const getVideoDetails = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
      setLikes(items[0].statistics.likeCount);
      setDislikes(items[0].statistics.dislikeCount);
    };
    getVideoDetails();
  }, [videoId]);

  useEffect(() => {
    const getChannelAvatar = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelAvatar(items[0].snippet.thumbnails.default.url);
    };
    getChannelAvatar();
  }, [channelId]);

  const { push } = useHistory();

  const { selectedMenuItem } = useSelector((state) => state.sidebar);

  const dispatch = useDispatch();

  const handleClick = () => {
    push(`/watch/${id}`);
    dispatch(
      setCurrentVideo({
        ...currentVideo,
        likes: likes,
        dislikes: dislikes,
        views: views,
        duration: duration,
      })
    );
    dispatch(setMenuItem("Watch"));
  };

  return (
    <div
      className={
        selectedMenuItem === "Watch"
          ? `videoCard--home`
          : `videoCard--${selectedMenuItem.toLowerCase()}`
      }
      onClick={handleClick}
    >
      <div className="videoCard__thumbnail__container">
        <img src={videoThumbnail} className="videoCard__thumbnail" alt="" />
        <div className="videoCard__control videoCard__duration">
          {moment
            .utc(moment.duration(duration).asSeconds() * 1000)
            .format("mm:ss")}
        </div>
        <div className="videoCard__control videoCard__watchLater">
          <WatchLaterIcon />
        </div>
        <div className="videoCard__control videoCard__addToQueue">
          <AddToQueueIcon />
        </div>
      </div>

      {selectedMenuItem === ("Home" || "Watch") ? (
        <div className="videoCard__info">
          <Tooltip title={channelTitle} placement="bottom-end">
            <Avatar
              className="videoCard__avatar"
              alt={channelTitle}
              src={channelAvatar}
            />
          </Tooltip>
          <div className="videoCard__text">
            <Tooltip title={videoTitle} placement="bottom-end">
              <h3>{videoTitle}</h3>
            </Tooltip>
            <Tooltip title={channelTitle} placement="top">
              <p>{channelTitle}</p>
            </Tooltip>
            <p>
              {numeral(views).format("0.a").toUpperCase()} views •{" "}
              {moment(timestamp).fromNow()}
            </p>
          </div>
        </div>
      ) : selectedMenuItem === "Search" ? (
        <div className="videoCard__info">
          <div className="videoCard__text">
            <Tooltip title={videoTitle} placement="bottom-start">
              <h3>{videoTitle}</h3>
            </Tooltip>
            <p>
              {numeral(views).format("0.a").toUpperCase()} views •{" "}
              {moment(timestamp).fromNow()}
            </p>
            <div className="videoCard__channelInfo">
              <Tooltip title={channelTitle} placement="bottom-end">
                <Avatar
                  className="videoCard__avatar"
                  alt={channelTitle}
                  src={channelAvatar}
                />
              </Tooltip>
              <Tooltip title={channelTitle} placement="top">
                <p>{channelTitle}</p>
              </Tooltip>
            </div>
            <p>{description}</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default VideoCard;
