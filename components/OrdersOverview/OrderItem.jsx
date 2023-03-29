import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Container = styled.div`
  display: flex;
`;

const VerticalContainer = styled(Container)`
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;

const TimelineLine = styled.div`
  height: 37px;
  width: 0px;
  border: 2px solid #e2e8f0;
`;

const OrderItem = ({ img, title, date }) => (
  <Container>
    <VerticalContainer style={{ marginRight: "20px" }}>
      <Image src={img} height="20" width="20" alt={title} />
      <TimelineLine />
    </VerticalContainer>
    <VerticalContainer>
      <Typography fontSize="14px" fontWeight={700} color="#2D3748">
        {title}
      </Typography>
      <Typography fontSize="12px" fontWeight={700} color="#A0AEC0" width="100%">
        {date}
      </Typography>
    </VerticalContainer>
  </Container>
);

export default OrderItem;
