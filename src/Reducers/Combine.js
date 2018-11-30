var redux = require('redux'); // add thư viện redux
var StateApp = require('./StateApp.js');
var SystemInfo = require('./SystenInfo.js');
var Roles = require('./Roles');

var reducer = redux.combineReducers({
    StateApp: StateApp,
    SystemInfo: SystemInfo, 
    Roles : Roles
});

module.exports = reducer;