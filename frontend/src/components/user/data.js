import React, { Component } from 'react';
import {Row} from '../lib/index';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Data extends Component{
  constructor(props) {
    super();
    this.props = props;
  }
  render() {
    return (
      <Row className='animated slideInLeft'>
        <div>this is user and all the data gathered for this user.</div>
        <li><Link to='/user/'>data</Link></li>
      </Row>
    )
  }

  componentDidMount() {
    window.$('#main').removeClass('align-items-center');
  }
}

export default connect()(Data);
