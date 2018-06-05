import React, { Component } from 'react';
import { connect } from 'react-redux';
import {signOutAction} from '../../actions/index';

class Signout extends Component {
  componentWillMount() {
    this.props.signOutAction();
  }

  render() {
    return <div className="content">We hope to see you again soon...</div>
  }
}

export default connect(null, {signOutAction})(Signout);