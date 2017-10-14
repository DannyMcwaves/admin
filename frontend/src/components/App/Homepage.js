import React, { Component } from 'react';
import {WindowRow, Col, GridFluid, AutoCol, Row, ClearFix} from '../lib/index';
import './Homepage.scss';
import logo from '../../images/theater.png';

class Homepage extends Component {
    render() {
        return (
            <WindowRow className="align-items-center justify-content-center">
              <Col xs={10} sm={8} md={6} className='p-5' id='content'>
                <GridFluid>
                  <Row>
                    <GridFluid>
                      <Row>
                        <AutoCol id='name'><img src={logo} className='img-fluid' id='logo' alt=''/> &nbsp; &nbsp; ADMIN BOARD </AutoCol>
                      </Row>
                    </GridFluid>
                    <GridFluid>
                      <Row>
                        <AutoCol>
                          <form className='form'>
                            <div className='form-group pb-1 pt-4'>
                              <input type='text' id='usernameOrEmail' name='usernameOrEmail' className='form-control form-control-sm' placeholder='username or email'/>
                            </div>
                            <div className='form-group pt-1 pb-3'>
                              <input id='password' name='password' type='password' className='form-control form-control-sm' placeholder='password'/>
                            </div>
                            <Row className='form-group'>
                              <Col xs={3} sm={4}>
                                <button className='btn btn-secondary text-white btn-sm pl-2 pr-2'> submit </button>
                              </Col>
                              <ClearFix hide='sm'/>
                              <Col xs={9} sm={8} className='social text-right'>
                                <a href='/api/auth/facebook'><i className='fa fa-facebook-official'/></a>
                                <a href='/api/auth/google' className='text-danger'><i className='fa fa-google-plus-official'/></a>
                                <a href='/api/auth/twitter' className='text-twitter'><i className='fa fa-twitter-square'/></a>
                              </Col>
                            </Row>
                          </form>
                        </AutoCol>
                      </Row>
                    </GridFluid>
                  </Row>
                </GridFluid>
              </Col>
            </WindowRow>
        )
    }
}

export default Homepage;
