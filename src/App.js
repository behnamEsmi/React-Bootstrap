import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Customers from "./components/customers";
import BanksName from "./components/banksName";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import "./App.css";
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/BanksName" component={BanksName}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/notfound" component={NotFound}></Route>
          <Redirect from="/" exact to="/customers" />
          <Redirect to="/notfound" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
