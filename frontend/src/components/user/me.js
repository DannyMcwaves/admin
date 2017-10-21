import React, { Component } from 'react';
import {Row} from '../lib/index';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Me extends Component{
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <Row className='animated slideInLeft'>
        <div id='user'>{this.props.user.username} - {this.props.user.displayName}</div>

        <li style={{display: 'block'}}><Link to='/user/data'>data</Link></li>
      </Row>
    )
  }

  componentDidMount() {
    // window.$('#main').removeClass('align-items-center');
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

export default connect(mapStateToProps)(Me);