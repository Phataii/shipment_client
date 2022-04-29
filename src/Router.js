import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./test/app";

import Index from "./components/main/index";
import Dashboard from "./components/main/dashboard";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Transactions from "./components/pages/Transactions.jsx";
import History from "./components/pages/history";
import TransactionsForm from "./components/pages/withdraw";
import Messages from "./components/pages/messages";
import Deposit from "./components/pages/deposit";
import Chart from "./components/pages/chart";
import Help from "./components/pages/help";
import AuthContext from "./context/AuthContext";
import Search from "./components/pages/search";
import { EditTransaction } from "./components/pages/editTransaction";
import Navbar from "./components/layout/Navbar";

function Router() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/search">
          <Search />
        </Route>

        {!loggedIn && (
          <>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </>
        )}
        {loggedIn && (
          <>
            <Route exact path="/transaction">
              <Navbar/>
              <Transactions />
            </Route>
            <Route path="/etherpay">
              <App />
            </Route>
            <Route exact path="/history">
            <Navbar/>
              <History />
            </Route>
            <Route exact path="/withdraw">
              <TransactionsForm />
            </Route>
            <Route exact path="/deposit">
              <Deposit />
            </Route>
            <Route exact path="/chart">
              <Chart />
            </Route>
            <Route exact path="/transaction/:id/edit">
              <EditTransaction />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/help">
              <Help />
            </Route>
            <Route exact path="/messages">
              <Messages />
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
