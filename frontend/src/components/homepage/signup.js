import React, { Component } from 'react';
import {Col, AutoCol, Row, ClearFix} from '../lib/index';
import {Link} from 'react-router-dom';


export default class Signup extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.url = '/api/auth/signup';

    // bind all event methods explicitly
    this.submitForm = this.submitForm.bind(this);
  }

  render() {
    return (
      <Row className='animated fadeIn'>
        <AutoCol>
          <form className='form' id='signup'>
            <div className='form-group pb-1 pt-4'>
              <input type='text' id='firstName' name='firstName' className='form-control form-control-sm' placeholder='first name'/>
            </div>
            <div className='form-group pb-1 pt-2'>
              <input type='text' id='lastName' name='lastName' className='form-control form-control-sm' placeholder='last name'/>
            </div>
            <div className='form-group pb-1 pt-2'>
              <input type='text' id='email' name='email' className='form-control form-control-sm' placeholder='email'/>
            </div>
            <div className='form-group pb-1 pt-2'>
              <input type='text' id='username' name='username' className='form-control form-control-sm' placeholder='user name'/>
            </div>
            <div className='form-group pt-2 pb-1'>
              <input id='password' name='password' type='password' className='form-control form-control-sm' placeholder='password'/>
            </div>
            <div className='form-group pt-2 pb-3'>
              <input id='confirmPassword' name='confirmPassword' type='password' className='form-control form-control-sm' placeholder='confirm password'/>
            </div>
            <Row className='form-group'>
              <Col xs={3} sm={4}>
                <button className='btn btn-secondary text-white btn-sm pl-2 pr-2'> sign up </button>
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
    console.log(this);
  }
}