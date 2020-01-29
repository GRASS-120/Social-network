import React from 'react';
import a from './Posts.module.css'
import Post from '../Post/Post';
import {addPostActionCreator, changeNewPostTextActionCreator} from '../../../../redux/posts-reducer'

const Posts = ( {postsPage, dispatch} ) => {

    let {posts, newPostText} = postsPage
    let newPostElem = React.createRef()


    let elemPosts = posts.map( (item) => {
        return (<Post message={item.message} likes_count={item.likes_count} id={item.id}/>);
    })

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let action = changeNewPostTextActionCreator(text)
        dispatch(action);
    }

    return (
        <div className={a.posts}>
            
            <p className={a.my_posts}>My posts📢</p>
            <input className={a.new_posts_text} placeholder="Post text..." ref={newPostElem} value={newPostText} onChange={onPostChange}></input>
            <button className={a.add_post} onClick={addPost}>Add post</button>

            {elemPosts}

      </div>
    )
}

export default Posts;