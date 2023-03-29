import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Percentage from "../Percentage";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 17.5px;
  background: white;
  box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
  border-radius: 15px;
  flex: 1;
`;

const TypographyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IconContainer = styled.div`
  background: #4fd1c5;
  border-radius: 12px;
  padding: 11.25px;
  boxshadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
  height: 33px;
  width: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Stat = ({ title, number, changePercentage, Icon }) => (
  <Container>
    <TypographyContainer>
      <Typography fontSize="12px" color="#A0AEC0" fontWeight={700}>
        {title}
      </Typography>
      <Typography color="#2D3748" fontSize="18px" fontWeight={700}>
        {number}
        <Percentage value={changePercentage} />
      </Typography>
    </TypographyContainer>
    <IconContainer>
      <Icon sx={{ color: "white", fontSize: "32px" }} />
    </IconContainer>
  </Container>
);

export default Stat;
