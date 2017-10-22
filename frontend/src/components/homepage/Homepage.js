import React, { Component } from 'react';
import {WindowRow, Col, GridFluid, AutoCol, Row} from '../lib/index';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Signin from './signin';
import Signup from './signup';
import Signout from './signout';
import Users from '../user/user';
import FourOhFour from '../404/404';
import './Homepage.scss';
import logo from '../../images/theater.png';


class Homepage extends Component {
    render() {
        return (
          <Router>
            <WindowRow id='main' className="justify-content-center animated slideInLeft">
              <Col xs={10} sm={8} md={6} className='p-5' id='content'>
                <GridFluid>
                  <Row>
                    <GridFluid>
                      <Row>
                        <AutoCol id='name'><img src={logo} className='img-fluid' id='logo' alt=''/> &nbsp; &nbsp; ADMIN BOARD </AutoCol>
                      </Row>
                    </GridFluid>
                    <GridFluid>
                      <Switch>
                        <Route exact path='/' component={Signin}/>
                        <Route path='/signup' component={Signup}/>
                        <Route path='/user' component={Users}/>
                        <Route path='/signout' component={Signout}/>
                        <Route component={FourOhFour}/>
                      </Switch>
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
