import React from 'react';
import Posts from './Posts/Posts';
import a from './User.module.css'
import PostsContainer from './Posts/PostsContainer';

const User = ( {postsPage, dispatch} ) => {

    

    return (
        <div className={a.user}>
          <div className = {a.user__avatar}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5U3HVtQWJ8lBb5TRWPJp07L-f3ABxpKgKsgpgPYC9oE_gqfem"></img>
          </div>
          <div className={a.user__inf}>
            <p className={a.user__name}>John de Zeal</p>
            <p className={a.user__status}>Status: "Dead inside...👹⛩️"</p>
            <p className={a.user__date_birth}>Date: 27.09.1990</p>
            <p className={a.user__city}>City: New York🗽</p>
            <p className={a.user__education}>Education: Cambridge, Software Engineer👨‍🎓</p>
          </div>
          <hr></hr>

         <PostsContainer postsPage={postsPage} dispatch={dispatch}/>
         
        </div>
    );
};

export default User;