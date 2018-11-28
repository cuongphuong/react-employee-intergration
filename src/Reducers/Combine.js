var redux = require('redux'); // add thư viện redux
var StateApp = require('./StateApp.js');
var SystemInfo = require('./SystenInfo.js');

var reducer = redux.combineReducers({
    StateApp: StateApp,
    SystemInfo: SystemInfo, 
});

module.exports = reducer;