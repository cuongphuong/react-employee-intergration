import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import LoginComponent from './LoginComponent';
class Nav extends Component {

    showDrawer = () => {
        var marginLeft = $("#pg_id_app_drawer").css("marginLeft");
        if (marginLeft === "-256px") {
            $("#pg_id_app_drawer").css("marginLeft", "0px");
            $("#pg_id_content").css("marginLeft", "256px");
        } else {
            $("#pg_id_app_drawer").css("marginLeft", "-256px");
            $("#pg_id_content").css("marginLeft", "0px");
        }
    }

    render() {
        return (
            <nav className="nav fixed-top pg_nav">
                <div id="pg_btnid_guide">
                    <button className="none_button" id="pg_event_btnDrawer" onClick={this.showDrawer.bind()}>
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={{ pointerEvents: 'none', display: 'block', width: '100%', height: '100%' }}>
                            <g className="style-scope yt-icon">
                                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" className="style-scope yt-icon" />
                            </g>
                        </svg>
                    </button>
                </div>

                <div id="pg_id_logo">
                    <Link to="/"><img src={this.props.SystemInfo.client + "/logo.png"} alt="Logo" height="32px" /></Link>
                </div>

                <div id="pg_nav_float_right">
                <LoginComponent></LoginComponent>
                </div>
            </nav>
        );
    }
}

export default connect(function(state){
    return {
        SystemInfo: state.SystemInfo
    };
})(Nav);