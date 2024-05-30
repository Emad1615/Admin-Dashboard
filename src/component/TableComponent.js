import DataTable from "react-data-table-component";
import Checkbox from "@mui/material/Checkbox";
import SortIcon from "@mui/icons-material/ArrowDownward";
import { TableData } from "./../data/DataTableData";
import { tokens } from "./../theme";
import { useTheme } from "@emotion/react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import { FaTrash, FaPencil } from "react-icons/fa6";

export default function DataTableComponent() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const customStyles = {
    table: {
      style: {
        color: `${theme.palette.mode === "dark" ? "white" : "black"}`,
        backgroundColor: `${
          theme.palette.mode === "dark" && colors.primary[400]
        }`,
      },
    },
    headRow: {
      style: {
        color: `${theme.palette.mode === "dark" ? "white" : "black"}`,
        backgroundColor: `${
          theme.palette.mode === "dark" && colors.primary[400]
        }`,
      },
    },
    rows: {
      style: {
        color: `${theme.palette.mode === "dark" ? "white" : "black"}`,
        backgroundColor: `${
          theme.palette.mode === "dark" && colors.primary[400]
        }`,
      },
    },
    pagination: {
      style: {
        color: `${theme.palette.mode === "dark" ? "white" : "black"}`,
        fontSize: "13px",
        minHeight: "56px",
        backgroundColor: `${
          theme.palette.mode === "dark" && colors.primary[400]
        }`,
        borderTopStyle: "solid",
        borderTopWidth: "1px",
      },
      pageButtonsStyle: {
        borderRadius: "50%",
        height: "40px",
        width: "40px",
        padding: "8px",
        margin: "px",
        cursor: "pointer",
        transition: "0.4s",
        color: `${theme.palette.mode === "dark" ? "white" : "black"}`,
        fill: `${theme.palette.mode === "dark" ? "white" : "black"}`,
        backgroundColor: "transparent",
        "&:disabled": {
          cursor: "unset",
          color: `${theme.palette.mode === "dark" ? "white" : "black"}`,
          fill: `${theme.palette.mode === "dark" ? "brown" : "#f4f4f4"}`,
        },
        "&:hover:not(:disabled)": {
          backgroundColor: `gray`,
          fill: `${theme.palette.mode === "dark" ? "white" : "black"}`,
        },
        "&:focus": {
          outline: "none",
          backgroundColor: `${
            theme.palette.mode === "dark" ? "white" : "black"
          }`,
        },
      },
    },
  };

  const columns = [
    {
      sortable: false,
      width: "50px",
      cell: (row, index, column, id) => (
        <Avatar
          alt={row.title}
          src={row.posterUrl}
          sx={{ width: "30px", height: "30px" }}
        />
      ),
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Directior",
      selector: (row) => row.director,
      sortable: true,
    },
    {
      name: "actors",
      selector: (row) => row.actors,
      sortable: true,
    },
    {
      name: "year",
      width: "100px",
      sortable: false,
      cell: (row, index, column, id) => (
        <Chip label={row.year} color="success" variant="outlined" />
      ),
    },
    {
      name: "Runtime (m)",
      selector: (row) => row.runtime,
      sortable: true,
    },
    {
      sortable: false,
      cell: (row, index, column, id) => (
        <div className="flex flex-row justify-center items-center gap-1">
          <Button variant="outlined" color="success">
            <FaPencil />
          </Button>
          <Button variant="outlined" color="error">
            <FaTrash />
          </Button>
        </div>
      ),
    },
  ];
  const isIndeterminate = (indeterminate) => indeterminate;
  const selectableRowsComponentProps = { indeterminate: isIndeterminate };
  return (
    <>
      <DataTable
        columns={columns}
        data={TableData}
        defaultSortField="title"
        sortIcon={<SortIcon />}
        pagination
        selectableRows
        selectableRowsComponent={Checkbox}
        selectableRowsComponentProps={selectableRowsComponentProps}
        customStyles={customStyles}
      />
    </>
  );
}
