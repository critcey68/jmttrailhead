import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import PackingListPage from "./containers/PackingListPage/PackingListPage";
import HomePage from "./containers/HomePage/HomePage";

const App = () => {
  return (
      <Router>
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/packing" component={PackingListPage} />
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
