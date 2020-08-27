import React from "react";
import Navbar from './Components/Navbar';
import Login from "./Components/Login";
import Home from "./Components/Home";
import Todos from './Components/Todos';
import Register from './Components/Register';
import Admin from './Components/Admin';
import Dashboard from './Components/Dashboard';
import PrivateRoute from './hocs/PrivateRoute';
import UnPrivateRoute from './hocs/UnprivateRoute';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Route exact path = "/" component={Home} />
      <UnPrivateRoute path = "/login" component={Login} />
      <UnPrivateRoute path = "/register" component={Register} />
      <PrivateRoute path = "/todos" roles={["user", "admin"]} component={Todos} />
      <PrivateRoute path = "/admin" roles={["admin"]} component={Admin} />
      <PrivateRoute path = "/dashboard" roles={["user"]} component={Dashboard} />
    </Router>
  );
}

export default App;
