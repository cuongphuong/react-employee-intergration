import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class CheckboxList extends Component {

    componentDidMount() {
        var global = this;
        var { dispatch } = this.props;
        axios({
            url: this.props.SystemInfo.domain + '/users/get-all-role',
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + this.props.StateApp.token,
            }
        }).then(res => {
            var data = res.data;
            var customData = [];
            data.forEach(item => {
                customData = [...customData, {...item, status: false}];
            });
            dispatch({
                type : 'ADD_ROLES_APP', 
                item : {...this.props.Roles, roles : customData }
            });
        }).catch(err => {
            console.log(err)
        });
    }

    

    render() {
        var { roles } = this.props.Roles;
        return (
            <div className="mt-20">
                {this.createCheckboxes(roles)}
            </div>
        );
    }

    onChange = (e) => {
       var role = this.props.Roles.roles.find(i => i.functionID === parseInt(e.target.name));
        role.status = !role.status;
        // console.log(this.props.Roles.roles);
       
    }

    createCheckboxes = (roles) => {
        var result = null;
        if (roles.length > 0) {
            result = roles.map((role, index) => {
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
            });
        }
        return result;
    }
}


export default connect(function (state) {
    return { StateApp: state.StateApp, SystemInfo: state.SystemInfo, Roles : state.Roles }
})(CheckboxList);
