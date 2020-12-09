import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA : 
            return {
                ...state,
                ...action.data
            }
        default: return state;
    }
}

export const setUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, data: {id, email, login, isAuth}});
export const getUserData = () => {
    return (dispatch) => {
        authAPI.me().then(data => {
            if (data.resultCode == 0) {
                let {id, email, login} = data.data;
                dispatch(setUserData(id, email, login, true));
            }   else {
                dispatch(setUserData(null, null, null, false));
            }
        })
    }
}

export const LoginThunk = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email,password,rememberMe).then(data => {
            if (data.resultCode == 0) {
                dispatch(getUserData());
            }            
        })
    }
}

export const LogoutThunk = () => {
    return (dispatch) => {
        authAPI.logout().then(data => {
            if (data.resultCode == 0) {
                dispatch(getUserData());
            }
        })
    }
}

export default authReducer;