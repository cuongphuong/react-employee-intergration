import React, { Component } from 'react';
import '../../../styles/AddAccount.css';
import axios from 'axios';
import { connect } from 'react-redux';

class AddAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personal: {
                id: '',
                first_Name: '',
                last_Name: '',
                address1: '',
                address2: '',
                city: '',
                state: '',
                email: '',
                phone_Number: '',
                drivers_License: '',
                gender: true,
                ethnicity: '',
                shareholder_Status: false,
            },
        }
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            axios({
                method: 'GET',
                url: `http://192.168.1.5:8080/hrm/get-peeonal?id=${id}`,
                headers: {
                    Authorization: 'Bearer ' + this.props.StateApp.token
                }
            }).then(res => {
                var data = res.data;
                // console.log(res);
                this.setState({
                    personal: data
                });
            }).catch(err => {
                console.log(err);
            });
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        console.log(target.name);
        console.log(target.value);
        this.setState({
            personal: { ...this.state.personal, [name]: target.value }
        });
    }

    handleSubmit = () => {
        var { history } = this.props;
        var { id } = this.state;
        if (id) {
            axios({
                method: 'PUT',
                url: `http://192.168.1.5:8080/hrm/get-peeonal?id=${id}`,
                headers: {
                    Authorization: 'Bearer ' + this.props.StateApp.token,
                    ContentType: 'application/json',
                },
                data: this.state.personal
            }).then(res => {
                alert("Thành công");
                history.push('/dashboard/list-employee');
            }).catch(err => {
                console.log(err)
            });
        } else {
            if (this.state.personal.first_Name.length > 0 && this.state.personal.last_Name.length > 0) {
                const r = window.confirm("Do you want to add employee?");
                if (r === true) {
                    axios({
                        url: this.props.SystemInfo.domain + '/hrm/add-employee',
                        method: 'POST',
                        headers: {
                            Authorization: 'Bearer ' + this.props.StateApp.token,
                            ContentType: 'application/json',
                        },
                        data: this.state.personal

                    }).then(res => {
                        alert("Thành công");
                        history.push('/dashboard/list-employee');
                    }).catch(err => {
                        console.log(err)
                    });
                }
            } else {
                alert('First name and Last name require enter!')
            }
        }
        //console.log(id);


    }

    render() {
        return (
            <div className="card p-10">
                <div className="mt-20">
                    <legend>Add new personal</legend>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-label-group">
                                <label>First_Name</label>
                                <input onChange={this.onChange} value={this.state.personal.first_Name} name="first_Name" ref="firstname" type="text" className="form-control" placeholder="First name" required="required" />
                            </div>
                            <div className="form-label-group mt-20">
                                <label>Last name</label>
                                <input value={this.state.personal.last_Name} onChange={this.onChange} name="last_Name" type="text" className="form-control" placeholder="Last Name" required="required" />
                            </div>
                            <div className="form-label-group mt-20">
                                <label>Address1</label>
                                <input value={this.state.personal.address1} onChange={this.onChange} name="address1" type="text" className="form-control" placeholder="Address1" required="required" />
                            </div>
                            <div className="form-label-group mt-20">
                                <label>Address2</label>
                                <input value={this.state.personal.address2} onChange={this.onChange} name="address2" type="text" className="form-control" placeholder="Address2" required="required" />
                            </div>
                            <div className="form-label-group mt-20">
                                <label>City</label>
                                <input value={this.state.personal.city} onChange={this.onChange} name="city" type="text" className="form-control" placeholder="City" required="required" />
                            </div>
                            <div className="form-label-group mt-20">
                                <label>State</label>
                                <input value={this.state.personal.state} onChange={this.onChange} name="state" type="number" className="form-control" placeholder="State" required="required" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-label-group">
                                <label>Email</label>
                                <input value={this.state.personal.email} onChange={this.onChange} name="email" ref="email" type="text" className="form-control" placeholder="Email" required="required" />
                            </div>
                            <div className="form-label-group mt-20">
                                <label>Number phone</label>
                                <input value={this.state.personal.phone_Number} onChange={this.onChange} name="phone_Number" type="text" className="form-control" placeholder="Number Phone" required="required" />
                            </div>
                            <div className="form-label-group mt-20">
                                <label>Drivers License</label>
                                <input value={this.state.personal.drivers_License} onChange={this.onChange} name="drivers_License" type="text" className="form-control" placeholder="Drivers_License" required="required" />
                            </div>
                            <div className="form-label-group mt-20">
                                <label>Gender</label>
                                <select value={this.state.personal.gender} onChange={this.onChange} name="gender" className="form-control form-control-sm">
                                    <option value={true}>Nam</option>
                                    <option value={false}>Nữ</option>
                                </select>
                            </div>
                            <div className="form-label-group mt-20">
                                <label>Ethnicity</label>
                                <input value={this.state.personal.ethnicity} onChange={this.onChange} name="ethnicity" type="text" className="form-control" placeholder="Ethnicity" required="required" />
                            </div>
                            <div className="form-label-group mt-20">
                                <label>Account Type</label>
                                <select value={this.state.personal.shareholder_Status} onChange={this.onChange} name="shareholder_Status" className="form-control form-control-sm">
                                    <option value={true}>Shareholder</option>
                                    <option value={false}>Non Shareholder</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button onClick={this.handleSubmit} className="btn btn-primary mt-20">Add to personal</button>
                </div>

            </div>
        );
    }
}

export default connect(function (state) {
    return { StateApp: state.StateApp, SystemInfo: state.SystemInfo, Roles: state.Roles }
})(AddAccount);