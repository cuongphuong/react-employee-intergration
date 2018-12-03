var obj = {
    toggle_detail_personal: false,
    toggle_payrates_add: false
}

var ToggleView = (state = obj, action) => {
    switch (action.type) {
        case 'TOGGLE_DETAIL_PERSONAL':
            return { ...state, toggle_detail_personal: action.item }
        default:
            return state;
    }
}

module.exports = ToggleView;