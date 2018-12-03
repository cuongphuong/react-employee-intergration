import React, { Component } from 'react';
import Item from './Item';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NotificationItem extends Component {

    mappingData() {
        var result = null;
        var data = this.props.NotificationState.dataMapping;
        if (data.length > 0) {
            result = data.map((notification, index) => {
                return (
                    <Item key={index} title={notification.title} content={notification.content}></Item>
                );
            });
        }
        return result;
    }

    render() {
        return (
            <div className="pg_load_notification my-3 p-3 bg-white rounded box-shadow">
                <h6 className="border-bottom border-gray pb-2 mb-0">Notification</h6>
                {
                    this.props.NotificationState.dataMapping.length > 0 ?
                        <div>
                            {
                                this.mappingData()
                            }
                            <small className="d-block text-right mt-3">
                                <a href="/">Load more</a>
                            </small>
                        </div>
                        :
                        <div style={{ textAlign: 'center', padding: '10px' }}><img height="38px" src={this.props.SystemInfo.client + "/load.gif"} alt="" /></div>
                }

            </div>
        );
    }
}


export default connect(function (state) {
    return { NotificationState: state.NotificationState, PersonalState: state.PersonalState, StateApp: state.StateApp, SystemInfo: state.SystemInfo, ToggleView: state.ToggleView }
})(NotificationItem);