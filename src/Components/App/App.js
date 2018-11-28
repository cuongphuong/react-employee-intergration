import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from '../AppRouter/AppRouter';
import { connect } from 'react-redux';
import axios from 'axios';
import cookie from 'react-cookies';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoad: false
    }
  }

  componentWillMount() {
    var jwtFromCookie = cookie.load('token');
    if (jwtFromCookie !== undefined && jwtFromCookie !== null && jwtFromCookie.length > 40) {
      this.setState({ isLoad: true })
      this.checkLogin(jwtFromCookie);
    }
  }

  checkLogin(jwtFromCookie) {
    var { dispatch } = this.props;
    var global = this;
    axios({
      method: 'get',
      url: this.props.SystemInfo.domain + '/home/check',
      headers: {
        Authorization: 'Bearer ' + jwtFromCookie
      }
    })
      .then(function (response) {
        if (response.status === 200) {
          var data = response.data;
          let info = {
            isLogin: true,
            token: jwtFromCookie,
            username: data.userName,
            fullname: data.fullName,
            userID: data.userID
          }

          dispatch({
            type: 'ADD_INFO_APP',
            item: info
          });

          global.setState({ isLoad: false })
        } else if (response.status === 500) {
          alert('Phiên đăng nhập hết hạn');
          cookie.remove('token', { path: '/' });
        } else {
          alert('Xảy ra lổi khi kiểm tra phiên đăng nhập');
        }
      })
      .catch(error => {
        console.log(error);
        setTimeout(function () {
          window.location.href = '/';
        }, 10000);
      });
  }

  render() {
    return (
      <Router>
        {this.state.isLoad === false ? <AppRouter></AppRouter> : <div>Vui lòng chờ xác thực...</div>}
        {/* <AppRouter></AppRouter> */}
      </Router>
    );
  }
}

export default connect(function (state) {
  return { StateApp: state.StateApp, SystemInfo: state.SystemInfo }
})(App);
