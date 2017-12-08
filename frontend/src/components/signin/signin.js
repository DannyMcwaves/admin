import React, { Component } from 'react';
import {Col, AutoCol, WindowRow, GridFluid} from '../lib/index';
import {connect} from 'react-redux';
import {getDataAndDispatch} from "../../js/actionCreators";
import './sigin.scss';

class Signin extends Component {

  constructor(props) {
    super();
    this.props = props;
    this.url = 'https://0.0.0.0:8443/api/auth/signin';

    // explicitly bind all methods to this object.
    this.submitForm = this.submitForm.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
  }

  render() {
    return (
      <WindowRow id='main' className="justify-content-end animated slideInRight">
        <Col xs={12} sm={8} md={5} id='content'>
          <GridFluid>
            <WindowRow className='align-items-center'>
              <AutoCol>
                <form className='form' id='signin'>
                  <div className='form-group pb-1 pt-4'>
                    <input type='text' ref={(email) => {this.email = email}} onChange={this.passwordChange} onBlur={this.passwordChange} id='usernameOrEmail' name='usernameOrEmail' className='form-control form-control-sm' placeholder='username or email'/>
                  </div>
                  <div className='form-group pt-1 pb-3'>
                    <input onChange={this.passwordChange} ref={(password) => {this.password = password}} onBlur={this.passwordChange} id='password' name='password' type='password' className='form-control form-control-sm' placeholder='password'/>
                  </div>
                  <button onClick={this.submitForm} className='btn btn-secondary text-white btn-sm btn-danger'> sign in </button>
                </form>
              </AutoCol>
            </WindowRow>
          </GridFluid>
        </Col>
      </WindowRow>
    )
  }

  passwordChange(e) {
    let value = e.target.value,
      name = e.target.name,
      regex = name === 'usernameOrEmail' ? /[a-zA-Z0-9.]+@[a-zA-Z]+.com?/ : /[a-zA-Z0-9]+/;

    if (!value || !regex.test(value) || (name === 'password' && value.length < 10)) {
      window.$(e.target).addClass('error').removeClass('no-error');
      return false
    } else {
      window.$(e.target).removeClass('error').addClass('no-error');
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

}

export default connect()(Signin);
