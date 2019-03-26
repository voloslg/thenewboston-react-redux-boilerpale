import React, { Component } from "react";
import { connect } from "react-redux";

class UserList extends Component {
  render() {
    console.log("App users", this.props.users);

    return (
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(mapStateToProps)(UserList);
