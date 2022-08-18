import React, { Component, useDebugValue, useEffect, useState } from "react";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import { paginate } from "../utils/paginate";
import { getCustomers } from "../services/fakeCustomers";
import { getBanksName } from "../services/fakeBankName";
import CustomersTable from "./customersTable";
import _ from "lodash";

const Customers = (props) => {
  let [customers, setCustomers] = useState([]);
  let [banksName, setBanksName] = useState([]);
  let [selectedBank, setSelectedBank] = useState({ _id: null, bankName: null });
  const [pageSize, setpageSize] = useState(4);
  const [currentPage, setcurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState({ path: "", order: "" });
  //useEffect for banksName
  useEffect((e) => {
    setBanksName(getBanksName());
  }, []);
  //useEffect for customers
  useEffect((e) => {
    setCustomers(getCustomers());
  }, []);
  const getPagedData = () => {
    const filtered =
      selectedBank._id && selectedBank._id !== 0
        ? customers.filter((item) => item.bankDetail._id === selectedBank._id)
        : customers;
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const paginatedCustoemrs = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: paginatedCustoemrs };
  };

  const handleDelete = (customer) => {
    const allCustomers = [...customers];
    setCustomers(allCustomers.filter((item) => item._id !== customer._id));
  };
  const handleSort = (sortColumn) => {
    setSortColumn(sortColumn);
  };
  const handleBankSelect = (bank) => {
    setSelectedBank(bank);
    setcurrentPage(1);
  };
  const handlePageChange = (page) => {
    setcurrentPage(page);
  };
  const { totalCount, data } = getPagedData();
  return totalCount === 0 ? (
    <p>there are no customers to show</p>
  ) : (
    <div className="row">
      <div className="col-2">
        <ListGroup
          selectedItem={selectedBank}
          items={banksName}
          onItemSelect={handleBankSelect}
        />
      </div>
      <div className="col">
        <p>showing {totalCount} customers</p>
        <CustomersTable
          sortColumn={sortColumn}
          customers={data}
          onDelete={(e) => handleDelete(e)}
          onSort={(e) => handleSort(e)}
        />
        <Pagination
          customersCount={totalCount}
          pageSize={pageSize}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Customers;
