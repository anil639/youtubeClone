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
    <div style={{ marginTop: "75px", backgroundColor: "#000" }}>
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <NavigationBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Box
          sx={{
            height: { sx: "auto", md: "92vh" },
          }}
        >
          <Typography variant="h4">
            <span style={{ color: "white" }}>{selectedCategory}</span>{" "}
            <span style={{ color: "red" }}>Videos</span>
          </Typography>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
            necessitatibus! Reiciendis odit porro cum consectetur, consequuntur
            libero at facilis quia quis alias ducimus vel vitae, provident, ea
            amet magni nemo?
          </h1>
          <Videos videos={videos} />
        </Box>
      </Stack>
    </div>
  );
};

export default Feed;
