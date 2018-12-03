import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class ShowUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoad: true,
            isLoadMore: 0,
            dataMapping: [],
        }
    }

    componentWillMount() {
        this.loadData(0);
    }

    loadData(frefix) {
        //frefix = 0 is init load else 1 is loadmore
        var global = this;
        axios({
            method: 'get',
            url: this.props.SystemInfo.domain + '/users/lst-user',
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

    deleteUser(id, username) {
        var global = this;
        const r = window.confirm("Do you want to delete user " + username + "?");
        if (r === true) {
            console.log("ok");
            axios({
                method: 'delete',
                url: this.props.SystemInfo.domain + '/users/delete-user/' + id,
                headers: {
                    Authorization: 'Bearer ' + this.props.StateApp.token
                }
            })
                .then(function (response) {
                    if (response.status === 200) {
                        console.log(response.data);
                        if (response.data === true) {
                            var as = global.state.dataMapping.filter(i => i.userID !== id);
                            global.setState({ dataMapping: as })
                        }
                    }
                })
                .catch(error => {
                    console.log('Không thể xóa.');
                });
        }

    }

    render() {
        return (
            <div>
                <div className="card">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                            <li className="breadcrumb-item"><a href="/">System Managerment</a></li>
                            <li className="breadcrumb-item active" aria-current="page">ListUser</li>
                        </ol>
                    </nav>
                    <div className="pg_phdr">
                        <a href="/" className="pg_phdr_title">Show Users</a>
                        <span className="pg_pgdr_description">Hiển thị danh sách tài khoản người dùng hệ thống.</span>
                    </div>
                    {
                        this.state.isLoad === false ?
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>User ID</th>
                                        <th>Full Name</th>
                                        <th>Username</th>
                                        <th>Trạng thái</th>
                                        <th>Control</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.dataMapping.length > 0 ? this.state.dataMapping.map(
                                            (e, i) =>
                                                <tr key={i}>
                                                    <td>{e.userID}</td>
                                                    <td>{e.fullName}</td>
                                                    <td>{e.userName}</td>
                                                    <td>{e.enable === true ? "Active" : "Block"}</td>
                                                    <td>
                                                        <Link to= {`/dashboard/update-management/${e.userID}/edit`} style={{ marginRight: '5px' }} className="btn btn-primary">Update</Link>
                                                        <button onClick={() => this.deleteUser(e.userID, e.userName)} className="btn btn-danger">Delete</button>
                                                    </td>
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
            </div>
        );
    }
}

export default connect(function (state) {
    return { StateApp: state.StateApp, SystemInfo: state.SystemInfo }
})(ShowUser);