import React from "react";
import SidebarMenu from "@/components/SidebarMenu";
import {
  Build,
  CreditCard,
  Equalizer,
  HelpOutlined,
  Home,
  InsertDriveFile,
  Person,
  RocketLaunch,
} from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./Sidebar.module.css";
import Link from "next/link";

const Sidebar = ({ selected }) => (
  <div className={styles.sidebarContainer}>
    <Image
      src="/assets/sign-up/logo.png"
      height="23"
      width="198"
      alt="Vandelay Industries"
      style={{ filter: "invert(100%)" }}
    />
    <div
      style={{
        height: "1px",
        width: "100%",
        marginTop: "27.5px",
        marginBottom: "22.5px",
        background:
          "linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0.15625) 99.04%)",
      }}
    />
    <div>
      <Link href="/dashboard" passHref legacyBehavior>
        <a style={{ textDecoration: "none" }}>
          <SidebarMenu
            Icon={Home}
            label="Dashboard"
            selected={selected === "Dashboard"}
          />
        </a>
      </Link>
      <Link href="/tables" passHref legacyBehavior>
        <a style={{ textDecoration: "none" }}>
          <SidebarMenu
            Icon={Equalizer}
            label="Tables"
            selected={selected === "Tables"}
          />
        </a>
      </Link>
      <SidebarMenu
        Icon={CreditCard}
        label="Billing"
        selected={selected === "Billing"}
      />
      <SidebarMenu Icon={Build} label="RTL" selected={selected === "RTL"} />
    </div>
    <div style={{ width: "100%" }}>
      <Typography
        fontSize="12px"
        fontWeight={700}
        width="100%"
        margin="24px 0px"
        padding="0px 16px"
      >
        ACCOUNT PAGES
      </Typography>
    </div>
    <div>
      <SidebarMenu
        Icon={Person}
        label="Profile"
        selected={selected === "Profile"}
      />
      <SidebarMenu
        Icon={InsertDriveFile}
        label="Sign In"
        selected={selected === "Sign In"}
      />
      <SidebarMenu
        Icon={RocketLaunch}
        label="Sign Up"
        selected={selected === "Sign Up"}
      />
    </div>
    <div className={styles.needHelp}>
      <HelpOutlined
        sx={{
          color: "#4FD1C5",
          background: "white",
          borderRadius: "12px",
          padding: "5px",
        }}
      />
      <div>
        <Typography fontSize="14px" fontWeight={700} color="white">
          Need help?
        </Typography>
        <Typography fontSize="12px" fontWeight={400} color="white">
          Please check our docs
        </Typography>
      </div>
      <Button variant="contained" className={styles.documentationBtn}>
        DOCUMENTATION
      </Button>
    </div>
  </div>
);

export default Sidebar;
