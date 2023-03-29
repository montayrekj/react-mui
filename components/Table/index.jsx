import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import styles from "./Table.module.css";

const TableComponent = ({ rows, columns, ...props }) => (
  <DataGrid
    rows={rows}
    columns={columns}
    pageSize={5}
    rowsPerPageOptions={[5]}
    sx={{ border: "0", boxShadow: "none" }}
    hideFooterPagination
    rowSelection={false}
    {...props}
  />
);

export default TableComponent;
