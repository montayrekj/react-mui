import styled from "@emotion/styled";
import { LinearProgress, Typography } from "@mui/material";
import React from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const IconContainer = styled.div`
  background: #4fd1c5;
  border-radius: 12px;
  padding: 9px;
  boxshadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
  height: 21px;
  width: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Stat = ({ title, number, progress, Icon }) => (
  <Container>
    <div style={{ display: "flex", alignItems: "center" }}>
      <IconContainer>
        <Icon sx={{ color: "white", fontSize: "20px" }} />
      </IconContainer>
      <Typography
        fontSize="12px"
        fontWeight={700}
        color="#A0AEC0"
        marginLeft="10px"
      >
        {title}
      </Typography>
    </div>
    <Typography fontSize="18px" fontWeight={700} color="#2D3748">
      {number}
    </Typography>
    <LinearProgress
      variant="determinate"
      color="primary"
      sx={{
        backgroundColor: "#E2E8F0",
        "& .MuiLinearProgress-bar": {
          backgroundColor: "#4FD1C5",
        },
        width: "100px",
        borderRadius: "10px",
      }}
      value={progress}
    />
  </Container>
);

export default Stat;
