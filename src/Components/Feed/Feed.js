import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import FetchFromApi from "../../Utils/FetchFromApi";
import NavigationBar from "../NavigationBar/NavigationBar";
import Videos from "../VideoFile/Videos";
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    FetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, []);

  return (
    <div style={{ marginTop: "60px" }}>
      <Stack
        sx={{
          flexDirection: { sx: "column", md: "row" },
          backgroundColor: "#000",
        }}
      >
        <NavigationBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Box
          sx={{
            height: { sx: "auto", md: "92vh" },
          }}
        >
          <Typography variant="h4" sx={{ backgroundColor: "#000" }}>
            <span style={{ color: "white" }}>{selectedCategory}</span>{" "}
            <span style={{ color: "red" }}>Videos</span>
          </Typography>
          <Videos videos={videos} />
        </Box>
      </Stack>
    </div>
  );
};

export default Feed;
