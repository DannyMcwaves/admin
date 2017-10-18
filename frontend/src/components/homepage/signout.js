import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

export default class Signout extends Component{
  constructor(props) {
    super();
    this.props = props;
  }
  render() {
    return (
      <Redirect to={{ pathname: '/', state: { from: this.props.location } }}/>
    )
  }
}