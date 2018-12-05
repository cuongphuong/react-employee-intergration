import React, { Component } from 'react';
import '../../../styles/AddAccount.css';
import axios from 'axios';
import { connect } from 'react-redux';
import CheckboxList from './CheckBox/CheckboxList';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            object: {
                rolesObject: []
            },
            str: {
                roles: '',
                status: '',
                userID: null
            }
        }
    }

    getAccessControl(id) {
        var global = this;
        axios({
            url: `${this.props.SystemInfo.domain}/users/get-change-accessct?id=${id}`,
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + this.props.StateApp.token
            }

        }).then(res => {
            global.setState({ object: res.data })
        }).catch(err => {
            console.log(err)
        });
    }

    componentDidMount() {
        this.setState({ ...this.state, str: { ...this.state.str, userID: this.props.match.params.id } });
        this.getAccessControl(this.props.match.params.id);
    }

    customRoles = (object) => {
        var strRoles = "";
        var strStatus = "";
        object.forEach(element => {
            strRoles = strRoles + element.functionID + ";";
            strStatus += element.status === true ? "1;" : "0;";
        });

        this.setState({
            ...this.state, str: { ...this.state.str, roles: strRoles, status: strStatus }
        });
        return { ...this.state.str, roles: strRoles, status: strStatus };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var data = this.customRoles(this.state.object);
        var { history } = this.props;
        axios({
            url: this.props.SystemInfo.domain + '/users/update-access-control',
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + this.props.StateApp.token,
                ContentType: 'application/json',
            },
            data: data
        }).then(res => {
            if (res.status === 200) {
                if(res.data === true){
                    alert("Successfuly.");
                    history.push("/dashboard/show-user");
                }
            }
        }).catch(err => {
            alert("Error server.")
            console.log(err)
        });

    }

    createCheckboxes = (roles) => {
        var result = null;
        if (roles.length > 0) {
            result = roles.map((role, index) => {
                if (role.status === true) {
                    return (
                        <div className="form-check" key={index} >
                            <input className="form-check-input"
                                name={role.functionID}
                                type="checkbox"
                                onChange={this.onChange}
                                defaultChecked
                            />
                            <label className="form-check-label">
                                {role.functionName}
                            </label>
                        </div>
                    );
                } else {
                    return (
                        <div className="form-check" key={index} >
                            <input className="form-check-input"
                                name={role.functionID}
                                type="checkbox"
                                onChange={this.onChange}
                            />
                            <label className="form-check-label">
                                {role.functionName}
                            </label>
                        </div>
                    );
                }
            });
        }
        return result;
    }

    onChange = (e) => {
        var role = this.state.object.find(i => i.functionID === parseInt(e.target.name, 10));
        role.status = !role.status;
    }

    render() {
        return (
            <div className="card p-10">
                <form className="mt-20" onSubmit={this.handleSubmit}>
                    <legend>Change access control for </legend>
                    <div className="form-label-group mt-20">
                        <label>Permission</label>
                        {this.createCheckboxes(this.state.object)}
                    </div>
                    <button type="submit" className="btn btn-primary mt-20">Change permission</button>
                </form>

            </div>
        );
    }

}

export default connect(function (state) {
    return { StateApp: state.StateApp, SystemInfo: state.SystemInfo, Roles: state.Roles }
})(Register);