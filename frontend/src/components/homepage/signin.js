import React, { Component } from 'react';
import {Col, AutoCol, Row, ClearFix} from '../lib/index';
import {Link} from 'react-router-dom';
import {postDataToServer} from "./utils";

export default class Signin extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.url = '/api/auth/signin';

    // explicitly bind all methods to this object.
    this.submitForm = this.submitForm.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
  }

  render() {
    return (
      <Row className='animated fadeIn'>
        <AutoCol>
          <form className='form' id='signin'>
            <div className='form-group pb-1 pt-4'>
              <input type='text' onChange={this.passwordChange} onBlur={this.passwordChange} id='usernameOrEmail' name='usernameOrEmail' className='form-control form-control-sm' placeholder='username or email'/>
              <small className='text-danger hide'>user/email required</small>
            </div>
            <div className='form-group pt-1 pb-3'>
              <input onChange={this.passwordChange} onBlur={this.passwordChange} id='password' name='password' type='password' className='form-control form-control-sm' placeholder='password'/>
              <small className='text-danger hide'>password required</small>
            </div>
            <Row className='form-group'>
              <Col xs={3} sm={4}>
                <button onClick={this.submitForm} className='btn btn-secondary text-white btn-sm pl-2 pr-2'> sign in </button>
              </Col>
              <ClearFix hide='sm'/>
              <Col xs={9} sm={8} className='social text-right'>
                <a href='/api/auth/facebook' title='signin with facebook'><i className='fa fa-facebook-official'/></a>
                <a href='/api/auth/google' title='signin with google' className='text-danger'><i className='fa fa-google-plus-square'/></a>
                <a href='/api/auth/twitter' title='signin with twitter' className='text-twitter'><i className='fa fa-twitter-square'/></a>
                <Link to='/signup' title='sign up' className='text-dark'><i className='fa fa-user-plus'/></Link>
              </Col>
            </Row>
          </form>
        </AutoCol>
      </Row>
    )
  }

  passwordChange(e) {
    let value = e.target.value,
      name = e.target.name;
    console.log(name);
    if (!value) {
      window.$(e.target).next().fadeIn();
    } else {
      window.$(e.target).next().hide();
    }
  }

  submitForm(e) {
    e.preventDefault();
    let data = window.$('#signin').serializeArray(),
      _this = this;
    console.log(data);
  }
}