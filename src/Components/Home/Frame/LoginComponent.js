import React, { Component } from 'react';
import { connect } from 'react-redux';
import cookie from 'react-cookies';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'toggleUserFunction': false
        };
    }
    toggleUserFunction = () => {
        this.setState({
            'toggleUserFunction': !this.state.toggleUserFunction
        });
    }

    displayCSS = () => {
        if (this.state.toggleUserFunction === false)
            return "none";
        else
            return "block";
    }

    logOutUser = () => {
        cookie.remove('token', { path: '/' });
        window.location.href = '/';
        alert('Logout successfully.');
    }

    render() {
        return (
            <div id="pg_id_avatar_function">
                <button onClick={this.toggleUserFunction.bind()} className="none_button"><img src={this.props.SystemInfo.client + "/avt.png"} alt="" height="32px" width="32px;" /></button>
                <div className="pg_class_avatar_block_function" style={{ 'display': this.displayCSS() }}> {/* {this.props.displayCSS} */}
                    <div className="pg_header_func_info_user">
                        <a href="/">
                            <div className="pg_header_info_user_left">
                                <img src={this.props.SystemInfo.client + "/avt.png"} alt="avatar" />
                            </div>
                            <div className="pg_header_info_user_right">
                                <span>{this.props.StateApp.username}</span>
                                <span>{this.props.StateApp.fullname}</span>
                            </div>
                        </a>
                    </div>

                    <div className="pg_header_list_func"><a href="/">Thông tin cá nhân</a></div>
                    <div className="pg_header_list_func"><button onClick={this.logOutUser.bind()} className="btn btn-link">Đăng xuất</button></div>

                </div>
            </div>
        );
    }
}

export default connect(function (state) {
    return {
        SystemInfo: state.SystemInfo,
        StateApp: state.StateApp
    }
})(LoginComponent);