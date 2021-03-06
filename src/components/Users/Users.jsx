import React from 'react';
import style from './Users.module.css';
import Preloader from '../Common/Preloader/Preloader';
import Paginator from '../Common/Paginator/Paginator';
import User from './User/User';

let Users = ({totalUsersCount, pageSize, currentPage, onPageChange, followingProgress, follow, unfollow, ...props}) => {

    return <div className={style.users}>

    { props.isFetching ? <Preloader/> : null }

     {
        props.users.map(u => <User key={u.id} u={u} followingProgress={followingProgress} follow={follow} unfollow={unfollow}/>)
    }

    <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChange={onPageChange}/>

</div>
}

export default Users