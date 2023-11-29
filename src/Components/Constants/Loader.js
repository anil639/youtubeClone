import React from "react";
import { Box, CircularProgress, Stack } from "@mui/material";
const Loader = () => {
  return (
    <div>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <CircularProgress />
      </Stack>
    </div>
  );
};

export default Loader;
