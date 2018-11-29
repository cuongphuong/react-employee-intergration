import React, { Component } from 'react';
import NotificationItem from './ViewNotification/NotificationItem';
import ListNotification from './NotificationList/ListNotification';

class Notification extends Component {
    render() {
        return (
            <div className="container">
                <NotificationItem></NotificationItem>
                <ListNotification></ListNotification>
            </div>
        );
    }
}

export default Notification;