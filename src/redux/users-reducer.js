const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        // {id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTF28fh64NjxRTsy5-BtEQ9vdGIa7CvhZOQjw&usqp=CAU',
        //  name: 'Ara Toro', location: {country: 'Russia', city: 'Vladivostok'}, status: 'I wanna pizza', following: true},

        // {id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmAX7E2poRkYULHkipg0HTjLXyfD0aorSS0w&usqp=CAU',
        //  name: 'Jack Pitterson', location: {country: 'USA', city: 'Seattle'}, status: 'I hate myself', following: false},

        // {id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQh-tSRRz2O43vPz2LCbGAlNwP0teU4yu7UQ&usqp=CAU',
        //  name: 'Kira Ito', location: {country: 'Japan', city: 'Kioto'}, status: '(some japaneese speach)', following: false},

        // {id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQr-s-I1GPxvbWoOaKb00Jm4ChPrfSlb26u6A&usqp=CAU',
        //  name: 'Giorno Govanna', location: {country: 'Italy', city: 'Neaphol'}, status: 'GO IGRAT', following: false},
    ]
}

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {  // тоже самое что и users: [...state.users]
                    if (u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case  UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => { 
                    if (u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }

        // ин-фа приходит с сервера
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}  // объединение списка старых юзеров и новых
        }

        default:
            return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users}) 

export default usersReducer