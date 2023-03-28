import AuthorsTable from "@/components/AuthorsTable";
import Header from "@/components/Header";
import ProjectsTable from "@/components/ProjectsTable";
import Sidebar from "@/components/Sidebar";
import { FooterMenuItems } from "@/util/options";
import { Favorite } from "@mui/icons-material";
import { Container, Typography } from "@mui/material";

import React from "react";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.mainContainer}>
      <Sidebar selected="Dashboard" />
      <div style={{ flex: 1, position: "relative" }}>
        <Header current="Dashboard" />
      </div>
    </div>
  );
};

export default Dashboard;
