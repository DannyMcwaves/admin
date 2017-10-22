import React, { Component } from 'react';
import {Col, AutoCol, Row, ClearFix} from '../lib/index';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getDataAndDispatch} from "../../js/actionCreators";

class Signin extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.url = 'https://localhost:8443/api/auth/signin';

    // explicitly bind all methods to this object.
    this.submitForm = this.submitForm.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.socialClick = this.socialClick.bind(this);
  }

  render() {
    return (
      <Row className='animated fadeIn'>
        <AutoCol>
          <form className='form' id='signin'>
            <div className='form-group pb-1 pt-4'>
              <input type='text' ref={(email) => {this.email = email}} onChange={this.passwordChange} onBlur={this.passwordChange} id='usernameOrEmail' name='usernameOrEmail' className='form-control form-control-sm' placeholder='username or email'/>
              <small className='text-danger hide'>valid username/email required</small>
            </div>
            <div className='form-group pt-1 pb-3'>
              <input onChange={this.passwordChange} ref={(password) => {this.password = password}} onBlur={this.passwordChange} id='password' name='password' type='password' className='form-control form-control-sm' placeholder='password'/>
              <small className='text-danger hide'>password required <b>[must be more than 10 digits and contain numbers.]</b></small>
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

  componentDidMount() {
    window.$('#main').addClass('align-items-center');
  }

  passwordChange(e) {
    let value = e.target.value,
      name = e.target.name,
      regex = name === 'usernameOrEmail' ? /[a-zA-Z0-9.]+@[a-zA-Z]+.com?/ : /[a-zA-Z0-9]+/;

    if (!value || !regex.test(value) || (name === 'password' && value.length < 10)) {
      window.$(e.target).next().fadeIn();
      return false
    } else {
      window.$(e.target).next().hide();
      return true
    }
  }

  submitForm(e) {
    e.preventDefault();
    let data = window.$('#signin').serializeArray(),
      _this = this,
      pass = this.passwordChange({target: _this.password}),
      email = this.passwordChange({target: _this.email});
    if (pass && email) {
      _this.props.dispatch(getDataAndDispatch(window.$, _this.url, data, _this.props.history));
    }
  }

  socialClick(e) {
    e.preventDefault();
    let href = e.target.href || window.$(e.target).parent().attr('href');
    window.$.get(href).done(data =>{
      console.log(data);
    }).fail(err => {
      console.log(err);
    })
  }

}

export default connect()(Signin);
