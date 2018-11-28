import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import cookie from 'react-cookies';
import { Redirect } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 0,
            isClick: false
        }
    }

    login = (e) => {
        e.preventDefault();
        this.setState({
            isClick: true
        });

        var username = this.refs.username.value;
        var pass = this.refs.password.value;
        var fromData = new FormData();
        fromData.append('username', username);
        fromData.append('password', pass);
        var global = this;
        axios({
            method: 'post',
            url: this.props.SystemInfo.domain + '/login',
            data: fromData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then(function (response) {
                if (response.status === 200) {
                    var authorization = response.headers.authorization
                    var jwt = authorization.substring(7);
                    cookie.save('token', jwt, { path: '/' });

                    global.setState({
                        status: 3,
                        isClick: false
                    });

                    setTimeout(function () {
                        window.location.href = '/dashboard'; 
                    }, 1000)
                }
            })
            .catch(function (error) {
                global.setState({
                    isClick: false
                });

                if (error.response.status === 403) {
                    global.setState({
                        status: 1
                    });
                } else {
                    global.setState({
                        status: 2
                    });
                }
            });
    }

    componentDidMount() {
        document.title = "Đăng nhập vào hệ thống tích hợp nhân viên";
    }

    render() {
        if (this.props.StateApp.isLogin === true) {
            return (
                <Redirect to='/dashboard' />
            );
        } else {
            return (
                <div className="login-form">
                    {
                        this.state.status === 1 ? <div className="scaleUp alert alert-danger" role="alert">Tên tài khoản hoặt mật khẩu không chính sác</div> :
                            (this.state.status === 2 ? <div className="scaleUp alert alert-dark" role="alert">Lổi, vui lòng thử lại sau!.</div> :
                                (this.state.status === 3 && this.state.isClick === false ? <div className="scaleUp alert alert-success" role="alert">
                                    Đăng nhập thành công, đang chuyển hướng...</div> : ''))
                    }
                    <form>
                        <h2 className="text-center">Log in</h2>
                        <div className="form-group">
                            <input ref="username" type="text" className="form-control" placeholder="Username" required="required" />
                        </div>
                        <div className="form-group">
                            <input ref="password" type="password" className="form-control" placeholder="Password" required="required" />
                        </div>
                        <div className="form-group">
                            {
                                this.state.isClick === false ? <button onClick={this.login.bind(this)} className="btn btn-primary btn-block">Log in</button>
                                    : <button className="btn btn-secondary btn-block">Xác thực...</button>
                            }
                        </div>
                    </form>
                </div>
            );
        }
    }
}

export default connect(function (state) {
    return { StateApp: state.StateApp, SystemInfo: state.SystemInfo }
})(Home);