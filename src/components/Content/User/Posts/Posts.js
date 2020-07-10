import React from 'react';
import a from './Posts.module.css'
import Post from '../Post/Post';

// const Posts = (props) => {

//     let {posts, newPostText} = props.postsPage
//     let newPostElem = React.createRef()


//     let elemPosts = posts.map( (item) => {
//         return (<Post message={item.message} likes_count={item.likes_count} id={item.id}/>);
//     })

//     let onAddPost = () => {
//         props.addPost()
//     }

//     let onPostChange = () => {
//         let text = newPostElem.current.value
//         props.changeNewPostText(text);
//     }

//     return (
//         <div className={a.posts}>
            
//             <p className={a.my_posts}>My posts📢</p>
//             <input className={a.new_posts_text} placeholder="Post text..." ref={newPostElem} value={newPostText} onChange={onPostChange}></input>
//             <button className={a.add_post} onClick={onAddPost}>Add post</button>

//             {elemPosts}

//         </div>
//     )
// }

class Posts extends React.Component {
    constructor(props){
        super(props)
        this.newPostElem = React.createRef()
    }

    onAddPost = () => {
        this.props.addPost()
    }

    onPostChange = () => {
        let text = this.newPostElem.current.value
        this.props.changeNewPostText(text);
    }

    render(){
        return <div className={a.posts}>
                    <p className={a.my_posts}>My posts📢</p>
                    <input className={a.new_posts_text} placeholder="Post text..." ref={this.newPostElem} value={this.props.newPostText} onChange={this.onPostChange}></input>
                    <button className={a.add_post} onClick={this.onAddPost}>Add post</button>

                    {
                        this.props.posts.map( (item) => 
                            {return (<Post message={item.message} likes_count={item.likes_count} id={item.id}/>)})
                    }
                </div>
    }
}

export default Posts;