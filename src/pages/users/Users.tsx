import DataTable from "../../components/dataTable/DataTable";
import "./users.scss";
import { userRows } from "../../data";
import { GridColDef } from "@mui/x-data-grid";
import Add from "../../components/add/Add";
import { useState } from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "avatar",
    headerName: "AVATAR",
    width: 90,
    renderCell: (params) => {
      return <img src={params.row.img || "/nonavatar.png"} className="avatar" />;
    },
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
    type: "string",
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
    type: "string",
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
    editable: true,
    type: "email",
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 150,
    editable: true,
    type: "string",
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    editable: false,
  },
  {
    field: "verified",
    headerName: "verified",
    width: 150,
    type: "boolean",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <DataTable row={userRows} columns={columns} slug="users" />
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
