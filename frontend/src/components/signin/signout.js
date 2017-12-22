import React, { Component } from 'react';
import {dispatchSignout} from "../../js/actionCreators";
import {connect} from 'react-redux';
// import {Redirect} from 'react-router-dom';

class Signout extends Component{
  constructor(props) {
    super();
    this.props = props;
    this.url = 'https://localhost:8443/api/auth/signout';
    this.state = {type: false}
  }

  render() {
    return null;
  }

  componentDidMount(){
    this.props.dispatch(dispatchSignout(window.$, this.url, this.props.history));
  }
}

export default connect()(Signout)
