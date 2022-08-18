import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";

class TableHeader extends Component {
  raiseSort = (path) => {
    const srtColumn = { ...this.props.sortColumn };
    if (srtColumn.path === path)
      srtColumn.order = srtColumn.order === "asc" ? "desc" : "asc";
    else {
      srtColumn.path = path;
      srtColumn.order = "asc";
    }
    this.props.onSort(srtColumn);
  };
  renderSortIcon = (column) => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort-desc" />;
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              className="clickable"
              key={column.path || column.key}
              onClick={() => {
                this.raiseSort(column.path);
              }}
            >
              {column.label}
              {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}
export default TableHeader;
