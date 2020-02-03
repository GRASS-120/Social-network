import React from 'react';
import a from './Posts.module.css'
import Post from '../Post/Post';

const Posts = (props) => {

    let {posts, newPostText} = props.postsPage
    let newPostElem = React.createRef()


    let elemPosts = posts.map( (item) => {
        return (<Post message={item.message} likes_count={item.likes_count} id={item.id}/>);
    })

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElem.current.value
        props.changeNewPostText(text);
    }

    return (
        <div className={a.posts}>
            
            <p className={a.my_posts}>My posts📢</p>
            <input className={a.new_posts_text} placeholder="Post text..." ref={newPostElem} value={newPostText} onChange={onPostChange}></input>
            <button className={a.add_post} onClick={onAddPost}>Add post</button>

            {elemPosts}

      </div>
    )
}

export default Posts;