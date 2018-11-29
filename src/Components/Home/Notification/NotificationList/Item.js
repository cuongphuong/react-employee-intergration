import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div className="media text-muted pt-3">
                <i className="fas fa-chevron-right" style={{ margin: '7px' }}></i>
                <lable><a href="/">Thông báo sinh nhật</a></lable>
            </div>
        );
    }
}

export default Item;