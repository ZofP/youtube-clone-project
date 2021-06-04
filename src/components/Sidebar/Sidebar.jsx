import React from "react";
import "./Sidebar.scss";

import { Drawer, Divider } from "@material-ui/core";

import SidebarRow from "../SidebarRow/SidebarRow";

import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import SportsIcon from "@material-ui/icons/Sports";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { useSelector } from "react-redux";

const Sidebar = () => {
  const { sidebarOpen } = useSelector((state) => state.sidebar);

  const sidebarArray = [
    {
      title: "Home",
      Icon: HomeIcon,
    },
    {
      title: "Explore",
      Icon: ExploreIcon,
    },
    {
      title: "Subscriptions",
      Icon: SubscriptionsIcon,
    },
    {
      title: "Library",
      Icon: VideoLibraryIcon,
    },
    {
      title: "History",
      Icon: HistoryIcon,
    },
    {
      title: "Your videos",
      Icon: OndemandVideoIcon,
    },
    {
      title: "Watch later",
      Icon: WatchLaterIcon,
    },
    {
      title: "Show more",
      Icon: ExpandMoreIcon,
    },
    {
      title: "YouTube Premium",
      Icon: YouTubeIcon,
    },
    {
      title: "Movies",
      Icon: LocalMoviesIcon,
    },
    {
      title: "Gaming",
      Icon: SportsEsportsIcon,
    },
    {
      title: "Sports",
      Icon: SportsIcon,
    },
    {
      title: "Sign Out",
      Icon: ExitToAppIcon,
    },
  ];

  return (
    <>
      {sidebarOpen ? (
        <div className="sidebar--open">
          <Drawer
            className="sidebar--permanent"
            anchor="left"
            variant="permanent"
            open={Boolean(sidebarOpen)}
          >
            {sidebarArray.slice(0, 3).map(({ title, Icon }, index) => (
              <SidebarRow title={title} Icon={Icon} key={index} />
            ))}

            <Divider />
            {sidebarArray.slice(3, 8).map(({ title, Icon }, index) => (
              <SidebarRow title={title} Icon={Icon} key={index} />
            ))}

            <Divider />
            <p>MORE FROM YOUTUBE</p>
            {sidebarArray.slice(8, 13).map(({ title, Icon }, index) => (
              <SidebarRow title={title} Icon={Icon} key={index} />
            ))}
          </Drawer>
        </div>
      ) : (
        <div className="sidebar">
          <Drawer
            className="sidebar--permanent"
            anchor="left"
            variant="permanent"
            open={true}
          >
            {sidebarArray.slice(0, 4).map(({ title, Icon }, index) => (
              <SidebarRow title={title} Icon={Icon} key={index} />
            ))}
          </Drawer>
        </div>
      )}
    </>
  );
};

export default Sidebar;
