import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home/HomePage";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import { getFromLocalStorage } from "./helper/storage";
import { either, isEmpty, isNil } from "ramda";
import PrivateRoute from "./components/Common/PrivateRoute";
function App() {
   const authToken = getFromLocalStorage("authToken");
   const isLoggedIn =
     !either(isNil, isEmpty)(authToken) && authToken !== "null";
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute
          component={UserDashboard}
          condition={isLoggedIn}
          path="/user/dashboard"
          redirectRoute="/login"
        />
        <PrivateRoute
          component={AdminDashboard}
          condition={isLoggedIn}
          path="/admin/dashboard"
          redirectRoute="/login"
        />
      </Switch>
    </Router>
  );
}

export default App;
