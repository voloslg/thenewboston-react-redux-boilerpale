import React, { Component } from "react";
import { connect } from "react-redux";

class UserDetail extends Component {
  render() {
    console.log("UserDetail", this.props);
    if (!this.props.activeUser) {
      return <div>Selec a user...</div>;
    }
    return (
      <div>
        <img src={this.props.activeUser.thumbnail} alt="thumbnail" />
        <h1>{this.props.activeUser.first}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { activeUser: state.activeUser };
}

export default connect(mapStateToProps)(UserDetail);
