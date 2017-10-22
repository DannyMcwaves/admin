import React, { Component } from 'react';
import {Row} from '../lib/index';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Me from './me';
import Data from './data';
import './user.scss';

class Users extends Component{
  render() {
    return (
        <Row className='animated slideInLeft'>
          <Route exact path='/user/' component={Me}/>
          <Route exact path='/user/data' component={Data}/>
        </Row>
    )
  }

  componentDidMount() {
    window.$('#main').removeClass('align-items-center');
  }
}

export default connect()(Users);