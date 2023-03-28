import { Home } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";
import styles from "./SidebarMenu.module.css";

const SidebarMenu = ({ Icon, label, selected = false }) => (
  <div
    className={`${styles.sidebarMenu} ${
      selected ? styles.sidebarMenuSelected : ""
    }`}
  >
    <Icon
      sx={{
        background: selected ? "#4FD1C5" : "white",
        color: selected ? "white" : "#4FD1C5",
        borderRadius: "12px",
        padding: "5px",
        boxShadow: selected ? "" : "0px 3.5px 5.5px rgba(0, 0, 0, 0.02);",
      }}
    />
    <Typography
      fontSize="12px"
      fontWeight={700}
      marginLeft="12px"
      color={selected ? "#2D3748" : "#A0AEC0"}
    >
      {label}
    </Typography>
  </div>
);

export default SidebarMenu;
