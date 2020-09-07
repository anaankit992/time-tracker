import * as constants from "../apiConstants/dashboardConstants";

const dashboardInitialState = {
    user: {}
}

export default (state = dashboardInitialState, action) => {
    switch (action.type) {
        case constants.GET_USER_DETAILS_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}
