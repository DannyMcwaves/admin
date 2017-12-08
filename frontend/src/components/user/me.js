import React, { Component } from 'react';
import {WindowRow, WindowGridFluid} from '../lib/index';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Me extends Component{
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <WindowGridFluid>
        <WindowRow className='animated slideInLeft'>
          <div id='user'>{this.props.user.username} - {this.props.user.displayName}</div>
          <li style={{display: 'block'}}><Link to='/user/data'>data</Link></li>
        </WindowRow>
      </WindowGridFluid>
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