import React from 'react';
import {addPostActionCreator, changeNewPostTextActionCreator} from '../../../../redux/posts-reducer'
import Posts from './Posts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        postsPage: state.postsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            let action = addPostActionCreator()
            dispatch(action);
        },
        changeNewPostText: (text) => {
            let action = changeNewPostTextActionCreator(text)
            dispatch(action);
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
// connect осуществляет локальную перерисовку дерева

export default PostsContainer;