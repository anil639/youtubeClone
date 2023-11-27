import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../Constants/Constant";

const VideoCards = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <div>
      <Card
        sx={{
          width: { xs: "100%", sm: "358px", md: "320px" },
          boxShadow: "none",
          borderRadius: 1,
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
          <CardMedia
            image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
            alt={snippet?.title}
            sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
          />
        </Link>
        <CardContent
          sx={{
            backgroundColor: "#000",
            color: "white",
            height: "100%",
          }}
        >
          <Link
            to={videoId ? `/video/${videoId}` : demoVideoUrl}
            style={{ textDecoration: "none" }}
          >
            <Typography variant="p" fontWeight="bold" color="#FFF">
              {snippet?.title.slice(0, 70) || demoVideoTitle.slice(0, 70)}
            </Typography>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : demoChannelUrl
            }
            style={{ textDecoration: "none" }}
          >
            <Typography variant="body1" color="gray">
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircleIcon
                sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
              />
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoCards;
