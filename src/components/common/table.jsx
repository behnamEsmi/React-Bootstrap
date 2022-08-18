import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns, sortColumn, onSort, customers, onDelete }) => {
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody
        customers={customers}
        onDelete={(item) => onDelete(item)}
        columns={columns}
      />
    </table>
  );
};

export default Table;
