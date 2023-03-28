import React from "react";
import { Notifications, Person, Settings } from "@mui/icons-material";
import { Typography } from "@mui/material";
import styles from "./Header.module.css";

const Header = ({ current }) => (
  <div className={styles.headerContainer}>
    <div>
      <Typography fontSize="12px" fontWeight={400}>
        <span style={{ color: "rgba(160, 174, 192, 1)" }}>Pages</span>{" "}
        <span style={{ fontSize: "14px", color: "rgba(45, 55, 72, 1)" }}>
          /
        </span>{" "}
        <span style={{ color: "rgba(0, 0, 0, 1)" }}>{current}</span>
      </Typography>
      <Typography
        fontSize="14px"
        fontWeight={700}
        color="#2D3748"
        marginTop="5.5px"
      >
        {current}
      </Typography>
    </div>
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "fit-content",
          margin: "0px 19px",
        }}
      >
        <Person sx={{ color: "#718096" }} />
        <Typography
          fontSize="12px"
          fontWeight={700}
          color="#718096"
          marginLeft="5px"
        >
          Sign In
        </Typography>
      </div>
      <Settings sx={{ color: "#718096" }} />
      <Notifications sx={{ color: "#718096" }} />
    </div>
  </div>
);

export default Header;
