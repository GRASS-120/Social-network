import * as axios from 'axios'

// Общие настройки для запроса
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,  // ? авторизован ли пользователь ?
    headers: {
        'API-KEY': 'c966373d-cc4d-4199-ad3b-01ba84f6d32d'  // подтверждение для всех запросов, кроме get()
        }  
})

export const usersAPI = {

    getUsers(currentPage=1, pageSize=10){
        return instance.get( `users?page=${currentPage}&count=${pageSize}`)
        .then(Response => { return Response.data })
    }
}

export const followAPI = {

    followRequest(id){
        return instance.post( `follow/${id}`, {})
        .then(Response => { return Response.data })
    },

    unfollowRequest(id){
        return instance.delete( `follow/${id}`)
        .then(Response => { return Response.data })
    }
}

export const authAPI = {

    authRequest(){
        return instance.get("/auth/me")
        .then(Response => { return Response.data })
    }
}

export const profileAPI = {
    
    profileRequest(userId){
        return instance.get(`/profile/${userId}`)
        .then(Response => { return Response.data })
    }
}