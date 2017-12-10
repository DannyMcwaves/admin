import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Signin from '../signin/signin';
import Signout from '../signin/signout';
import Users from '../user/user';
import FourOhFour from '../404/404';
import './Homepage.scss';


class Homepage extends Component {
    render() {
        return (
          <Router>
            <div id='homepage'>
              <Switch>
                <Route exact path='/' component={Signin}/>
                <Route path='/user' component={Users}/>
                <Route path='/signout' component={Signout}/>
                <Route component={FourOhFour}/>
              </Switch>
            </div>
          </Router>
        )
    }
}

export default Homepage;
