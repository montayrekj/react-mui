import { CheckCircle, MoreVert } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import LinearProgressWithLabel from "../LinearProgressWithLabel";
import TableComponent from "../Table";

const ProjectsTableDashboard = () => {
  const renderHead = (label) => (
    <Typography fontSize="10px" fontWeight={700} color="#A0AEC0">
      {label}
    </Typography>
  );
  const renderColumn = (label) => (
    <Typography fontSize="14px" fontWeight={700} color="#2D3748">
      {label}
    </Typography>
  );
  const columns = [
    {
      field: "company",
      headerName: "COMPANIES",
      width: 300,
      sortable: false,
      renderHeader: (params) => renderHead(params.colDef.headerName),
      renderCell: (params) => {
        const company = params.row.company;
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image
              src={company.img}
              width="20"
              height="20"
              alt={company.name}
              style={{ marginRight: "15px" }}
            />
            <div>
              <Typography fontSize="14px" fontWeight={700}>
                {company.name}
              </Typography>
            </div>
          </div>
        );
      },
    },
    {
      field: "members",
      headerName: "MEMBERS",
      width: 220,
      renderHeader: (params) => renderHead(params.colDef.headerName),
      sortable: false,
      renderCell: (params) => {
        const members = params.row.members;
        return members.map((member, idx) => (
          <Image
            key={member.name}
            src="/assets/dashboard/avatar.png"
            alt={member.name}
            height="30"
            width="30"
            style={{
              border: "3px solid white",
              borderRadius: "30px",
              transform: `translateX(-${idx * 10}px)`,
            }}
          />
        ));
      },
    },
    {
      field: "budget",
      headerName: "BUDGET",
      width: 120,
      renderHeader: (params) => renderHead(params.colDef.headerName),
      sortable: false,
      renderCell: (params) => {
        const budget = params.row.budget;
        return renderColumn(budget);
      },
    },
    {
      field: "completion",
      headerName: "COMPLETION",
      width: 120,
      renderHeader: (params) => renderHead(params.colDef.headerName),
      sortable: false,
      renderCell: (params) => {
        const completion = params.row.completion;
        return (
          <Box sx={{ width: "100%" }}>
            <LinearProgressWithLabel value={completion} />
          </Box>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      company: {
        img: "/assets/xd.png",
        name: "Software Import/Export",
      },
      members: [
        {
          name: "Annie Tiscur",
        },
        {
          name: "Annie Tiscur",
        },
        {
          name: "Annie Tiscur",
        },
        {
          name: "Annie Tiscur",
        },
        {
          name: "Annie Tiscur",
        },
      ],
      budget: "$14,000",
      status: "Working",
      completion: "60",
    },
    {
      id: 2,
      company: {
        img: "/assets/atlassian.png",
        name: "Add Progress Track",
      },
      members: [
        {
          name: "Annie Tiscur",
        },
        {
          name: "Annie Tiscur",
        },
      ],
      budget: "$3,000",
      status: "Cancelled",
      completion: "10",
    },
    {
      id: 3,
      company: {
        img: "/assets/slack.png",
        name: "Fix Platform Errors",
      },
      members: [
        {
          name: "Annie Tiscur",
        },
        {
          name: "Annie Tiscur",
        },
      ],
      budget: "Not set",
      status: "Done",
      completion: "100",
    },
    {
      id: 4,
      company: {
        img: "/assets/spotify.png",
        name: "Launch our Mobile App",
      },
      members: [
        {
          name: "Annie Tiscur",
        },
        {
          name: "Annie Tiscur",
        },
        {
          name: "Annie Tiscur",
        },
        {
          name: "Annie Tiscur",
        },
      ],
      budget: "$32,000",
      status: "Done",
      completion: "100",
    },
    {
      id: 5,
      company: {
        img: "/assets/jira.png",
        name: "Add the New Pricing Page",
      },
      members: [
        {
          name: "Annie Tiscur",
        },
        {
          name: "Annie Tiscur",
        },
        {
          name: "Annie Tiscur",
        },
        {
          name: "Annie Tiscur",
        },
        {
          name: "Annie Tiscur",
        },
      ],
      budget: "$400",
      status: "Working",
      completion: "25",
    },
    {
      id: 6,
      company: {
        img: "/assets/invision.png",
        name: "Redesign New Online Shop",
      },
      members: [
        {
          name: "Annie Tiscur",
        },
        {
          name: "Annie Tiscur",
        },
      ],
      budget: "$7,600",
      status: "Working",
      completion: "40",
    },
  ];

  return (
    <div
      style={{
        flex: 1,
        minHeight: "528px",
        background: "white",
        borderRadius: "15px",
        padding: "10px 18px",
        marginTop: "25px",
        boxShadow: "0px 3.5px 5.5px rgba(0, 0, 0, 0.02)",
      }}
    >
      <Typography
        fontSize="18px"
        fontWeight={700}
        color="#2D3748"
        marginTop="18px"
      >
        Projects
      </Typography>
      <div
        style={{
          display: "flex",
          fontSize: "18px",
          alignItems: "center",
          marginTop: "8px",
        }}
      >
        <CheckCircle sx={{ color: "#68D391" }} />
        <Typography
          fontSize="14px"
          color="#A0AEC0"
          fontWeight={700}
          marginLeft="5px"
        >
          30 done <span style={{ fontWeight: 400 }}>this month</span>
        </Typography>
      </div>
      <TableComponent columns={columns} rows={rows} getRowHeight={() => 70} />
    </div>
  );
};

export default ProjectsTableDashboard;
