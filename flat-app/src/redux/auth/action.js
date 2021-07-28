import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "./actionType";
import axios from "axios"

const loginRequest = () => ({
    type:LOGIN_REQUEST
})

const loginSuccess = (payload) => ({
    type:LOGIN_SUCCESS,
    payload
})
const loginFailure = () => ({
    type:LOGIN_FAILURE
})

const logoutRequest = () => ({
    type:LOGOUT_REQUEST
})

const logoutSuccess = () => ({
    type:LOGOUT_SUCCESS
})
const logoutFailure = () => ({
    type:LOGOUT_FAILURE
})

const login = payload => dispatch => {
    dispatch(loginRequest())
   return axios.post("https://reqres.in/api/login",payload)
   .then(res =>  dispatch(loginSuccess(res.data.token)))
   .catch(err => dispatch(loginFailure()))
}

const logout = payload => dispatch => {
    dispatch(logoutRequest())
    try{
        dispatch(logoutSuccess(payload))
    }
    catch{
        dispatch(logoutFailure())
    }
}

export {login,logout}