var redux = require('redux'); // add thư viện redux
var StateApp = require('./StateApp.js');
var SystemInfo = require('./SystenInfo.js');
var Roles = require('./Roles');
var FunctionMapping = require('./FunctionMapping');
var ToggleView = require('./ToggleView');
var PersonalState =  require('./PersonalState');

var reducer = redux.combineReducers({
    StateApp: StateApp,
    SystemInfo: SystemInfo, 
    Roles : Roles, 
    FunctionMapping: FunctionMapping,
    ToggleView: ToggleView, 
    PersonalState: PersonalState
});

module.exports = reducer;