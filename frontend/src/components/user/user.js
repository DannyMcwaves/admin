import React, { Component } from 'react';
import {Row} from '../lib/index';
import {BrowserRouter as Router, Link} from 'react-router-dom';

export default class Users extends Component{
  render() {
    return (
      <Router>
        <Row className='animated slideInLeft'>
          <div>this is the use page btw</div>
          <Link to='signout'>signout</Link>
        </Row>
      </Router>
    )
  }

  componentDidMount() {
    window.$('#main').removeClass('align-items-center');
    console.log(window.sessionStorage);
  }
}