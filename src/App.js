import React, { Component } from "react";
import UserList from "./containers/UserList";

import "./style.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Username list:</h1>
        <UserList />
        <hr />
        <h1>Use details:</h1>
      </div>
    );
  }
}

export default App;
