import styled from "@emotion/styled";
import {
  AccountBalanceWallet,
  Build,
  RocketLaunch,
  ShoppingCart,
} from "@mui/icons-material";
import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Percentage from "../Percentage";
import Stat from "./Stat";

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
  border-radius: 15px;
  padding: 17.5px;
  flex: 2;
`;

const ImageContainer = styled.div`
  width: 100%;
  min-height: 200px;
  position: relative;
`;

const ActiveUsersCard = () => (
  <Container>
    <ImageContainer>
      <Image
        src="/assets/dashboard/barChart.png"
        fill
        objectFit="contain"
        alt="Active Users chart"
      />
    </ImageContainer>
    <div>
      <Typography fontWeight={700} marginTop="12px">
        Active Users
      </Typography>
      <Typography
        fontSize="14px"
        color="rgba(160, 174, 192, 1)"
        fontWeight="400"
        marginTop="6px"
        marginBottom="26.5px"
      >
        <Percentage
          value="(+23%)"
          style={{ marginLeft: "0", fontWeight: 700 }}
        />{" "}
        than last week
      </Typography>
    </div>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Stat title="Users" number="32,984" progress={60} Icon={RocketLaunch} />
      <Stat title="Clicks" number="2,42m" progress={90} Icon={ShoppingCart} />
      <Stat
        title="Sales"
        number="2,400$"
        progress={30}
        Icon={AccountBalanceWallet}
      />
      <Stat title="Items" number="320" progress={60} Icon={Build} />
    </div>
  </Container>
);

export default ActiveUsersCard;
