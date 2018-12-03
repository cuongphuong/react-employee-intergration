var obj = {
    urlLoad : "", 
    dataMapping: []
}

var NotificationState = (state = obj, action) => {
    switch (action.type) {
        case 'NOTIFICATIONS_STATE_UPDATE':
            return action.item;
        default:
            return state;
    }
}

module.exports = NotificationState;