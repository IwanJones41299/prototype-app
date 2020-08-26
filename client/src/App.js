import React from "react";
import Navbar from './Components/Navbar';
import Login from "./Components/Login";
import Home from "./Components/Home";
import Todos from './Components/Todos';
import Register from "./Components/Register";
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Route exact path = "/" component={Home} />
      <Route path = "/login" component={Login} />
      <Route path = "/register" component={Register} />
      <Route path = "/todos" component={Todos} />
    </Router>
  );
}

export default App;
