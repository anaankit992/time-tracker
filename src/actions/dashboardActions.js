import axios from "axios";

export function getUserDetails() {
    return function (dispatch) {
        return axios.get('http://dummy.restapiexample.com/api/v1/employees').then(({ data }) => {
            dispatch({
                type: 'GET_USER_DETAILS',
                payload: data
            })
        })
    }

}