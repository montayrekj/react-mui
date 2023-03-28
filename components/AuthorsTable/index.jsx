import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import TableComponent from "../Table";

const AuthorsTable = () => {
  const renderHead = (label) => (
    <Typography fontSize="10px" fontWeight={700} color="#A0AEC0">
      {label}
    </Typography>
  );
  const columns = [
    {
      field: "author",
      headerName: "AUTHOR",
      width: 500,
      sortable: false,
      renderHeader: (params) => renderHead(params.colDef.headerName),
      renderCell: (params) => {
        const author = params.row.author;
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image
              src={author.img}
              width="40"
              height="40"
              alt={author.name}
              style={{ marginRight: "15px" }}
            />
            <div>
              <Typography fontSize="14px" fontWeight={700}>
                {author.name}
              </Typography>
              <Typography fontSize="14px" fontWeight={400}>
                {author.email}
              </Typography>
            </div>
          </div>
        );
      },
    },
    {
      field: "function",
      headerName: "FUNCTION",
      width: 220,
      renderHeader: (params) => renderHead(params.colDef.headerName),
      sortable: false,
      renderCell: (params) => {
        const func = params.row.function;
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <Typography fontSize="14px" fontWeight={700}>
                {func.role}
              </Typography>
              <Typography fontSize="14px" fontWeight={400}>
                {func.department}
              </Typography>
            </div>
          </div>
        );
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
        return (
          <Typography
            fontSize="14px"
            fontWeight={700}
            borderRadius="8px"
            padding="1px 10px"
            color="white"
            sx={{ background: status === "Online" ? "#48BB78" : "#CBD5E0" }}
          >
            {status}
          </Typography>
        );
      },
    },
    {
      field: "employed",
      headerName: "EMPLOYED",
      width: 220,
      renderHeader: (params) => renderHead(params.colDef.headerName),
      sortable: false,
      renderCell: (params) => {
        const employed = params.row.employed;
        return (
          <Typography fontSize="14px" fontWeight={700}>
            {employed}
          </Typography>
        );
      },
    },
    {
      field: "edit",
      headerName: "",
      renderCell: (params) => {
        return (
          <Typography fontSize="14px" fontWeight={700} color="#718096">
            Edit
          </Typography>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      author: {
        img: "/assets/elaine.png",
        name: "Elaine Benes",
        email: "elaine@vandelay.com",
      },
      function: {
        role: "Manager",
        department: "Organization",
      },
      status: "Online",
      employed: "14/06/21",
    },
    {
      id: 2,
      author: {
        img: "/assets/sidra.png",
        name: "Sidra Holland",
        email: "sidra@vandelay.com",
      },
      function: {
        role: "Programmer",
        department: "Developer",
      },
      status: "Offline",
      employed: "14/06/21",
    },
    {
      id: 3,
      author: {
        img: "/assets/cosmo.png",
        name: "Cosmo Kramer",
        email: "kramer@vandelay.com",
      },
      function: {
        role: "Executive",
        department: "Projects",
      },
      status: "Online",
      employed: "14/06/21",
    },
    {
      id: 4,
      author: {
        img: "/assets/newman.png",
        name: "Newman",
        email: "newman@usps.com",
      },
      function: {
        role: "Manager",
        department: "Organization",
      },
      status: "Online",
      employed: "14/06/21",
    },
    {
      id: 5,
      author: {
        img: "/assets/frank.png",
        name: "Frank Costanza",
        email: "frank@vandelay.com",
      },
      function: {
        role: "Programmer",
        department: "Developer",
      },
      status: "Offline",
      employed: "14/06/21",
    },
    {
      id: 6,
      author: {
        img: "/assets/art.png",
        name: "Art VanDelay",
        email: "art.ie@vandelay.com",
      },
      function: {
        role: "Designer",
        department: "UI/UX Design",
      },
      status: "Offline",
      employed: "14/06/21",
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
        Authors Table
      </Typography>
      <TableComponent columns={columns} rows={rows} />
    </div>
  );
};

export default AuthorsTable;
