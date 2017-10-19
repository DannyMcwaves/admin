import React, { Component } from 'react';
import {Col, AutoCol, Row, ClearFix} from '../lib/index';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getDataAndDispatch} from "../../js/actionCreators";

class Signup extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.url = '/api/auth/signup';

    // bind all event methods explicitly
    this.submitForm = this.submitForm.bind(this);
    this.verifyPasswordChange = this.verifyPasswordChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.nameChange = this.nameChange.bind(this);
  }

  render() {
    return (
      <Row className='animated fadeIn'>
        <AutoCol>
          <form className='form' id='signup'>
            <div className='form-group pb-1 pt-4'>
              <input type='text' onChange={this.nameChange} onBlur={this.nameChange} id='firstName' name='firstName' className='form-control form-control-sm' placeholder='first name'/>
              <small className='text-danger hide'>first name required</small>
            </div>
            <div className='form-group pb-1 pt-2'>
              <input onChange={this.nameChange} onBlur={this.nameChange} type='text' id='lastName' name='lastName' className='form-control form-control-sm' placeholder='last name'/>
              <small className='text-danger hide'>last name required</small>
            </div>
            <div className='form-group pb-1 pt-2'>
              <input onChange={this.nameChange} onBlur={this.nameChange} type='text' id='username' name='username' className='form-control form-control-sm' placeholder='user name'/>
              <small className='text-danger hide'>username required</small>
            </div>
            <div className='form-group pb-1 pt-2'>
              <input onChange={this.emailChange} onBlur={this.emailChange} type='text' id='email' name='email' className='form-control form-control-sm' placeholder='email'/>
              <small className='text-danger hide'>valid email required</small>
            </div>
            <div className='form-group pt-2 pb-1'>
              <input onChange={this.passwordChange} onBlur={this.passwordChange} id='password' name='password' type='password' className='form-control form-control-sm' placeholder='password'/>
              <small className='text-danger hide'>password required <b> [must be more than 10 digits and contain numbers.]</b> </small>
            </div>
            <div className='form-group pt-2 pb-3'>
              <input onChange={this.verifyPasswordChange} onBlur={this.verifyPasswordChange} id='confirmPassword' name='confirmPassword' type='password' className='form-control form-control-sm' placeholder='confirm password'/>
              <small className='text-danger hide'>verification password incorrect/required</small>
            </div>
            <Row className='form-group'>
              <Col xs={3} sm={4}>
                <button onClick={this.submitForm} className='btn btn-secondary text-white btn-sm pl-2 pr-2'> sign up </button>
              </Col>
              <ClearFix hide='sm-up'/>
              <Col xs={9} sm={8} className='social text-right'>
                <a href='/api/auth/facebook' title='signup with facebook'><i className='fa fa-facebook-official'/></a>
                <a href='/api/auth/google' className='text-danger' title='signup with google'><i className='fa fa-google-plus-square'/></a>
                <a href='/api/auth/twitter' className='text-twitter' title='signup with twitter'><i className='fa fa-twitter-square'/></a>
                <Link to='/' className='text-dark' title='signin'><i className='fa fa-user-o'/></Link>
              </Col>
            </Row>
          </form>
        </AutoCol>
      </Row>
    )
  }

  submitForm(e) {
    e.preventDefault();
    let data = window.$('#signup').serializeArray(),
      _this = this,
      firstname = this.nameChange({target: window.$('#firstName')[0]}),
      lastname = this.nameChange({target: window.$('#lastName')[0]}),
      username = this.nameChange({target: window.$('#username')[0]}),
      email = this.emailChange({target: window.$('#signup #email')[0]}),
      password = this.passwordChange({target: window.$('#signup #password')[0]}),
      vpassword = this.passwordChange({target: window.$('#signup #confirmPassword')[0]});
    if (firstname && lastname && username && email && password && vpassword) {
      _this.props.dispatch(getDataAndDispatch(window.$, _this.url, data, _this.props.history));
    }

  }

  nameChange(e) {
    let value = e.target.value;
    if (!value) {
      window.$(e.target).next().fadeIn();
      return false;
    } else {
      window.$(e.target).next().hide();
      return true;
    }
  }

  emailChange(e) {
    let value = e.target.value,
      regex = /[a-zA-Z0-9.]+@[a-zA-Z]+.com?/;

    if (!value || !regex.test(value)) {
      window.$(e.target).next().fadeIn();
      return false;
    } else {
      window.$(e.target).next().hide();
      return true;
    }
  }

  passwordChange(e) {
    let value = e.target.value,
      regex = /[a-zA-Z0-9]+/;

    if (!value || !regex.test(value) || value.length < 10) {
      window.$(e.target).next().fadeIn();
      return false
    } else {
      window.$(e.target).next().hide();
      return true
    }
  }

  verifyPasswordChange(e) {
    let value = e.target.value,
      pvalue = window.$('#signup #password').val();

    if (value !== pvalue) {
      window.$(e.target).next().fadeIn();
      return false
    } else {
      window.$(e.target).next().hide();
      return true
    }
  }

  componentDidMount() {
    window.$('#main').addClass('align-items-center');
  }

}

export default connect()(Signup);
