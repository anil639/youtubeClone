import React, { useState, useEffect } from "react";
import { Typography, Box, Stack, Container } from "@mui/material";
import ReactPlayer from "react-player";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Videos from "./Videos";
import Loader from "../Constants/Loader";
import FetchFromApi from "../../Utils/FetchFromApi";
import { Link, useParams } from "react-router-dom";
const VideoDetails = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    FetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    FetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);
  if (!videoDetail?.snippet) return <Loader />;
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <div style={{ backgroundColor: "#000" }}>
      <Box minHeight="660px">
        <Stack direction={{ xs: "column", md: "row" }}>
          <Box flex={1}>
            <Box
              sx={{
                width: "100%",
                position: "sticky",
                top: "86px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ReactPlayer
                style={{
                  width: "100%",
                  height: "100%",
                  "@media screen and (maxWidth: 600px)": {
                    height: "313px",
                  },
                }}
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
              />
              <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                {title}
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ color: "#fff" }}
                py={1}
                px={2}
              >
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/channel/${channelId}`}
                >
                  <Typography
                    variant={{ sm: "subtitle1", md: "h6" }}
                    color="#fff"
                  >
                    {channelTitle}
                    <CheckCircleIcon
                      sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                    />
                  </Typography>
                </Link>
                <Stack direction="row" gap="20px" alignItems="center">
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(likeCount).toLocaleString()} likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Stack>
        <Container>
          <Box
            px={2}
            py={{ md: 1, xs: 5 }}
            justifyContent="center"
            alignItems="center"
          >
            <Videos videos={videos} direction="column" />
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default VideoDetails;
