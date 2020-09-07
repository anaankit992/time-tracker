

const dashboardInitialState = {
    user: {}
}

export default (state = dashboardInitialState, action) => {
    switch (action.type) {
        case 'GET_USER_DETAILS':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}
