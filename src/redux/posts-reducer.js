import { profileAPI } from "../API/api";

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS_PROFILE = 'SET_STATUS_PROFILE'
const DELETE_POST = 'DELETE_POST'

let initialState = {  // начальное значение STATE
    posts: [
        {
            id: 1,
            message: "Hi! Anime poor💩🖕",
            likes_count: 1,
        },
        {
            id: 2,
            message: "DO YOU UNDERSTAAAAAAAAAAANDO?",
            likes_count: 231,
        },
    ],
    profile: null,
    status: ""
}

export const postsReducer = (state = initialState, action) => {

    switch (action.type){
        case ADD_POST: {
            let newPost = {
                id: 3,
                // id: STATE.posts[STATE.posts.length - 1].id + 1,
                message: action.message,
                likes_count: 0
            }

            return {
                ...state,
                posts: [...state.posts, newPost],  // добавление поста
            }
        }

        case SET_USER_PROFILE : {
            return {
                ...state,
                profile: action.profile
            }
        }

        case SET_STATUS_PROFILE : {
            return {
                ...state,
                status: action.status
            }
        }

        case DELETE_POST : {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }
        }

        default:
            return state
}};

export const addPostActionCreator = (message) => ({type: ADD_POST, message: message})
// export const changeNewPostTextActionCreator = (text) => ({type: CHANGE_NEW_POST_TEXT, text: text})
export const setUserProfileSuccess = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_STATUS_PROFILE, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const setUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.profileRequest(userId).then(data => {
            dispatch(setUserProfileSuccess(data));
    });
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.profileStatus(userId).then(data => {
            dispatch(setUserStatus(data))
        })
    }
}

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
    }
}

export default postsReducer