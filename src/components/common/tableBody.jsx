import _ from "lodash";
import React, { Component } from "react";
const createKey = (item, column) => {
  return item._id + (column.path || column.key);
};
const renderCell = (item, column) => {
  if (column.content) return column.content(item);

  return _.get(item, column.path);
};

const TableBody = (props) => {
  const { customers: data, columns } = props;
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          {columns.map((column) => (
            <td key={createKey(item, column)}>{renderCell(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
