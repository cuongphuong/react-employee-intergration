import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DetailPersonal from '../HRManagement/DetailPersonal';

class BenefitPlans extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            isLoad: true,
            isLoadMore: 0,
            dataMapping: [],
            dateDetail: {},
        }
    }
    componentWillMount() {
        this.loadData(this.state.page, 0);
    }

    loadData(pageLoad, frefix) {
        //frefix = 0 is init load else 1 is loadmore
        var global = this;
        this.setState({ page: this.state.page + 1 })
        axios({
            method: 'get',
            url: this.props.SystemInfo.domain + '/infomation/benefit-plans?page=' + pageLoad,
            headers: {
                Authorization: 'Bearer ' + this.props.StateApp.token
            }
        })
            .then(function (response) {
                if (response.status === 200) {
                    var data = response.data;
                    if (frefix === 0) global.setState({ isLoad: false, dataMapping: Object.values(data) })
                    else {
                        global.setState({ isLoadMore: 2, dataMapping: [...this.state.dataMapping, ...Object.values(data)] })
                        setTimeout(function () {
                            global.setState({ isLoadMore: 0 })
                        }, 500);
                    }
                }
            })
            .catch(error => {
                console.log(error);
                global.setState({ isLoadMore: 0, isLoad: false });
                alert(frefix === 1 ? 'Out of data.' : 'Error server.');
            });
    }

    loadMore() {
        this.setState({ isLoadMore: 1 })
        this.loadData(this.state.page, 1);
    }

    setDataToDetail(item) {
        var { dispatch } = this.props;
        var global = this;
        axios({
            method: 'GET',
            url: this.props.SystemInfo.domain + '/hrm/get-peeonal?id=' + item.employeeID,
            headers: {
                Authorization: 'Bearer ' + this.props.StateApp.token
            }
        })
            .then(function (response) {
                if (response.status === 200) {
                    global.setState({ dateDetail: item });
                    dispatch({
                        type: 'TOGGLE_DETAIL_PERSONAL',
                        item: true
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <div className="card">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                            <li className="breadcrumb-item"><a href="/">Infomation Employee</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Benefit Plans</li>
                        </ol>
                    </nav>
                    <div className="pg_phdr">
                        <a href="/" className="pg_phdr_title">Benefit Plans Of Employee</a>
                        <span className="pg_pgdr_description">hiển thị kế hoạch lợi ích của nhân viên.</span>
                    </div>
                    {
                        this.state.isLoad === false ?
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Employee ID</th>
                                        <th>Full Name</th>
                                        <th>Phone Number</th>
                                        <th>Address 1</th>
                                        <th>Address 2</th>
                                        <th>Ethnicity</th>
                                        <th>Gender</th>
                                        <th>Plan Name</th>
                                        <th>Deductable</th>
                                        <th>Percentage CoPay</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.dataMapping.length > 0 ? this.state.dataMapping.map(
                                            (e, i) =>
                                                <tr key={i} onClick={(item) => this.setDataToDetail(e)}>
                                                    <td>{e.employeeID}</td>
                                                    <td>{e.fistName + " " + e.lastName}</td>
                                                    <td>{e.phoneNumber}</td>
                                                    <td>{e.address1}</td>
                                                    <td>{e.address2}</td>
                                                    <td>{e.ethnicity}</td>
                                                    <td>{e.gender === true ? "Nam" : "Nử"}</td>
                                                    <td>{e.plan_Name}</td>
                                                    <td>{e.deductable}</td>
                                                    <td>{e.percentage_CoPay}</td>
                                                </tr>
                                        ) : <tr>
                                                <td colSpan={8}>Rỗng</td>
                                            </tr>
                                    }
                                </tbody>
                            </table>
                            :
                            <div style={{ textAlign: 'center', padding: '10px' }}><img height="40px" src={this.props.SystemInfo.client + "/load.gif"} alt="" /></div>
                    }
                </div>

                {
                    this.state.dataMapping.length >= 2 ?
                        <div className="card" style={{ marginTop: '1px' }}>
                            {
                                this.state.isLoadMore === 0 ?
                                    <div style={{ textAlign: 'center', padding: '10px' }}><button onClick={() => this.loadMore()} className="btn">Load more</button></div>
                                    :
                                    this.state.isLoadMore === 1 ?
                                        <div style={{ textAlign: 'center', padding: '10px' }}><img height="38px" src={this.props.SystemInfo.client + "/load.gif"} alt="" /></div> :
                                        <div style={{ textAlign: 'center', padding: '10px' }}><img height="38px" src={this.props.SystemInfo.client + "/verify.gif"} alt="" /></div>
                            }
                        </div>
                        : ''
                }
                {
                    this.props.ToggleView.toggle_detail_personal === true ? <DetailPersonal data={this.state.dateDetail}></DetailPersonal> : ''
                }
            </div>
        );
    }
}
export default connect(function (state) {
    return { StateApp: state.StateApp, SystemInfo: state.SystemInfo, ToggleView: state.ToggleView }
})(BenefitPlans);

