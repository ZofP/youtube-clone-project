import React, { useEffect, useState } from 'react';

import millify from "millify";

export const myMillify = (number) =>
  millify(number, { precision: 1, decimalSeparator: "." });



export const dummyVideos = [
  {
    videoTitle: "I’m Leaving YouTube...",
    videoThumbnail:
      "https://i.ytimg.com/vi/gvRdOLl-Q_I/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCuoo8QLRYMaL17Omx85oCiZVn-kg",
    channelTitle: "Morgz",
    channelAvatar:
      "https://yt3.ggpht.com/ytc/AAUvwngE48ftdezo8MAmcLxc7Va6d56alyRlNUo8RIWP3g=s68-c-k-c0x00ffffff-no-rj",
    views: myMillify(4505145),
    timestamp: "4 weeks ago",
    link: "https://www.youtube.com/watch?v=gvRdOLl-Q_I",
    id: "gvRdOLl-Q_I",
    description:
      "This video is not a joke. Please watch. -------------------| FOLLOW FOR A FOLLOW BACK |------------------- ▻FOLLOW ME ON ...",
    duration: "10:02",
  },
  {
    videoTitle:
      "15 Smart Hacks and Ideas for Parents! Priceless Hacks for Parents",
    videoThumbnail:
      "https://i.ytimg.com/vi/FbIoY6GpnRg/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCoGyb2ntgvCD9K5MV4XXW2NojOCw",
    channelTitle: "Troom Troom",
    channelAvatar:
      "https://yt3.ggpht.com/ytc/AAUvwninD_61TUhHLQwcteyltWN-W3d-RM8o4XY_aJYV5g=s68-c-k-c0x00ffffff-no-rj",
    views: myMillify(6968174),
    timestamp: "6 days ago",
    link: "https://www.youtube.com/watch?v=FbIoY6GpnRg",
    id: "FbIoY6GpnRg",
    description:
      "Supplies and tools: • Silver fabric • Foam paper • Hot glue gun • White shirt • Fabric markers • Fabric pen • Acrylic paint • Polish ...",
    duration: "10:25",
  },
  {
    videoTitle:
      "Top New Comedy Video 2020_New Funny Video 2020_Try To Not Laugh_Episode-62_By hahaidea",
    videoThumbnail:
      "https://i.ytimg.com/vi/1yCPnuWCww0/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB6FGi6aUcjkSNz4-nTtPZ9kmEedQ",
    channelTitle: "HaHa Idea",
    channelAvatar:
      "https://yt3.ggpht.com/ytc/AAUvwnhKuk8Y-6as-sBnmSI-LDT2RcWNQbVw-pRXLz_ltg=s68-c-k-c0x00ffffff-no-rj",
    views: myMillify(151719434),
    timestamp: "9 months ago",
    link: "https://www.youtube.com/watch?v=1yCPnuWCww0",
    id: "1yCPnuWCww0",
    description:
      "Hello dear Viewers, We make this video with some fail funny videos and mixed Some comedy videos. This is village funny videos ...",
    duration: "10:39",
  },
  {
    videoTitle: "5 Simple YouTube Video Ideas to Grow Your Channel",
    videoThumbnail:
      "https://i.ytimg.com/vi/4XXJtpEospk/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBGZh41m2CqPBR7eFNbX1VpIvHXow",
    channelTitle: "Think Media",
    channelAvatar:
      "https://yt3.ggpht.com/ytc/AAUvwnhzHIb87LQI1sWTbkCR7YA3yiP_Qj9sgEYRNVQ0VA=s68-c-k-c0x00ffffff-no-rj",
    views: myMillify(10483),
    timestamp: "1 day ago",
    link: "https://www.youtube.com/watch?v=4XXJtpEospk",
    id: "4XXJtpEospk",
    description:
      "Try these 5 different YouTube video styles for your channel! ****** Learn How to Make YouTube Videos on Your Phone START to ...",
    duration: "0:58",
  },
  {
    videoTitle: "Best Airbrush Kit For Beginners In 2021 - Top 5",
    videoThumbnail:
      "https://i.ytimg.com/vi/2_34KdK3X9w/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCE3P9aNDBhHohAUH-lfn3RdxmgOQ",
    channelTitle: "Amz's Trend",
    channelAvatar:
      "https://yt3.ggpht.com/ytc/AAUvwnjWbuvfABM1aahZ3dOYsL4jwCEdQHcI1MaFR_BZ=s68-c-k-c0x00ffffff-no-rj",
    views: myMillify(8283),
    timestamp: "8 months ago",
    link: "https://www.youtube.com/watch?v=2_34KdK3X9w",
    id: "2_34KdK3X9w",
    description:
      "Top 5 Best Airbrush Kit For Beginners In 2021 1. MASTER AIRBRUSH KIT-SP19-20 https://amzn.to/2EftiZl 2. MASTER AIRBRUSH ...",
    duration: "5:49",
  },
  {
    videoTitle:
      "Home Sweet Home Survive : Love The Game But It Needs Major Work To Compete In This Market",
    videoThumbnail:
      "https://i.ytimg.com/vi/lcHQdhvxalM/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCF03TC2U9AI1PIFP0Vol0c65ESDQ",
    channelTitle: "AesmatvGaming",
    channelAvatar:
      "https://yt3.ggpht.com/ytc/AAUvwngdzLbWMGuYhcoa7tKsu7bf2I-XDHqXdYqcxHIj=s68-c-k-c0x00ffffff-no-rj",
    views: myMillify(289),
    timestamp: "3 days ago",
    link: "https://www.youtube.com/watch?v=lcHQdhvxalM",
    id: "lcHQdhvxalM",
    description:
      "welcome to home sweet home survive , today i did another squad run with some friends ThatViolinChick ...",
    duration: "29:34",
  },
];