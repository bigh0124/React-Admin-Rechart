import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
import React from "react";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = ({ slug, columns, setOpen }: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>
          X
        </span>
        <h1>Add new {slug}</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          {columns
            .filter((column) => column.field !== "id" && column.field !== "avatar")
            .map((column) => {
              return (
                <div className="item" key={column.field}>
                  <label>{column.headerName}</label>
                  <input type={column.type} placeholder={column.field} />
                </div>
              );
            })}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
