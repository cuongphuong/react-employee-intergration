var obj = {
    isLogin: false,
    token: null,
    username: null,
    fullname: null,
    userID: null
}

var StateApp = (state = obj, action) => {
    switch (action.type) {
        case 'ADD_INFO_APP':
            if (state === null)
                state = {};
            return action.item;
        default:
            return state;

    }
}

module.exports = StateApp;