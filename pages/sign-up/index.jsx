import { Button, Container, Switch, Typography } from "@mui/material";
import { FacebookOutlined } from "@mui/icons-material";
import { Google } from "@mui/icons-material";
import { Apple } from "@mui/icons-material";
import { Favorite } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import styles from "./Signup.module.css";
import TextInput from "@/components/TextInput";
import AntSwitch from "@/components/AntSwitch";
import Link from "next/link";
import { FooterMenuItems, HeaderMenuItems } from "@/util/options";

const SignUpScreen = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.heroContainer}>
        <Container maxWidth="lg" className={styles.headerContainer}>
          <Image
            src="/assets/sign-up/logo.png"
            height="23"
            width="198"
            alt="Vandelay Industries"
          />
          <div className={styles.menuContainer}>
            {HeaderMenuItems.map((menu) => (
              <div key={menu.label} className={styles.menu}>
                <Image
                  src={`/assets/sign-up/${menu.imgFile}`}
                  width="11"
                  height="11"
                  alt={menu.label}
                />
                <Typography fontSize="10px" fontWeight={700} paddingLeft="4px">
                  {menu.label}
                </Typography>
              </div>
            ))}
          </div>
          <Button
            variant="contained"
            color="info"
            className={styles.downloadBtn}
          >
            Free Download
          </Button>
        </Container>
        <Container maxWidth="xs" sx={{ paddingTop: "55px" }}>
          <Typography
            fontSize="32px"
            fontWeight={700}
            textAlign="center"
            color="white"
          >
            Welcome!
          </Typography>
          <Typography
            fontWeight={400}
            textAlign="center"
            color="white"
            marginTop="10px"
          >
            Use these awesome forms to login or create new account in your
            project for free.
          </Typography>
        </Container>
      </div>
      <Container maxWidth="xs" className={styles.signupContainer}>
        <Typography fontSize="18px" fontWeight={700}>
          Register with
        </Typography>
        <div className={styles.socialMediaContainer}>
          <div className={styles.socialMediaIcon}>
            <FacebookOutlined />
          </div>
          <div className={styles.socialMediaIcon}>
            <Apple />
          </div>
          <div className={styles.socialMediaIcon}>
            <Google />
          </div>
        </div>
        <Typography
          fontSize="18px"
          fontWeight={700}
          color="#A0AEC0"
          marginTop="29px"
          marginBottom="17px"
        >
          or
        </Typography>
        <TextInput label="Name" placeholder="Your full name" />
        <TextInput label="Email" placeholder="Your full name" />
        <TextInput
          label="Password"
          placeholder="Your full password"
          type="password"
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            marginBottom: "36px",
          }}
        >
          <AntSwitch />
          <Typography
            fontSize="12px"
            fontWeight="400"
            color="#2D3748"
            marginLeft="10px"
          >
            Remember me
          </Typography>
        </div>
        <Button className={styles.signupBtn}>SIGN UP</Button>
        <div style={{ display: "flex", marginTop: "22px" }}>
          <Typography fontSize="14px" fontWeight={400} color="#A0AEC0">
            Already have an account?&nbsp;
          </Typography>
          <Link href="/" passHref legacyBehavior>
            <a style={{ textDecoration: "none" }}>
              <Typography
                fontSize="14px"
                fontWeight={400}
                color="rgba(79, 209, 197, 1)"
              >
                Sign in
              </Typography>
            </a>
          </Link>
        </div>
      </Container>
      <Container maxWidth="lg" className={styles.footerContainer}>
        <Typography fontSize="12px" color="#A0AEC0" fontWeight={400}>
          © 2022, Made with <Favorite fontSize="10px" sx={{ color: "red" }} />{" "}
          by <span style={{ color: "rgba(56, 178, 172, 1)" }}>Tektorch</span>{" "}
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
  );
};

export default SignUpScreen;
