import React from 'react';
import { connect } from 'react-redux';
import Nav from './Frame/Nav';
import { Redirect, Route } from 'react-router-dom';
// import TotalEarnings from './InfomationIntergration/TotalEarnings';
import Drawer from './Frame/Drawer';
import Vacationdays from './InfomationIntergration/Vacationdays';
import TotalEarnings from './InfomationIntergration/TotalEarnings';
import Register from '../Login/Register';
import addAccount from '../Login/addAccount';
import Notification from './Notification/Notification';

const Dashboard = ({ match, StateApp }) => {
    if (StateApp.isLogin === true) {
        return (
            <div>
                <Nav></Nav>
                <Drawer></Drawer>
                <div id="pg_id_content">
                    <div className="container-fluid">
                        <Route path={match.url + "/vacationdays"} component={Vacationdays} />
                        <Route path={match.url + "/total-earnings"} component={TotalEarnings} />
                        <Route path={ match.url + "/create-account"} component={Register}/>
                        <Route path={ match.url + "/add-account"} component={addAccount}/>
                        <Route path={ match.url + "/notification"} component={Notification}/>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <Redirect to='/' />
        );
    }
};

export default connect(function (state) {
    return { StateApp: state.StateApp }
})(Dashboard);