import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class CategoryNotification extends Component {

    resetData() {
        var { dispatch } = this.props;
        dispatch({
            type: 'NOTIFICATIONS_STATE_UPDATE',
            item: {
                ...this.props.NotificationState, dataMapping: []
            }
        });
    }

    handleLoad(url) {
        var { dispatch } = this.props;
        var global = this;
        axios({
            method: 'get',
            url: this.props.SystemInfo.domain + url,
            headers: {
                Authorization: 'Bearer ' + this.props.StateApp.token
            }
        })
            .then(function (response) {
                if (response.status === 200) {
                    dispatch({
                        type: 'NOTIFICATIONS_STATE_UPDATE',
                        item: {
                            ...global.props.NotificationState, dataMapping: response.data
                        }
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    onClick1() {
        this.resetData();
        this.handleLoad('/notification/ngay-nghi-qua-han');
    }

    onClick2() {
        this.resetData();
        this.handleLoad('/notification/ngay-nghi-qua-han');
    }

    onClick3() {
        this.resetData();
        this.handleLoad('/notification/ki-nien-td');
    }

    render() {
        return (
            <div className="my-3 p-3 bg-white rounded box-shadow">
                <h6 className="border-bottom border-gray pb-2 mb-0">Notification of Category</h6>
                <div><button onClick={() => this.onClick1()} style={{ paddingLeft: '0px' }} className="btn btn-link">Thông báo ngày sinh nhật</button></div>
                <div><button onClick={() => this.onClick2()} style={{ paddingLeft: '0px' }} className="btn btn-link">Thông báo ngày nghĩ quá hạn</button></div>
                <div><button onClick={() => this.onClick3()} style={{ paddingLeft: '0px' }} className="btn btn-link">Thông báo ngày kĩ niệm tuyển dụng</button></div>
            </div>
        );
    }
}

export default connect(function (state) {
    return { NotificationState: state.NotificationState, PersonalState: state.PersonalState, StateApp: state.StateApp, SystemInfo: state.SystemInfo, ToggleView: state.ToggleView }
})(CategoryNotification);