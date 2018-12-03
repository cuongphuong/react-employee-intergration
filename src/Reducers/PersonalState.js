var obj = {
    dataMapping: [],
}

var PersonalState = (state = obj, action) => {
    switch (action.type) {
        case 'PERSONAL_UPDATE_STATE':
            return action.item;
        default:
            return state;
    }
}

module.exports = PersonalState;