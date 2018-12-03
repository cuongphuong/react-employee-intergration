import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Update extends Component {

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        //console.log(target.value);
        var { dispatch } = this.props;
        dispatch({
            type: 'ADD_ROLES_APP',
            item: { ...this.props.Roles, userUpdate : { ...this.props.Roles.userUpdate, [name]: target.value } }
        })
    }

    componentDidMount() {
        var { match } = this.props;
        var id = match.params.id;
        var { dispatch } = this.props;
        if (id) {
            axios({
                method: 'GET',
                url: this.props.SystemInfo.domain + `/users/get-uer-byid/?id=${id}`,
                headers: {
                    Authorization: 'Bearer ' + this.props.StateApp.token
                }
            }).then(res => {
                dispatch({
                    type: 'ADD_ROLES_APP',
                    item: { ...this.props.Roles, userUpdate: res.data }
                });
            }).catch(err => {
                console.log(err);
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var { history } = this.props;
        var {userUpdate} = this.props.Roles;
        console.log(userUpdate);
        var { userID } = this.props.Roles.userUpdate;
        if (userID) {
            axios({
                url : this.props.SystemInfo.domain + `/users/update-user`,
                method : 'PUT', 
                headers: {
                    Authorization: 'Bearer ' + this.props.StateApp.token,
                    ContentType: 'application/json',
                },
                data : userUpdate
            }).then(res => {
                alert("Thành công");
                history.push('/dashboard/show-user');
            }).catch(err => {
                console.log(err);
            });
        }else{
            alert("Cập nhật thất bại");
        }
    }


    render() {
        var { fullName, userName } = this.props.Roles.userUpdate;
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
                    <button type="submit" className="btn btn-primary mt-20">Thêm tài khoản</button>
                </form>

            </div>
        );
    }
}

export default connect(function (state) {
    return { StateApp: state.StateApp, SystemInfo: state.SystemInfo, Roles: state.Roles }
})(Update);