import React, { Component } from 'react';
import {Row} from '../lib/index';
import {BrowserRouter as Router} from 'react-router-dom';

export default class Users extends Component{
  render() {
    return (
      <Router>
        <Row className='animated slideInLeft'>
          <div>this is the use page btw</div>
        </Row>
      </Router>
    )
  }

  componentDidMount() {
    window.$('#main').removeClass('align-items-center');
  }
}