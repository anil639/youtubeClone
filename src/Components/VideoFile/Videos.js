import React from "react";
import { Stack, Box } from "@mui/material";

import VideoCards from "./VideoCards";
import ChannelCard from "../ChannelFile/ChannelCard";
import Loader from "../Constants/Loader";

const Videos = ({ videos }) => {
  if (!videos?.length) return <Loader />;

  return (
    <div>
      <Stack
        direction={"row"}
        flexWrap="wrap"
        justifyContent="start"
        alignItems="start"
        gap={2}
        sx={{ backgroundColor: "#000" }}
      >
        {videos.map((item, idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCards video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ))}
      </Stack>
    </div>
  );
};

export default Videos;
