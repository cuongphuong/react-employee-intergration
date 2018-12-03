import React, { Component } from 'react';
import '../../../styles/AddAccount.css';
import axios from 'axios';
import { connect } from 'react-redux';
import CheckboxList from './CheckBox/CheckboxList';

class Register extends Component {

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        //console.log(target.value);
        var { dispatch } = this.props;
        dispatch({
            type: 'ADD_ROLES_APP',
            item: { ...this.props.Roles, user: { ...this.props.Roles.user, [name]: target.value } }
        })
    }

    customRoles = () => {
        var strRoles = "";
        if (this.props.Roles) {

        }
        this.props.Roles.roles.forEach(element => {
            if (element.status === true) {
                strRoles += element.functionID + ";";
                
            }
        });
        return this.props.Roles.strRole = strRoles;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.customRoles();
        // for (const checkbox of this.selectedCheckboxes) {
        //     console.log(checkbox, 'is selected.');
        // }

        var { user, strRole } = this.props.Roles;
        var { history } = this.props;
        axios({
            url: this.props.SystemInfo.domain + '/users/create-user',
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + this.props.StateApp.token,
                ContentType: 'application/json',
            },
            data: {
                user: user,
                roles: strRole

            },

        }).then(res => {
            alert("Thành công");
            history.push("/dashboard/show-user");

        }).catch(err => {
            console.log(err)
        });

        console.log(this.props.Roles);

    }

    render() {
        var { fullName, userName, password } = this.props.Roles;
        return (
            <div className="card p-10">
                <form className="mt-20" onSubmit={this.handleSubmit}>
                    <legend>Create Account</legend>
                    <div className="form-label-group mt-20">
                        <label>Full Name</label>
                        <input
                            name="fullName"
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            required="required"
                            value={fullName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-label-group mt-20">
                        <label>UserName</label>
                        <input
                            type="text"
                            name="userName"
                            className="form-control"
                            placeholder="Username"
                            required="required"
                            value={userName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-label-group mt-20">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="password"
                            required="required"
                            value={password}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-label-group mt-20">
                        <label>Permission</label>
                        <CheckboxList></CheckboxList>
                    </div>
                    <button type="submit" className="btn btn-primary mt-20">Thêm tài khoản</button>
                </form>

            </div>
        );
    }

}

export default connect(function (state) {
    return { StateApp: state.StateApp, SystemInfo: state.SystemInfo, Roles: state.Roles }
})(Register);