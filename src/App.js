import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { Alert } from "./components/Alert";
import { AlertState } from "./context/alert/AlertState";
import { FireBaseState } from "./context/fireBase/FireBaseState";

function App() {
  return (
    <FireBaseState>
      <AlertState>
        <Navbar />
        <div className="container pt-4">
          <Alert />
          <Switch>
            <Route path="/notes-app" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Redirect to="/notes-app" />
          </Switch>
        </div>
      </AlertState>
    </FireBaseState>
  );
}

export default App;
