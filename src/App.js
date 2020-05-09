import React, {Component} from 'react';
import './App.css';
import HomePage from "./containers/HomePage/HomePage";

class App extends Component {
    state = {
        data: null
    };

    componentDidMount() {
        this.callBackendAPI();
    }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
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

  render () {
      return (
        <div className="App">
            <HomePage/>
        </div>
      );
  }
}

export default App;
