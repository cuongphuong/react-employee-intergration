import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

class DetailPersonal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            payrate: {
                pay_Rate_Name: '',
                value: 0, //long
                tax_Percentage: 0, //long
                pay_Type: 0, //int
                pay_Amount: 0, //int
                pT_Level_C: 0, //int
            },
            SSN: 0,
            isUpTo: false
        };
    }

    getData(data) {
        var result = null;
        if (data !== null) {
            console.log('ok');
            let object = [];
            for (const [key, value] of Object.entries(data)) {
                object = [...object, { key: key, value: value }];
            }
            if (object.length > 0) {
                result = object.map((item, index) => {
                    return (
                        <tr key={index}>
                            <th>{item.key}</th>
                            <td>{item.value}</td>
                        </tr>
                    );
                });
            }
        }
        return result;
    }

    onCloseForm() {
        var { dispatch } = this.props;
        dispatch({
            type: 'TOGGLE_DETAIL_PERSONAL',
            item: false
        });
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        this.setState({
            ...this.state, payrate: { ...this.state.payrate, [name]: target.value }
        });
    }

    onChangeSSN = (e) => {
        this.setState({
            ...this.state, SSN: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var { dispatch } = this.props;
        axios({
            url: this.props.SystemInfo.domain + '/hrm/update-to-payrol',
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + this.props.StateApp.token,
                ContentType: 'application/json',
            },
            data: {
                payrate: this.state.payrate,
                SSN: this.state.SSN,
                employeeID: this.props.data.employee_ID
            }
        }).then(res => {
            if (res.status === 200 && res.data !== null) {
                alert('Successfully.');
                dispatch({
                    type: 'TOGGLE_DETAIL_PERSONAL',
                    item: false
                });
            } else {
                alert('Error, Please try again later!')
            }
        }).catch(err => {
            console.log(err)
        });
    }

    showFormAdd() {
        return (
            <div className="pg_ig_scale_payrates" style={{ marginTop: '20px' }}>
                <form className="mt-20" onSubmit={this.handleSubmit}>
                    <div className="form-label-group">
                        <label>pay_Rate_Name</label>
                        <input
                            name="pay_Rate_Name"
                            type="text"
                            className="form-control"
                            placeholder="pay_Rate_Name"
                            required="required"
                            value={this.state.payrate.pay_Rate_Name}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-label-group">
                                <label>value</label>
                                <input
                                    type="number"
                                    name="value"
                                    className="form-control"
                                    placeholder="value"
                                    required="required"
                                    value={this.state.payrate.value}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-label-group">
                                <label>tax_Percentage</label>
                                <input
                                    type="number"
                                    name="tax_Percentage"
                                    className="form-control"
                                    placeholder="tax_Percentage"
                                    required="required"
                                    value={this.state.payrate.tax_Percentage}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-label-group">
                                <label>pay_Type</label>
                                <input
                                    type="number"
                                    name="pay_Type"
                                    className="form-control"
                                    placeholder="pay_Type"
                                    required="required"
                                    value={this.state.payrate.pay_Type}
                                    onChange={this.onChange}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-label-group">
                                <label>pay_Amount</label>
                                <input
                                    type="number"
                                    name="pay_Amount"
                                    className="form-control"
                                    placeholder="pay_Amount"
                                    required="required"
                                    value={this.state.payrate.pay_Amount}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-label-group">
                                <label>pT_Level_C</label>
                                <input
                                    type="number"
                                    name="pT_Level_C"
                                    className="form-control"
                                    placeholder="pT_Level_C"
                                    required="required"
                                    value={this.state.payrate.pT_Level_C}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-label-group">
                                <label>SSN</label>
                                <input
                                    type="number"
                                    name="SSN"
                                    className="form-control"
                                    placeholder="SSN"
                                    required="required"
                                    value={this.state.SSN}
                                    onChange={this.onChangeSSN}
                                />
                            </div>
                        </div>

                    </div>
                    <button type="submit" className="btn btn-primary mt-20">Up to Employee</button>
                </form>

            </div>
        );
    }

    changeUpTo() {

        this.setState({ isUpTo: !this.state.isUpTo });
    }

    deleteThis(id) {
        this.onCloseForm();
        var global = this;
        var { dispatch } = this.props;
        const r = window.confirm("This operation will delete on 2 database and related data");
        if (r === true) {
            axios({
                method: 'delete',
                url: this.props.SystemInfo.domain + '/hrm/delete-employee/' + id,
                headers: {
                    Authorization: 'Bearer ' + this.props.StateApp.token
                }
            })
                .then(function (response) {
                    if (response.status === 200) {
                        if (response.data > 0) {
                            alert('Thành công');
                            var as = global.props.PersonalState.dataMapping.filter(i => i.employee_ID !== id);
                            dispatch({
                                type: 'PERSONAL_UPDATE_STATE',
                                item: {...global.props.PersonalState, dataMapping: as}
                            });
                        }
                    }
                })
                .catch(error => {
                    console.log('Can not delete.' + error);
                });
        }
    }

    render() {
        return (
            <div className="pg_float_foreground">
                <div className="row">
                    <div className="col-md-8" style={{ overflowY: 'scroll', height: 'calc(100vh)' }}>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.getData(this.props.data)}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-4">
                        <div style={{ marginTop: "20px" }}>
                            <Link onClick={() => this.onCloseForm()} to={`/dashboard/add-employee/${this.props.data.employee_ID}/edit`} style={{ marginRight: "10px" }} className="btn btn-success">Update this</Link>
                            <button onClick={(id) => this.deleteThis(this.props.data.employee_ID)} style={{ marginRight: "10px" }} className="btn btn-danger">Delete this</button>
                            {
                                this.props.data.exist === false ? <button onClick={() => this.changeUpTo()} className="btn btn-danger">Up to Employees</button> : ''
                            }
                        </div>

                        {this.state.isUpTo === true ? this.showFormAdd() : ''}

                        <div style={{ marginTop: '10px', fontWeight: 'bold' }} className="pg_ig_title">
                            Notification
                        </div>
                        {
                            this.props.data.exist === false ? <p>This personal is not into employees</p> : this.props.data.same === false ? <p>Employee information is not the same in 2 databases</p> : 'Employee infomation is same.'
                        }
                    </div>
                </div>
                <button onClick={() => this.onCloseForm()} className="pg_btn_close_form btn btn-link">Đóng</button>
            </div>
        );
    }
}

export default connect(function (state) {
    return { PersonalState: state.PersonalState, ToggleView: state.ToggleView, StateApp: state.StateApp, SystemInfo: state.SystemInfo, }
})(DetailPersonal);