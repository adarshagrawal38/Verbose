import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ResponsiveDrawer from "./Componets/drawer";
import LogIn from "./Componets/login";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AddItems from "./Componets/addItems";
import Orders from "./Componets/orders";
import PastOrders from "./Componets/PastOrders";
import Offers from "./Componets/offers";
import Register from "./Componets/register";

//<Route path="/" component={ResponsiveDrawer}></Route>

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/dashboard" component={ResponsiveDrawer}></Route>
        <Route path="/login" component={LogIn}></Route>
        <Route path="/addItems" component={AddItems}></Route>
        <Route path="/orders" component={Orders}></Route>
        <Route path="/past_orders" component={PastOrders}></Route>
        <Route path="/offers" component={Offers}></Route>
        <Route path="/logout" component={LogIn}></Route>
        <Route path="/register" component={Register}></Route>
        <Redirect to="/dashboard" />
      </Switch>
    </div>
  );
}

export default App;
