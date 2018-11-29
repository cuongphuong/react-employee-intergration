import React, { Component } from 'react';
import './Register.css';
import axios from 'axios';
import { connect } from 'react-redux';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                txtfullName: '',
                txtuserName: '',
                password: '',
                enable: ''
            },
            roles: '',
            getRoles: []
        }
    }

    componentDidMount() {
        axios({
            url: this.props.SystemInfo.domain + '/users/get-all-role',
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + this.props.StateApp.token,
            }
        }).then(res => {
            this.setState({ getRoles: res.data });
        }).catch(err => {
            console.log(err)
        });
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            user: {
                [name]: value
            }
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // for (const checkbox of this.selectedCheckboxes) {
        //     console.log(checkbox, 'is selected.');
        // }

        // var { fullName, userName, password, enable } = this.state.user;
        // axios({
        //     url: this.props.SystemInfo.domain + '/users/create-user',
        //     method: 'POST',
        //     data: {
        //         user: {
        //             fullName: fullName,
        //             userName: userName,
        //             password: password, 
        //             enable : enable
        //         }
        //     }

        // }).then(res => {
        //     console.log(res);
        // }).catch(err => {
        //     console.log(err)
        // });
        console.log(this.state.user);

    }

    render() {
        var { getRoles } = this.state;
        var { txtfullName, txtuserName, password } = this.state.user;
        return (
            <div className="card p-10">
                <form className="mt-20" onSubmit={this.handleSubmit}>
                    <legend>Create Account</legend>
                    <div className="form-label-group mt-20">
                        <label>Full Name</label>
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            required="required"
                            value={txtfullName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-label-group mt-20">
                        <label>UserName</label>
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            required="required"
                            value={txtuserName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-label-group mt-20">
                        <label>Password</label>
                        <input 
                            type="password"
                            className="form-control"
                            placeholder="password"
                            required="required"
                            value={password}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="mt-20">
                        {this.createCheckboxes(getRoles)}
                    </div>

                    <button type="submit" className="btn btn-primary mt-20">Lưu lại</button>
                </form>

            </div>
        );
    }

    createCheckboxes = (getRoles) => {
        var result = null;
        if (getRoles.length > 0) {
            result = getRoles.map((role, index) => {
                return (
                    <div className="form-check" key={index} >
                        <input className="form-check-input"
                            name="roles"
                            type="checkbox"
                        />
                        <label className="form-check-label">
                            {role.functionName}
                        </label>
                    </div>

                );
            });
        }
        return result;
    }
}

export default connect(function (state) {
    return { StateApp: state.StateApp, SystemInfo: state.SystemInfo }
})(Register);