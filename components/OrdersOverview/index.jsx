import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import Percentage from "../Percentage";
import OrderItem from "./OrderItem";

const Container = styled.div`
  margin-top: 25px;
  padding: 28px 21px;
  background: #ffffff;
  box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  max-width: 350px;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const OrdersOverview = () => (
  <Container>
    <Typography fontSize="18px" fontWeight={700} color="#2D3748">
      Orders overview
    </Typography>
    <Typography
      fontSize="14px"
      color="rgba(160, 174, 192, 1)"
      fontWeight="400"
      marginTop="6px"
      marginBottom="36.5px"
    >
      <Percentage value="+30%" style={{ marginLeft: "0", fontWeight: 700 }} />{" "}
      this month
    </Typography>
    <ItemsContainer>
      <OrderItem
        title="$2400, Design changes"
        date="22 DEC 7:20 PM"
        img="/assets/dashboard/order1.png"
      />
      <OrderItem
        title="New order #4219423"
        date="21 DEC 11:21 PM"
        img="/assets/dashboard/order2.png"
      />
      <OrderItem
        title="Server Payments for April"
        date="21 DEC 9:28 PM"
        img="/assets/dashboard/order3.png"
      />
      <OrderItem
        title="New card added for order #3210145"
        date="20 DEC 3:52 PM"
        img="/assets/dashboard/order4.png"
      />
      <OrderItem
        title="Unlock packages for Development"
        date="19 DEC 11:35 PM"
        img="/assets/dashboard/order5.png"
      />
      <OrderItem
        title="New order #9851258"
        date="18 DEC 4:41 PM"
        img="/assets/dashboard/order6.png"
      />
    </ItemsContainer>
  </Container>
);

export default OrdersOverview;
