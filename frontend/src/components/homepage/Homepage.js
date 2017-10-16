import React, { Component } from 'react';
import {WindowRow, Col, GridFluid, AutoCol, Row} from '../lib/index';
import Signin from './signin';
import Signup from './signup';
import './Homepage.scss';
import logo from '../../images/theater.png';
import {BrowserRouter as Router, Route} from 'react-router-dom';


class Homepage extends Component {
    render() {
        return (
          <Router>
            <WindowRow className="align-items-center justify-content-center animated slideInLeft">
              <Col xs={10} sm={8} md={6} className='p-5' id='content'>
                <GridFluid>
                  <Row>
                    <GridFluid>
                      <Row>
                        <AutoCol id='name'><img src={logo} className='img-fluid' id='logo' alt=''/> &nbsp; &nbsp; ADMIN BOARD </AutoCol>
                      </Row>
                    </GridFluid>
                    <GridFluid>
                      <Route exact path='/' component={Signin}/>
                      <Route path='/signup' component={Signup}/>
                    </GridFluid>
                  </Row>
                </GridFluid>
              </Col>
            </WindowRow>
          </Router>
        )
    }
}

export default Homepage;
