import styled from "@emotion/styled";
import { ArrowForward } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
  border-radius: 15px;
  padding: 17.5px;
  flex: ${(props) => (props.col ? props.col : 1)};
`;

const ContentContainer = styled.div`
  max-height: 100%;
  height: -webkit-fill-available;
  max-width: 100%;
  display: flex;
  justify-content; space-between;
  padding:  ${(props) => (props.bgImg ? "21.5px" : "0px")};
  background:  ${(props) =>
    props.bgImg
      ? `linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%), url('${props.bgImg}')`
      : "#ffffff"};
  color: ${(props) => (props.bgImg ? "white" : "black")};
  background-size: ${(props) => (props.bgImg ? "cover" : "unset")};
  background-position: ${(props) => (props.bgImg ? "center" : "unset")};
  border-radius: 15px;
`;

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const BlogCard = ({ subtitle, title, description, image, bgImg, col }) => (
  <Container col={col}>
    <ContentContainer bgImg={bgImg}>
      <VerticalContainer
        style={{
          justifyContent: "space-between",
          flex: "4",
          maxWidth: "80%",
        }}
      >
        <VerticalContainer>
          {subtitle && (
            <Typography
              fontSize="12px"
              fontWeight={700}
              color={bgImg ? "white" : "#A0AEC0"}
            >
              {subtitle}
            </Typography>
          )}
          <Typography
            fontSize="18px"
            fontWeight={700}
            color={bgImg ? "white" : "#2D3748"}
            marginTop="3px"
            marginBottom="6px"
          >
            {title}
          </Typography>
          <Typography
            fontSize="14px"
            fontWeight={400}
            color={bgImg ? "white" : "#A0AEC0"}
          >
            {description}
          </Typography>
        </VerticalContainer>
        <Typography
          fontSize="14px"
          fontWeight={700}
          sx={{ display: "flex", alignItems: "center" }}
        >
          Read more{" "}
          <ArrowForward
            fontSize="14px"
            sx={{ marginLeft: "4.25px", fontWeight: "700" }}
          />
        </Typography>
      </VerticalContainer>

      {image && (
        <>
          <div style={{ flex: 1 }} />
          <div
            style={{
              height: "288px",
              aspectRatio: "7 / 5",
              position: "relative",
              flex: 3,
            }}
          >
            <Image src={image} fill alt={title} />
          </div>
        </>
      )}
    </ContentContainer>
  </Container>
);

export default BlogCard;
