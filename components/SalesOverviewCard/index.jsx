import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Percentage from "../Percentage";

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
  border-radius: 15px;
  padding: 17.5px;
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  width: 100%;
  min-height: 200px;
  position: relative;
  height: 100%;
`;

const SalesOverviewCard = () => (
  <Container>
    <div>
      <Typography fontWeight={700}>Sales overview</Typography>
      <Typography
        fontSize="14px"
        color="rgba(160, 174, 192, 1)"
        fontWeight="400"
        marginTop="6px"
      >
        <Percentage
          value="(+5%) more"
          style={{ marginLeft: "0", fontWeight: 700 }}
        />{" "}
        in 2021
      </Typography>
    </div>
    <ImageContainer>
      <Image
        src="/assets/dashboard/areaChart.png"
        fill
        alt="Sales Overview chart"
        style={{ marginTop: "35px" }}
        objectFit="contain"
      />
    </ImageContainer>
  </Container>
);

export default SalesOverviewCard;
