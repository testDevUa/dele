import { profileAPI } from "../api/api";

let initialState = {
    profile: null,
    status: null
}

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS';

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE : {
            return {...state, profile: action.profile}
        }
        case SET_USER_STATUS : {
            return {...state, status: action.text}
        }
        case UPDATE_USER_STATUS : {
            return {...state}
        }
        default: return state;
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (text) => ({type: SET_USER_STATUS, text})
export const updateUserStatus = () => ({type: UPDATE_USER_STATUS})

export const setUser = (userId) => {
    return (dispatch) => {
        profileAPI.getUser(userId).then(data => {
            dispatch(setUserProfile(data))
        })

    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setUserStatus(data))
            debugger;
        })
    }
}

export const setStatus = (status) => {
    return (dispatch) => {
        profileAPI.setStatus(status).then(data => {
            dispatch(updateUserStatus(data));
        })
    }
}

export default profileReducer;