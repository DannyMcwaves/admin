import React, { Component } from 'react';
import {dispatchSignout} from "../../js/actionCreators";
import {connect} from 'react-redux';

class Signout extends Component{
  constructor(props) {
    super();
    this.props = props;
    this.url = '/api/auth/signout'
  }

  render() {
    return null
  }

  componentDidMount(){
    console.log('mounted signout');
    console.log(this.props);
    this.props.dispatch(dispatchSignout(window.$, this.url, this.props.history));
    this.props.history.push('/');
  }
}

export default connect()(Signout)
