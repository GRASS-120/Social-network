import React from 'react';
import styles from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../img/6xQ6_ADKgiQ.jpg'

let Users = (props) => {

    if (props.users.length === 0){

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(Response => {
            props.setUsers(Response.data.items)
        })
    }

    return <div>
        {
            props.users.map(u => <div >
                <div>
                    <img src={ u.photos.small !== null ? u.photos.small : userPhoto} alt=""/>
                    { u.followed ?
                     <button onClick={ () => {props.unfollow(u.id)} }>UNFOLLOW</button> :
                     <button onClick={ () => {props.follow(u.id)} }>FOLLOW</button> 
                    }
                </div>
                <div>
                    <div>
                        <p>{u.name}</p>
                        <p>{'u.location.country'}</p>
                        <p>{'u.location.city'}</p>
                    </div>
                    <div>
                        <p>{u.status}</p>
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users;