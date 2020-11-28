const { default: Axios } = require("axios");

const instance = Axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "aa3c0aa7-66f3-423e-bb8b-775d6f9fa549"
    }
})

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