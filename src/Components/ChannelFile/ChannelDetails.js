import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import FetchFromApi from "../../Utils/FetchFromApi";
import Videos from "../VideoFile/Videos";
import { useParams } from "react-router-dom";
import ChannelCard from "./ChannelCard";

const ChannelDetails = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const FetchResults = async () => {
      const data = await FetchFromApi(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0]);
      const videosData = await FetchFromApi(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );

      setVideos(videosData?.items);
    };
    FetchResults();
  }, [id]);

  return (
    <div>
      <Box minHeight="95vh" sx={{ backgroundColor: "#000" }}>
        <Box>
          <div
            style={{
              marginTop: "150px",
            }}
          />
          <ChannelCard channelDetail={channelDetail} marginTop="-95px" />
        </Box>
        <Box p={2} display="flex">
          <Box sx={{ mr: { sm: "100px" } }} />
          <Videos videos={videos} />
        </Box>
      </Box>
    </div>
  );
};

export default ChannelDetails;
