import React, { Component } from 'react';
import Item from './Item';

class ListNotification extends Component {
    render() {
        return (
            <div className="my-3 p-3 bg-white rounded box-shadow">
                <h6 className="border-bottom border-gray pb-2 mb-0">Notification of Category</h6>
                <Item></Item>
            </div>
        );
    }
}

export default ListNotification;