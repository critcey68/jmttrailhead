import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ReducerPracticePage from "./containers/ReducerPracticePage/ReducerPracticePage";
import PackingListPage from "./containers/PackingListPage/PackingListPage";

const App = () => {
    const state = {
        data: null
    };

//     componentDidMount() {
//         this.callBackendAPI();
//     }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    const callBackendAPI = async () => {
        try {
            const response = await fetch('/express_backend');
            const body = await response.json();
            console.log(body);
            this.setState({ data: body.express });
        } catch(err) {
            throw Error(err)
        }
        return;
    };

  return (
      <Router>
        <div>
            <Switch>
                <Route exact path="/" component={ReducerPracticePage} />
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
