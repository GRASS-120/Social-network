import React from 'react';
import {addPostActionCreator, changeNewPostTextActionCreator} from '../../../../redux/posts-reducer'
import Posts from './Posts';

const PostsContainer = ( {postsPage, dispatch} ) => {

    let addPost = () => {
        let action = addPostActionCreator()
        dispatch(action);
    }

    let onPostChange = (text) => {
        let action = changeNewPostTextActionCreator(text)
        dispatch(action);
    }

    return (<Posts changeNewPostText={onPostChange} addPost={addPost} postsPage={postsPage}></Posts>)
}

export default PostsContainer;