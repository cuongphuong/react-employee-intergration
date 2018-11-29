import React, { Component } from 'react';
import Item from './Item';

class NotificationItem extends Component {
    render() {
        return (
            <div className="my-3 p-3 bg-white rounded box-shadow">
                <h6 className="border-bottom border-gray pb-2 mb-0">Notification</h6>
                <Item></Item>
                <small className="d-block text-right mt-3">
                    <a href="/">Load more</a>
                </small>
            </div>
        );
    }
}

export default NotificationItem;