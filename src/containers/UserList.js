import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { selectUser } from '../actions/index';

class UserList extends Component {



  creacteListItems = () => {
    const { users } = this.props;
    return users.map((user) => {
      return (
        <li
          key={user.id}
          onClick={() => { this.props.selectUser(user) }}
        >
          {user.first} {user.last}</li>
      )
    });
  }
  render() {

    console.log(this.props);
    return (
      <ul>
        {this.creacteListItems()}
      </ul>

    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

// function matchDispatchToProps(dispatch) {
//   return {
//     selectUser: () => { dispatch(selectUser) }
//   }
// }

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectUser }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);
