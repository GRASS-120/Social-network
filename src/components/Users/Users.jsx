import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../img/6xQ6_ADKgiQ.jpg';
import Preloader from '../Common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i=1; i <= pagesCount; i++){
        pages.push(i)
    }

    return <div className={style.users}>

    { props.isFetching ? <Preloader/> : null }

     {
        props.users.map(u => <div className={style.users_item}>
            <div className={style.left_block}>
                <NavLink to={`/profile/${u.id}`}>
                    <img src={ u.photos.small !== null ? u.photos.small : userPhoto} className={style.user_img}/>
                </NavLink>
                { u.followed ?
                 <button onClick={ () => {props.unfollow(u.id)}} className={style.unfollow_button}>UNFOLLOW</button> :
                 <button onClick={ () => {props.follow(u.id)}} className={style.follow_button}>FOLLOW</button> 
                }
            </div>
            <div className={style.right_block}>
                <div className={style.user_inf}>
                    <p className={style.name}>{u.name}</p>
                    <p className={style.country}>{'u.location.country'}</p>
                    <p className={style.city}>{'u.location.city'}</p>
                </div>
                <div className={style.user_status}>
                    <p>{u.status !== null ? u.status : 'status'}</p>
                </div>
            </div>
        </div>)
    }

    <div className={style.pagination}>
        {pages.map(page => {
            return <span className={props.currentPage === page && style.selected_page} onClick={(event) => {props.onPageChange(page)}}>{page}</span>
        })}
    </div>

</div>
}

export default Users