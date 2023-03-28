import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import styles from "./Table.module.css";

const TableComponent = ({ rows, columns }) => (
  <DataGrid
    rows={rows}
    columns={columns}
    pageSize={5}
    rowsPerPageOptions={[5]}
    sx={{ border: "0" }}
    hideFooterPagination
    rowSelection={false}
  />
);

export default TableComponent;
