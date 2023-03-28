import { MoreVert } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import LinearProgressWithLabel from "../LinearProgressWithLabel";
import TableComponent from "../Table";

const ProjectsTable = () => {
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
      width: 500,
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
      field: "budget",
      headerName: "BUDGET",
      width: 220,
      renderHeader: (params) => renderHead(params.colDef.headerName),
      sortable: false,
      renderCell: (params) => {
        const budget = params.row.budget;
        return renderColumn(budget);
      },
    },
    {
      field: "status",
      headerName: "STATUS",
      width: 220,
      renderHeader: (params) => renderHead(params.colDef.headerName),
      sortable: false,
      renderCell: (params) => {
        const status = params.row.status;
        return renderColumn(status);
      },
    },
    {
      field: "completion",
      headerName: "COMPLETION",
      width: 180,
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
    {
      field: "edit",
      headerName: "",
      renderCell: () => {
        return <MoreVert sx={{ color: "#A0AEC0" }} />;
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
      budget: "$32,000",
      status: "Done",
      completion: "100",
    },
    {
      id: 4,
      company: {
        img: "/assets/jira.png",
        name: "Add the New Pricing Page",
      },
      budget: "$400",
      status: "Working",
      completion: "25",
    },
  ];

  return (
    <div
      style={{
        height: "50%",
        background: "white",
        borderRadius: "15px",
        padding: "10px 18px",
        marginTop: "25px",
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
      <TableComponent columns={columns} rows={rows} />
    </div>
  );
};

export default ProjectsTable;
