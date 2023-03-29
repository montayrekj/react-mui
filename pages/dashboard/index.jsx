import ActiveUsersCard from "@/components/ActiveUsersCard";
import AuthorsTable from "@/components/AuthorsTable";
import BlogCard from "@/components/BlogCard";
import Header from "@/components/Header";
import OrdersOverview from "@/components/OrdersOverview";
import ProjectsTableDashboard from "@/components/ProjectsTableDashboard";
import SalesOverviewCard from "@/components/SalesOverviewCard";
import Sidebar from "@/components/Sidebar";
import Stat from "@/components/Stat";
import styled from "@emotion/styled";
import {
  AccountBalanceWallet,
  Favorite,
  Feed,
  Language,
  ShoppingCart,
} from "@mui/icons-material";

import React from "react";
import styles from "./Dashboard.module.css";

const ContentContainer = styled("div")({
  "@media (max-width: 1200px)": {
    flexDirection: "column",
  },
  display: "flex",
  width: "100%",
  gap: "24px",
  flexWrap: "wrap",
  flexDirection: "row",
});

const Dashboard = () => {
  return (
    <div>
      <div className={styles.mainContainer}>
        <Sidebar selected="Dashboard" />
        <div style={{ flex: 1, position: "relative" }}>
          <Header current="Dashboard" />
          <div
            style={{
              height: "calc(100vh - 100px)",
              overflow: "scroll",
              padding: "0px 22px",
              marginTop: "25px",
              display: "flex",
              flexDirection: "column",
              gap: "23.5px",
            }}
          >
            <ContentContainer>
              <Stat
                title="Today’s Money"
                number="$53,000"
                changePercentage="+55%"
                Icon={AccountBalanceWallet}
              />
              <Stat
                title="Today’s Users"
                number="2,300"
                changePercentage="+5%"
                Icon={Language}
              />
              <Stat
                title="New Clients"
                number="+3,052"
                changePercentage="-14%"
                Icon={Feed}
              />
              <Stat
                title="Total Sales"
                number="$173,000"
                changePercentage="+8%"
                Icon={ShoppingCart}
              />
            </ContentContainer>
            <ContentContainer>
              <BlogCard
                subtitle="Built by developers"
                title="Purity UI Dashboard"
                description="From colors, cards, typography to complex elements,
you will find the full documentation."
                image="/assets/dashboard/blog-img.png"
                col={3}
              />
              <BlogCard
                title="Work with the Rockets"
                description="Wealth creation is an evolutionarily recent positive-sum game.
              It is all about who take the opportunity first."
                bgImg="/assets/dashboard/blog-bg.png"
                col={2}
              />
            </ContentContainer>
            <ContentContainer>
              <ActiveUsersCard />
              <SalesOverviewCard />
            </ContentContainer>
            <ContentContainer style={{ marginTop: "-23.5px" }}>
              <ProjectsTableDashboard />
              <OrdersOverview />
            </ContentContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
