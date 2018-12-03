import React, { Component } from 'react';
import NotificationItem from './ViewNotification/NotificationItem';
import CategoryNotification from './CategoryNotification';
import axios from 'axios';
import { connect } from 'react-redux';

class Notification extends Component {

    loadData(url){
        var {dispatch} = this.props;
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

    componentDidMount(){
        this.loadData("/notification/ki-nien-td");
    }

    render() {
        return (
            <div>
                <NotificationItem></NotificationItem>
                <CategoryNotification handleLoad = {this.loadData}></CategoryNotification>
            </div>
        );
    }
}

export default connect(function (state) {
    return { NotificationState: state.NotificationState, PersonalState: state.PersonalState, StateApp: state.StateApp, SystemInfo: state.SystemInfo, ToggleView: state.ToggleView }
})(Notification);