import React, { Component } from "react";
import Table from "./common/table";
class CustomersTable extends Component {
  columns = [
    {
      path: "bankDetail.bankName",
      label: "نام بانک",
      content: (customer) => customer.bankDetail.bankName,
    },
    { path: "family", label: "نام خانوادگی" },
    { path: "name", label: "نام" },
    {
      key: "delete",
      content: (customer) => (
        <button
          onClick={() => this.props.onDelete(customer)}
          className="btn btn-danger btn-sm"
        >
          حذف
        </button>
      ),
    },
  ];
  render() {
    const { customers, onSort, sortColumn, onDelete } = this.props;
    return (
      <Table
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
        customers={customers}
        onDelete={(item) => onDelete(item)}
      />
      // <table className="table">
      //   <TableHeader
      //     columns={this.columns}
      //     sortColumn={sortColumn}
      //     onSort={onSort}
      //   />
      //   <TableBody
      //     customers={customers}
      //     onDelete={(item) => onDelete(item)}
      //     columns={this.columns}
      //   />
      // </table>
    );
  }
}

export default CustomersTable;
