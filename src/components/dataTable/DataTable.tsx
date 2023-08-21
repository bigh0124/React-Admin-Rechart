import "./dataTable.scss";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

type Props = {
  row: object[];
  columns: GridColDef[];
  slug: string;
};

const DataTable = ({ row, columns, slug }: Props) => {
  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 90,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${slug}/${params.row.id}`} className="view">
            <img src="/view.svg" />
          </Link>
          <div className="delete">
            <img src="/delete.svg" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={row}
          columns={[...columns, actionColumn]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          className="dataGrid"
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          pageSizeOptions={[10]}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
        />
      </Box>
    </div>
  );
};

export default DataTable;
