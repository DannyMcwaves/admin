import React, { Component } from 'react';
import {Row} from '../lib/index';
import {BrowserRouter as Router} from 'react-router-dom';

export default class FourOhFour extends Component{
  constructor(props) {
    super();
    this.props = props;
  }
  render() {
    return (
      <Router>
        <Row className='animated slideInLeft'>
          <div>there is no much for {this.props.location.pathname}</div>
        </Row>
      </Router>
    )
  }

  componentDidMount() {
    window.$('#main').removeClass('align-items-center');
    // console.log(window.sessionStorage);
  }
}