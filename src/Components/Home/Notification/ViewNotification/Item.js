import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div className="media text-muted pt-3">
                <i className="far fa-clock" style={{ margin: '7px' }}></i>
                <p className="media-body pb-3 mb-0 lh-125 border-bottom border-gray">
                    <a href="/" className="d-block text-gray-dark">Title thông báo ngày kỷ niệm</a>
                    Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                    </p>
            </div>
        );
    }
}

export default Item;