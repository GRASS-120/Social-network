const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'

let initialSate = {  // начальное значение STATE
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

const postsReducer = (STATE = initialSate, action) => {

    if (action.type === ADD_POST){
        let newPost = {
            id: 3,
            // id: STATE.posts[STATE.posts.length - 1].id + 1,
            message: STATE.newPostText,
            likes_count: 0
        }
    
        STATE.posts.push(newPost);       // добавление поста
        STATE.newPostText = ''     // очистка строки после добавления поста

        console.log(newPost)
    }

    else if (action.type === CHANGE_NEW_POST_TEXT){
        STATE.newPostText = action.text;
    }

    return STATE
};

export const addPostActionCreator = () => ({type: ADD_POST})
export const changeNewPostTextActionCreator = (text) => ({type: CHANGE_NEW_POST_TEXT, text: text})

export default postsReducer