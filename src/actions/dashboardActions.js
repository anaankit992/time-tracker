import axios from "axios";
import * as constants from "../apiConstants/dashboardConstants";

export function getUserDetails() {
    return function (dispatch) {
        return axios.get('http://dummy.restapiexample.com/api/v1/employees').then(({ data }) => {
            dispatch({
                type: constants.GET_USER_DETAILS_SUCCESS,
                payload: data
            })
        })
    }

}