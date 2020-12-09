const { default: Axios } = require("axios");

const instance = Axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "aa3c0aa7-66f3-423e-bb8b-775d6f9fa549"
    }
})

export const profileAPI = {
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => response.data);
    }, 
    getUser(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
    setStatus(status) {
        return instance.put(`profile/status`, {status: status}).then(response => console.log(response));
    }
}

export const usersAPI = {
    getUsers(pageNumber) {
        return instance.get(`users?page=${pageNumber}&count=10`).then(response => response.data)
    },
    followUser (id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    unfollowUser (id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me').then(response => response.data);
    },
    login(email, password, rememberMe = true) {
        return instance.post('auth/login', {email, password, rememberMe}).then(response => response.data);
    },
    logout() {
        return instance.delete('auth/login').then(response => response.data);
    }
}