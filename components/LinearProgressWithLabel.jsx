import { Box, LinearProgress, Typography } from "@mui/material";
import React from "react";

const LinearProgressWithLabel = (props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          fontSize="14px"
          fontWeight={700}
          color="#4FD1C5"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          color="primary"
          sx={{
            backgroundColor: "#E2E8F0",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#4FD1C5",
            },
          }}
          {...props}
        />
      </Box>
    </Box>
  );
};

export default LinearProgressWithLabel;
