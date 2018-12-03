var obj = {
    user: {
        id : '',
        fullName: '',
        userName: '',
        password: '',
        enable: true
    },
    userUpdate: {
        userID : '',
        fullName: '',
        userName: '',
        enable: true
    },
    roles: [],
    strRole: ""
}

var Roles = (state = obj, action) => {
    switch (action.type) {
        case 'ADD_ROLES_APP':
            if (state === null)
                state = {};
                // console.log(action.item);
            return action.item;
        default:
            return state;

    }
}

module.exports = Roles;