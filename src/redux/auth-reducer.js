import { reset, stopSubmit } from "redux-form"
import { authAPI } from "../API/api"

const SET_USER_DATA = 'SET_USER_DATA'
const LOGIN = 'LOGIN'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
            default:
                return state
    }
}

export const setAuthUserDataRequest = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}})
// export const loginRequest = (email, login, rememberMe=false, isAuth) => ({type: LOGIN, email, login, rememberMe, isAuth})

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.authRequest().then(data => {  
            if (data.resultCode === 0){
              let {id, email, login} = data.data
              dispatch(setAuthUserDataRequest(id, email, login, true));
            }
        });
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.loginRequest(email, password, rememberMe).then(data => {
            console.log(data)
            if (data.resultCode === 0){
                dispatch(getAuthUserData())
                // dispatch(loginRequest(email, password, rememberMe, false));
            } else {
                let errorMessage = data.messages.length > 0 ? data.messages[0] : "Some error"
                dispatch(stopSubmit('login', {_error: errorMessage}))
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logoutRequest().then(data => {
            if (data.resultCode === 0){
                dispatch(setAuthUserDataRequest(null, null, null, false));
            }
        })
    }
}



export default authReducer