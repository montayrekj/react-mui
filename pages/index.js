import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Button, Container, Typography } from "@mui/material";
import TextInput from "@/components/TextInput";
import AntSwitch from "@/components/AntSwitch";
import Link from "next/link";
import { Favorite } from "@mui/icons-material";
import { FooterMenuItems, HeaderMenuItems } from "@/util/options";

export default function Home() {
  return (
    <div style={{ padding: "24px 0px", background: "white" }}>
      <Container maxWidth="lg" className={styles.headerContainer}>
        <Image
          src="/assets/sign-up/logo.png"
          height="23"
          width="198"
          alt="Vandelay Industries"
          style={{ filter: "invert(100%)" }}
        />
        <div className={styles.menuContainer}>
          {HeaderMenuItems.map((menu) => (
            <div key={menu.label} className={styles.menu}>
              <Image
                src={`/assets/sign-up/${menu.imgFile}`}
                width="11"
                height="11"
                alt={menu.label}
                style={{ filter: "invert(100%)" }}
              />
              <Typography fontSize="10px" fontWeight={700} paddingLeft="4px">
                {menu.label}
              </Typography>
            </div>
          ))}
        </div>
        <Button variant="contained" color="info" className={styles.downloadBtn}>
          Free Download
        </Button>
      </Container>
      <Container maxWidth="lg" disableGutters>
        <Container maxWidth="xs" className={styles.signupContainer}>
          <Typography
            fontSize="32px"
            fontWeight={700}
            color="#4FD1C5"
            marginBottom="8.5px"
          >
            Welcome Back
          </Typography>
          <Typography
            fontSize="14px"
            fontWeight={700}
            color="#A0AEC0"
            marginBottom="36px"
          >
            Enter your email and password to sign in
          </Typography>
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
          <div
            style={{
              display: "flex",
              marginTop: "22px",
              justifyContent: "center",
            }}
          >
            <Typography fontSize="14px" fontWeight={400} color="#A0AEC0">
              Don&apos;t have an account?&nbsp;
            </Typography>
            <Link href="/sign-up" passHref legacyBehavior>
              <a style={{ textDecoration: "none" }}>
                <Typography
                  fontSize="14px"
                  fontWeight={400}
                  color="rgba(79, 209, 197, 1)"
                >
                  Sign up
                </Typography>
              </a>
            </Link>
          </div>
        </Container>
      </Container>
      <div className={styles.chakra}></div>
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
}
