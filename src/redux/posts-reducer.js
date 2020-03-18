const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'

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
    newPostText: ''
}

const postsReducer = (state = initialState, action) => {

    switch (action.type){
        case ADD_POST: {
            let newPost = {
                id: 3,
                // id: STATE.posts[STATE.posts.length - 1].id + 1,
                message: state.newPostText,
                likes_count: 0
            }
        
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost);       // добавление поста
            stateCopy.newPostText = ''           // очистка строки после добавления поста

            return stateCopy
    }

        case CHANGE_NEW_POST_TEXT : {
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.newPostText = action.text;

            return stateCopy
    }
        default:
            return state
}};

export const addPostActionCreator = () => ({type: ADD_POST})
export const changeNewPostTextActionCreator = (text) => ({type: CHANGE_NEW_POST_TEXT, text: text})

export default postsReducer