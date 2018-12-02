import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            employeeID: null,
            SSN: null
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

    onUpdateToEmployee(id) {

    }

    render() {
        return (
            <div className="pg_float_foreground">
                <div className="row">
                    <div className="col-md-8">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.getData(this.props.data)}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-4">
                        <div style={{ marginTop: "20px" }}>
                            <button style={{ marginRight: "10px" }} className="btn btn-success">Update this</button>
                            <button style={{ marginRight: "10px" }} className="btn btn-danger">Delete this</button>
                            {
                                this.props.data.exist === false ? <button className="btn btn-danger">Up to Employees</button> : ''
                            }
                        </div>
                        <div style={{ marginTop: '10px', fontWeight: 'bold' }} className="pg_ig_title">
                            Notification
                        </div>
                        {
                            this.props.data.exist === false ? <p>This personal is not into employees</p> : this.props.data.same === false ? <p>Employee information is not the same in 2 databases</p> : ''
                        }
                    </div>
                </div>
                <button onClick={() => this.onCloseForm()} className="pg_btn_close_form btn btn-link">Đóng</button>
            </div>
        );
    }
}

export default connect(function (state) {
    return { ToggleView: state.ToggleView }
})(DetailPersonal);