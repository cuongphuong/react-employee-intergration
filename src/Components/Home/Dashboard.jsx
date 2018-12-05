import React from 'react';
import { connect } from 'react-redux';
import Nav from './Frame/Nav';
import { Redirect, Route } from 'react-router-dom';
// import TotalEarnings from './InfomationIntergration/TotalEarnings';
import Drawer from './Frame/Drawer';
import Vacationdays from './InfomationIntergration/Vacationdays';
import TotalEarnings from './InfomationIntergration/TotalEarnings';
import Register from './SystemManagement/Register';
import AddPersonal from './HRManagement/AddPersonal';
import Notification from './Notification/Notification';
import ShowUser from './SystemManagement/ShowUser';
import ListPersonal from './HRManagement/ListPersonal';
import Update from './SystemManagement/Update';
import BenefitPlans from './InfomationIntergration/BenefitPlans';
import ChangeAccessControl from './SystemManagement/ChangeAccessControl';

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
                        <Route path={ match.url + "/create-account"} component={Register} />
                        <Route exact path={ match.url + "/add-employee"} component={AddPersonal}/>
                        <Route path={ match.url + "/notification"} component={Notification}/>
                        <Route path={ match.url + "/show-user"} component={ShowUser}/>
                        <Route path={ match.url + "/list-employee/"} component={ ListPersonal }/>
                        <Route  path={ match.url + "/add-employee/:id/edit"} component={ AddPersonal }/>
                        <Route path={match.url + "/update-management/:id/edit"} component={Update} />
                        <Route path={ match.url + "/notifications"} component={Notification}/>
                        <Route path={ match.url + "/benefit-plans"} component={BenefitPlans}/>
                        <Route exact path={ match.url + "/access-control/:id"} component={ChangeAccessControl}/>
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