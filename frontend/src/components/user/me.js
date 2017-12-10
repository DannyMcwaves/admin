import React, { Component } from 'react';
import {WindowRow, WindowGrid, AutoCol, WindowGridFluid, Col} from '../lib/index';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Me extends Component{
  constructor(props) {
    super();
    this.props = props;
    this.user = this.props.user;
  }

  render() {
    return (
      <WindowGridFluid id='mypage'>
        <WindowRow className='animated slideInLeft'>
          <AutoCol>
            <WindowGrid>
              <WindowRow className='align-items-center' id='mydata'>
                <Col xs={12} sm={4}>
                  <img src={'https://0.0.0.0:8443'+this.user.profileImageURL} />
                </Col>
                <Col xs={12} sm={8}>
                  
                </Col>
              </WindowRow>
            </WindowGrid>
          </AutoCol>
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