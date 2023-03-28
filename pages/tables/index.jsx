import AuthorsTable from "@/components/AuthorsTable";
import Header from "@/components/Header";
import ProjectsTable from "@/components/ProjectsTable";
import Sidebar from "@/components/Sidebar";
import { FooterMenuItems } from "@/util/options";
import { Favorite } from "@mui/icons-material";
import { Container, Typography } from "@mui/material";

import React from "react";
import styles from "./Tables.module.css";

const Tables = () => {
  return (
    <div className={styles.mainContainer}>
      <Sidebar selected="Tables" />
      <div style={{ flex: 1, position: "relative" }}>
        <Header current="Tables" />
        <div
          style={{
            padding: "0px 22px",
            height: "calc(100vh - 100px)",
            overflow: "scroll",
          }}
        >
          <AuthorsTable />
          <ProjectsTable />
          <Container maxWidth="lg" className={styles.footerContainer}>
            <Typography fontSize="12px" color="#A0AEC0" fontWeight={400}>
              © 2022, Made with{" "}
              <Favorite fontSize="10px" sx={{ color: "red" }} /> by{" "}
              <span style={{ color: "rgba(56, 178, 172, 1)" }}>Tektorch</span>{" "}
              for a better web
            </Typography>
            <div className={styles.footerMenuContainer}>
              {FooterMenuItems.map((menu) => (
                <Typography
                  key={menu.label}
                  fontSize="12px"
                  fontWeight={400}
                  color="#A0AEC0"
                >
                  {menu.label}
                </Typography>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Tables;
