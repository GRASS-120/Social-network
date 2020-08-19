import React from 'react';
import a from './User.module.css'
import PostsContainer from './Posts/PostsContainer';
import Preloader from '../../Common/Preloader/Preloader';

let User = (props) => {

    if (!props.profile) {
      return <Preloader />
    }

    return <div className={a.user}>
      {/* <div className = {a.user__avatar}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5U3HVtQWJ8lBb5TRWPJp07L-f3ABxpKgKsgpgPYC9oE_gqfem"></img>
      </div>
      <div className={a.user__inf}>
        <p className={a.user__name}>John de Zeal</p>
        <p className={a.user__status}>Status: "Dead inside...👹⛩️"</p>
        <p className={a.user__date_birth}>Date: 27.09.1990</p>
        <p className={a.user__city}>City: New York🗽</p>
        <p className={a.user__education}>Education: Cambridge, Software Engineer👨‍🎓</p>
      </div>
      <hr></hr> */}

      <div className = {a.user__avatar}>
        <img src={props.profile.photos.large}></img>
      </div>
      <div className={a.user__inf}>
        <p className={a.user__name}>{props.profile.fullName}</p>
        <p className={a.user__status}>Status: {props.profile.aboutMe}</p>

        {props.profile.lookingForAJob == true ? <p className={a.user__date_birth}>{props.profile.lookingForAJobDescription}</p> : null}

        <p className={a.user__city}>City: New York🗽</p>
        <p className={a.user__education}>Education: Cambridge, Software Engineer👨‍🎓</p>
      </div>
      <hr></hr>

     <PostsContainer postsPage={props.postsPage} dispatch={props.dispatch}/>
     
    </div>
}

export default User