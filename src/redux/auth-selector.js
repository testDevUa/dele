export const getUserId = (state) => {
    return state.authReducer.id;
}

export const getUserLogin = (state) => {
    return state.authReducer.login;
}