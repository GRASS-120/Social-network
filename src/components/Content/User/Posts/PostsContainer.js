import React from 'react';
import a from './Posts.module.css'
import Post from '../Post/Post';
import {addPostActionCreator, changeNewPostTextActionCreator} from '../../../../redux/posts-reducer'
import Posts from './Posts';

const PostsContainer = ( {postsPage, dispatch} ) => {

    let {posts, newPostText} = postsPage
    let newPostElem = React.createRef()


    let elemPosts = posts.map( (item) => {
        return (<Post message={item.message} likes_count={item.likes_count} id={item.id}/>);
    })

    let addPost = () => {
        let action = addPostActionCreator()
        dispatch(action);
    }

    let onPostChange = (text) => {
        let action = changeNewPostTextActionCreator(text)
        dispatch(action);
    }

    return (<Posts changeNewPostText={onPostChange}></Posts>)
}

export default PostsContainer;